import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import VerticalSpacer from '@/components/VerticalSpacer';
import Container from '@/components/Container';
import React from 'react';

interface ProtectedPagesLayoutProps {
  children: React.ReactNode
}

export default function ProtectedPagesLayout({
  children
}: ProtectedPagesLayoutProps) {
  return (
    <>
      <Navbar />
      <main className='flex-grow'>
        <Container>
          <VerticalSpacer>
            { children }
          </VerticalSpacer>
        </Container>
      </main>
      <Footer />
    </>
  )
}