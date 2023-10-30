'use client';

import Container from '@/components/Container';
import SettingsNav from './settingsNav';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row h-screen">
        <SettingsNav />
        <main className="px-4 sm:px-6 lg:flex-auto lg:px-0 w-full">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
