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

  // function to render different content based on the route
  useEffect(() => {
    console.log('current route changed');
    console.log(router);
    switch (currentRoute) {
      case '/pages':
        setCurrentRoute(<PagesDYN />);
        break;
      case '/about':
        setCurrentRoute(<AboutDYN />);
        break;
      case '/services':
        setCurrentRoute(<ServicesDYN />);
        break;
      case '/contact':
        setCurrentRoute(<ContactDYN />);
        break;
      default:
        setCurrentRoute(<HomeDYN />);
        break;
    }
  }, [router]);

  return (
    <div className="root">
      <header className="bg-headerBackground w-full h-screen relative">
        <div className="inner_header w-full lg:flex items-center justify-center mx-auto container">
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
