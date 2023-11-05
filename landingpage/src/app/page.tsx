"use client";

import NotificationHeader from '@/components/Landing/NotificationHeader';
import Footer from '@/components/Landing/LandingFooter';
import JoinWaitlistCard from '@/components/Landing/JoinWaitlistCard';
import LogoDocstop from "@/images/LogoDocStop.png";

import Image from 'next/image';
import { Template } from '../../node_modules/heroicons-react/build/index';
import LeadershipSection from '@/components/Landing/Team';
import Partners from '@/components/Landing/Partners';
import FAQ from '@/components/Landing/Faq';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NotificationHeader />
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="w-64 h-45">
            <Image
              priority
              src={LogoDocstop}
              alt="DocStop Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </header>
      <div className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <JoinWaitlistCard />
            <LeadershipSection />
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
