"use client";

import NotificationHeader from '@/components/Landing/NotificationHeader';
import Footer from '@/components/Footer';
import JoinWaitlistCard from '@/components/Landing/JoinWaitlistCard';
import LogoOSSA from "@/images/logos/logo-big-black-nobg.png";

import Image from 'next/image';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NotificationHeader />
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="w-64 h-45">
            <Image
              priority
              src={LogoOSSA}
              alt="OSSA Logo"
              width={300}
              height={300}
            />
          </div>
        </div>
      </header>
      <div className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <JoinWaitlistCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
