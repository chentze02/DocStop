'use client'
import { profilePhotoUrl } from '@/app/mockData'
import { filterClassnames } from '@/utils'
import { Dialog, Switch } from '@headlessui/react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Heading, HeadingWrapper } from './Headers'
// TODO: on mobile, make the settingsNav a dropdown and put the heading title for current settings being viewed on the right

export default function AccountSettings() {
  return (
    <div>
      <HeadingWrapper>
        <Heading>Account Settings</Heading>
      </HeadingWrapper>
      <dl className='mt-6 space-y-6 divide-y divide-gray-100 text-sm leading-6'>
        {/* Name */}
        <div className='pt-6 sm:flex'>
          <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>Full name</dt>
          <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
            <div className='text-gray-900'>Tom Cook</div>
            <button type='button' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Update
            </button>
          </dd>
        </div>

        {/* Email */}
        <div className='pt-6 sm:flex'>
          <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>Email address</dt>
          <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
            <div className='text-gray-900'>tom.cook@example.com</div>
            <button type='button' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Update
            </button>
          </dd>
        </div>

        {/* Password */}
        <div className='pt-6 sm:flex'>
          <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6'>Password</dt>
          <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
            <div className='text-gray-900'>*******</div>
            <button type='button' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Update
            </button>
          </dd>
        </div>

        {/* Profile Photo */}
        <div className='pt-6 sm:flex'>
          <dt className='font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 flex flex-col justify-center'>
            Profile Photo
          </dt>
          <dd className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
            {profilePhotoUrl ? (
              <img src={profilePhotoUrl} alt='Profile Photo' className='h-12 w-12 rounded-full' />
            ) : (
              <UserCircleIcon className='h-12 w-12 text-gray-300' aria-hidden='true' />
            )}

            <button type='button' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Update
            </button>
          </dd>
        </div>
      </dl>
    </div>
  )
}
