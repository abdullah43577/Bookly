import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import HomeDYN from '@/dynamic-contents/homeDYN';
import AboutDYN from '@/dynamic-contents/AboutDYN';
import PagesDYN from '@/dynamic-contents/PagesDYN';
import ServicesDYN from '@/dynamic-contents/ServicesDYN';
import ContactDYN from '@/dynamic-contents/Contact';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  // const router = useRouter();
  const [router, setRouter] = useState(useRouter());
  // const currentRoute = router.pathname;
  const [currentRoute, setCurrentRoute] = useState(router.pathname);

  useEffect(() => {
    console.log('current route changed');
    console.log(router);
    // function to render different content based on the route
    if (currentRoute === '/pages') {
      return <PagesDYN />;
    } else if (currentRoute === '/about') {
      return <AboutDYN />;
    } else if (currentRoute === '/services') {
      return <ServicesDYN />;
    } else if (currentRoute === '/contact') {
      return <ContactDYN />;
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
