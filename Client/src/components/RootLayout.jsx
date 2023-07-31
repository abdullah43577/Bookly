import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomeDYN from '@/components/Routes/HomeDYN';
import AboutDYN from '@/components/Routes/AboutDYN';
import PagesDYN from '@/components/Routes/PagesDYN';
import ServicesDYN from '@/components/Routes/ServicesDYN';
import ContactDYN from '@/components/Contact';
import StoreDYN from './Routes/StoreDYN';
import { createContext, useState, useEffect } from 'react';

export const modal = createContext();

export default function RootLayout({ children }) {
  const [router, setRouter] = useState(useRouter());
  const [currentRoute, setCurrentRoute] = useState(router.pathname);
  const [desktopHeaderHeight, setDesktopHeaderHeight] = useState('');
  const [margin, setMargin] = useState('');
  const [modalWindow, setModalWindow] = useState(false);
  const [submitBtn, setSubmitBtn] = useState('Submit');

  const [formData, setFormData] = useState({
    file: '',
    title: '',
    price: '',
    description: '',
    category: '',
  });

  useEffect(() => {
    // i.e if modalWindow is closed either by the button or the overlay was clicked it empty all inputs
    if (modalWindow === false) {
      setFormData({
        file: '',
        title: '',
        price: '',
        description: '',
        category: '',
      });
    }
  }, [modalWindow]);

  const handleInputChange = function (e) {
    const { name, value } = e.target; // title, blog1
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    setSubmitBtn('Submitting...');

    console.log('is there formData?', formData);

    // simulate some delay before submitting to the backend
    setTimeout(async () => {
      try {
        const res = await fetch(`http://localhost:8080/store`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log(res);
        if (res.status === 202) {
          console.log('success');
        } else {
          console.log('error');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setSubmitBtn('Submit');
        setModalWindow(false);
      }
    }, 2000); // 2 seconds delay;
  };

  const handleClick = function () {
    setModalWindow(true);
  };

  // function to render different content based on the route
  useEffect(() => {
    switch (currentRoute) {
      case '/pages':
        setCurrentRoute(<PagesDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/about':
        setCurrentRoute(<AboutDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/services':
        setCurrentRoute(<ServicesDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/store':
        setCurrentRoute(<StoreDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/contact':
        setCurrentRoute(<ContactDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      default:
        setCurrentRoute(<HomeDYN />);
        setDesktopHeaderHeight('lg:h-screen');
        setMargin('mb-32');
        break;
    }
  }, [router]);

  return (
    <modal.Provider value={{ modalWindow, handleClick, handleSubmit, formData, handleInputChange, submitBtn }}>
      <header className={`bg-headerBackground w-full h-auto ${desktopHeaderHeight} relative px-8 pb-6 lg:pb-0 ${margin}`}>
        <div className="inner_header w-full lg:flex items-center justify-center mx-auto container">
          <Navbar />
        </div>

        {/* content rendered dynamically based on the route */}
        <section className="hero lg:flex justify-between items-center container w-full mx-auto mt-10">{currentRoute}</section>
      </header>

      <main className="w-full h-full">{children}</main>

      <Footer />
      <div className={`overlay absolute top-0 left-0 bottom-0 z-[1000] h-full w-full ${modalWindow && 'visible'}`} onClick={() => setModalWindow(false)}></div>
    </modal.Provider>
  );
}
