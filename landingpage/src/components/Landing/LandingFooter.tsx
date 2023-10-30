import React, { useEffect, useState } from 'react';
import AlertModal from './AlertModal';
import { CSSTransition } from 'react-transition-group';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { SOCIAL_LINKS } from '@/constants/hardcoded';

const LandingFooter = () => {
const [showModal, setShowModal] = useState(false);
const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alreadySubscribedAlertVisible, setAlreadySubscribedAlertVisible] = useState(false);
  const [alertPosition, setAlertPosition] = useState({ top: 0, left: 0 });

  const hideErrorMessage = () => {
    setShowErrorAlert(false);
  };

  // Add an effect to update the alert position based on scroll position
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYYOffset;
    setAlertPosition({ top: scrollY, left: 0 });
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(true);
    // Hide the "Already subscribed" alert when the user changes their email.
    setAlreadySubscribedAlertVisible(false);
  };


const handleNotifyMeClick = async (event) => {
    event.preventDefault();

    // Validate the email 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setIsEmailValid(false);
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
      setTimeout(hideErrorMessage, 3000);
      return;
    }

    try {
      // Send a POST request to the API route.
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // User subscribed successfully.
        setShowSuccessAlert(true);
        setShowErrorAlert(false);

        // Redirect to the Discord invite link 
        const discordLink =  process.env.NEXT_PUBLIC_DISCORD_LINK

        window.location.href =  discordLink 
        // window.location.href = "https://discord.gg/Amhjsqrc";
      } else {
        // Handle error response from the API.
        const errorResponse = await response.json();
        if (errorResponse.message === "You have already subscribed") {
          // Display the "You have already subscribed" alert.
          setAlreadySubscribedAlertVisible(true);
        } else {
          setShowSuccessAlert(false);
          setShowErrorAlert(true);
          // Hide the error message after 3 seconds
          setTimeout(hideErrorMessage, 3000);
        }
      }
    } catch (error) {
      // Handle any network or other errors.
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
      setTimeout(hideErrorMessage, 3000);
    }
    setEmail('');
  };
  const navigation = {
    affliates: [
      { name: 'Apply', href: '#' },
      { name: 'Login', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Leave Feedback', href: '#' },
      { name: 'Knowledge Base', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Mission', href: '#' },
    ],
    socials: [
      { name: 'Instagram', href: 'https://instagram.com/docstop.co?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr' },
      { name: 'YouTube', href: SOCIAL_LINKS.YOUTUBE },
    ],
    social: [
  {
    name: 'Instagram',
    href: 'https://instagram.com/docstop.co?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr',
    icon: (props) => (
      <svg className='flex items-center' fill="currentColor" width="24" height="24" viewBox="0 0 24 24" {...props} style={{ width: '24px', height: '24px', marginRight: '8px' }}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
      name: 'YouTube',
      href: SOCIAL_LINKS.YOUTUBE,
      icon: (props) => (
        <svg className='flex items-center' fill="currentColor" width="24" height="24" viewBox="0 0 24 24" {...props} style={{ width: '24px', height: '24px', marginRight: '8px' }}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },


    ],
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32 justify-center">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 md:flex md:items-center md:justify-between items-center justify-center">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Solutions */}
              <div className='justify-center'>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Affiliates</h3>
                 <ul role="list" className="mt-6 space-y-4">
                  {navigation.affliates.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '#') {
                      e.preventDefault();
                      openModal();
                    }
                  }}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
                </ul>
              </div>
              {/* Support */}
              <div className="mt-10 md:mt-0 justify-center">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                 <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '#') {
                      e.preventDefault();
                      openModal();
                    }
                  }}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 justify-center">
              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '#') {
                      e.preventDefault();
                      openModal();
                    }
                  }}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
                </ul>
              </div>
              {/* Legal */}
              <div className="mt-10 md:mt-0 justify-center">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Socials</h3>
                 <ul role="list" className="mt-6 space-y-4">
                  {navigation.socials.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"  
                    rel="noopener noreferrer"
                  onClick={(e) => {
                    if (item.href === '#') {
                      e.preventDefault();
                      openModal();
                    }
                  }}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 justify-center">
            {/* Subscribe to newsletter */}
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Checkout our journey and product development stages</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Our Instagram shows different stages in our journey all the way to pitching at YCombinator
            </p>

             <div className='pt-6'>
             <a href="https://www.instagram.com/docstop/"  target="_blank" rel="noopener noreferrer">
  <button
    className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Click Here To Check It Out!
  </button>
</a>
</div>

            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleNotifyMeClick}

                >
                  Notify Me
                </button>
              </div>

              
            </form>

           

            {/* Display error message */}
      {showErrorAlert && (
        <div className="text-red-800 mt-2 text-sm font-medium">
          <XCircleIcon className="h-5 w-5 inline-block mr-2" aria-hidden="true" />
          Please enter a valid email address before opting in.
        </div>)
      }

      {/* Display success message */}
      {showSuccessAlert && (
        <div className="text-green-800 mt-2 text-sm font-medium">
          <CheckCircleIcon className="h-5 w-5 inline-block mr-2" aria-hidden="true" />
          Successfully joined the waitlist. Redirecting...
        </div> )
      }

      {/* Display "You have already subscribed" message */}
      {alreadySubscribedAlertVisible && (
        <div className="text-yellow-800 mt-2 text-sm font-medium">
          <XCircleIcon className="h-5 w-5 inline-block mr-2" aria-hidden="true" />
          You have already subscribed.
        </div>)
      }
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {/* Social Icons */}
            {navigation.social.map((item) => (
              <a key={item.name}  target="_blank" href={item.href} rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 flex items-center">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          {/* Copyright */}
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} DocStop All rights reserved.
          </p>
        </div>
      </div>
       {showModal && <AlertModal onClose={() => setShowModal(false)} />}
    </footer>

    </div>
  );
};

export default LandingFooter;
