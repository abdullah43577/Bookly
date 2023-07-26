import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomeDYN from '@/components/Routes/HomeDYN';
import AboutDYN from '@/components/Routes/AboutDYN';
import PagesDYN from '@/components/Routes/PagesDYN';
import ServicesDYN from '@/components/Routes/ServicesDYN';
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
    <>
      <header className="bg-headerBackground w-full h-auto lg:h-screen relative px-8 pb-6 lg:pb-0 mb-32">
        <div className="inner_header w-full lg:flex items-center justify-center mx-auto container">
          <Navbar />
        </div>

        {/* content rendered dynamically based on the route */}
        <section className="hero lg:flex justify-between items-center container w-full mx-auto mt-10">{currentRoute}</section>
      </header>

      <main className="w-full h-full">{children}</main>

      <Footer />
    </>
  );
}
