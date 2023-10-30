"use client";

import { Fragment, useRef, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import DropdownWithFace from '@/components/DropdownWithFace';




const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Generate', href: '#', current: true },
  { name: 'Videos', href: '#', current: false },
  { name: 'Help & FAQ', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  // Add more people as needed
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
 
 

  const handleSelectionChange = (selected) => {
    setSelectedPerson(selected);
  };

  const menuButtonRef = useRef()

  return (
    <>


        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">Video Generation</h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* Replace this with dashboard content */}
              <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
             
              <DropdownWithFace options={people} selected={selectedPerson} onChange={handleSelectionChange}/>
              
              <p>Selected Person: {selectedPerson.name}</p>
              
            </div>
          </div>
        </main>
    </>
  );
}
