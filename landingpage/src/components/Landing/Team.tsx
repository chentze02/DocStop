import React from 'react';
import ChenPhoto from "@/images/ChenPhoto.png"; 
import KrishPhoto from "@/images/KrishPhoto.jpg"; 
import AnanPhoto from "@/images/anan.jpg"; 
import Image from 'next/image';

const people = [
  {
    name: 'Chen Tzen Kok',
    role: 'Founder / CEO',
    image: ChenPhoto,
  },
  {
    name: 'Krish Shah',
    role: 'Software Lead',
    image: KrishPhoto,
  },
  {
    name: 'Anan Wang',
    role: 'Head of Growth',
    image: AnanPhoto,
  },

  // More people...
];

function LeadershipSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl pr-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 ">
            As a team of dedicated college students from UCLA, we lead with passion and expertise to develop a cutting-edge dental appointment scheduling system for Malaysia.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2"> {/* Adjusted gap-y-12 */}
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6"> {/* Adjusted gap-x-6 */}
                <Image // Use the <Image> component
                  src={person.image}
                  alt={person.name}
                  width={128} // Increased width
                  height={128} // Increased height
                  className="h-32 w-32 rounded-full" // Increased size
                />
                <div>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900"> {/* Adjusted text size */}
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeadershipSection;
