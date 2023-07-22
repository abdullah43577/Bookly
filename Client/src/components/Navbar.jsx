import Image from 'next/image';
import Link from 'next/link';
import cart from '../../public/images/Vector.png';
import book from '../../public/images/book.png';
import { useState } from 'react';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  // handle navbar toggle
  const handleNavBar = function () {
    setNavbar((prevValue) => !prevValue);
  };

  return (
    <nav className="logo_nav_menu flex items-center justify-between w-full py-6 h-[10vh]">
      <div className="logo flex items-center justify-center z-20">
        <Image src={book} alt="logo icon" />
        <label htmlFor="logo" className="pl-2 text-white">
          Bookly
        </label>
      </div>

      <div
        className={`mobile-nav absolute top-[10vh] lg:top-0 right-0 lg:relative flex items-center lg:justify-center gap-4 bg-headerBackground h-full w-full lg:w-auto flex-col lg:bg-transparent lg:flex-row overflow-hidden lg:overflow-visible lg:translate-y-0 ${
          !navbar && 'translate-y-[-100%]'
        }`}
      >
        <ul className="lg:flex items-center justify-center text-white gap-4">
          <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base">
            <Link href="/pages">Pages</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Cart icon */}
        <Image src={cart} alt="cart icon" height={21} width={22} className="cursor-pointer" />

        <button className="bg-CTA px-3 py-2 text-headerBackground font-bold ml-6 cardoFont">Order Today</button>
      </div>

      {/* burger menu */}
      <div className="burger cursor-pointer lg:hidden z-20" onClick={handleNavBar}>
        <div className={`line1 bg-white ${navbar && 'toggle'}`}></div>
        <div className={`line2 bg-white ${navbar && 'toggle'}`}></div>
        <div className={`line3 bg-white ${navbar && 'toggle'}`}></div>
      </div>
    </nav>
  );
}
