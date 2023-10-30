'use client'

import { SOCIAL_LINKS } from '@/constants/hardcoded'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './JoinWaitlistCard.css'

export default function JoinWaitlistCard() {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)
  const [alreadySubscribedAlertVisible, setAlreadySubscribedAlertVisible] = useState(false)

  // Function to hide the error message after a delay
  const hideErrorMessage = () => {
    setShowErrorAlert(false)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setIsEmailValid(true)
    // Hide the "Already subscribed" alert when the user changes their email.
    setAlreadySubscribedAlertVisible(false)
  }

  const handleNotifyMeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    // Validate the email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailPattern.test(email)) {
      setIsEmailValid(false)
      setShowSuccessAlert(false)
      setShowErrorAlert(true)
      setTimeout(hideErrorMessage, 3000)
      return
    }

    try {
      // Send a POST request to the API route.
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        // User subscribed successfully.
        setShowSuccessAlert(true)
        setShowErrorAlert(false)

        // Redirect to the Discord invite link
        window.location.href = SOCIAL_LINKS.DISCORD
      } else {
        // Handle error response from the API.
        const errorResponse = await response.json()
        // console.log("ERROR IS ", errorResponse)
        if (errorResponse.message === 'You have already subscribed') {
          // Display the "You have already subscribed" alert.
          setAlreadySubscribedAlertVisible(true)
        } else {
          setShowSuccessAlert(false)
          setShowErrorAlert(true)
          // Hide the error message after 3 seconds
          setTimeout(hideErrorMessage, 3000)
        }
      }
    } catch (error) {
      // Handle any network or other errors.
      setShowSuccessAlert(false)
      setShowErrorAlert(true)
      setTimeout(hideErrorMessage, 3000)
    }
    setEmail('')
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get notified when we're launching.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            ossa.ai will be launching in Q4 of 2024. Stay up-to-date by joining the email list!
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Enter your email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={handleEmailChange}
              className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 ${
                !isEmailValid ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={handleNotifyMeClick}
            >
              Notify me
            </button>
          </form>
        </div>
      </div>

      {/* Error alert */}
      <CSSTransition in={showErrorAlert} timeout={300} classNames="alert-fade" unmountOnExit>
        <div className="fixed top-0 left-0 right-0 p-4 bg-red-50 text-red-800 text-center">
          <div className="flex items-center justify-center">
            <XCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium">Please enter a valid email address before opting in.</span>
          </div>
        </div>
      </CSSTransition>

      {/* Success alert */}
      <CSSTransition in={showSuccessAlert} timeout={300} classNames="alert-fade" unmountOnExit>
        <div className="fixed top-0 left-0 right-0 p-4 bg-green-50 text-green-800 text-center">
          <div className="flex items-center justify-center">
            <CheckCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium">Successfully joined the waitlist. Redirecting...</span>
          </div>
        </div>
      </CSSTransition>

      {/* Already subscribed */}
      <CSSTransition in={alreadySubscribedAlertVisible} timeout={300} classNames="alert-fade" unmountOnExit>
        <div className="fixed top-0 left-0 right-0 p-4 bg-yellow-50 text-yellow-800 text-center">
          <div className="flex items-center justify-center">
            <XCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium">You have already subscribed.</span>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}