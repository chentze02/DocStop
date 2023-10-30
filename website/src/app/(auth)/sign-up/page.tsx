"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter from Next.js
import { auth } from '../../../firebase/client';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<null | string>(null); // State for error message

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Redirect to the desired page upon successful sign-up
      router.push('/'); // Replace '/dashboard' with your desired route
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error here (e.g., display an error message to the user)
      setError("Error signing up"); // Set error message state
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-10 w-auto" src="/icon.png" alt="ossa.ai" />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already have an account?{' '}
                <Link
                  href="sign-in"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign In
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSignUp} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {error && ( // Conditional rendering of error message
                    <div className="text-red-600">{error}</div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
