import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomeDYN from '@/components/HomeDYN';
import AboutDYN from '@/components/AboutDYN';
import PagesDYN from '@/components/PagesDYN';
import ServicesDYN from '@/components/ServicesDYN';
import ContactDYN from '@/components/Contact';

export default function RootLayout({ children }) {
  const [router, setRouter] = useState(useRouter());
  const [currentRoute, setCurrentRoute] = useState(router.pathname);

  useEffect(() => {
    console.log('current route changed');
    console.log(router);
    // function to render different content based on the route
    if (currentRoute === '/pages') {
      setCurrentRoute(<PagesDYN />);
    } else if (currentRoute === '/about') {
      setCurrentRoute(<AboutDYN />);
    } else if (currentRoute === '/services') {
      setCurrentRoute(<ServicesDYN />);
    } else if (currentRoute === '/contact') {
      setCurrentRoute(<ContactDYN />);
    } else {
      setCurrentRoute(<HomeDYN />);
    }
  }, [router]);

  return (
    <div className="root">
      <header className="bg-headerBackground w-full h-screen relative">
        <div className="inner_header max-w-[1200px] w-full lg:flex items-center justify-center mx-auto">
          <Navbar />
        </div>

        {/* content rendered dynamically based on the route */}
        {currentRoute}
      </header>

      <main className="w-full h-full">
        <div className="inner_main max-w-[1200px]">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
