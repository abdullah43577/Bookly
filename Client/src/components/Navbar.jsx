import Image from 'next/image';
import Link from 'next/link';
import cart from '../../public/images/Vector.png';
import book from '../../public/images/book.png';
import { useContext } from 'react';
import { modal } from './RootLayout';

export default function Navbar() {
  const { handleCartClick, noOfItemsInCart, navbar, handleNavBar, setNavbar } = useContext(modal);

  // const handleDelete = async function () {
  //   try {
  //     const res = await fetch(`http://localhost:8080/api/delete-all-stores`, {
  //       method: 'DELETE',
  //     });
  //     const data = await res.json();
  //     console.log(data.message);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <nav className="logo_nav_menu flex items-center justify-between w-full py-6 h-[10vh]">
      <div className="logo flex items-center justify-center z-20">
        <Image src={book} alt="logo icon" />
        <label htmlFor="logo" className="pl-2 text-white font-bold">
          Bookly
        </label>
      </div>

      <div
        className={`mobile-nav absolute top-[10vh] lg:top-0 right-0 lg:relative flex items-center lg:justify-center gap-4 bg-headerBackground h-screen lg:h-auto w-full lg:w-auto flex-col lg:bg-transparent lg:flex-row overflow-hidden lg:overflow-visible lg:translate-y-0 ${
          !navbar && 'translate-y-[-100%]'
        }`}
      >
        <ul className="lg:flex items-center justify-center text-white gap-4">
          <Link href="/">
            <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center">Home</li>
          </Link>

          <Link href="/pages">
            <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center">Pages</li>
          </Link>

          <Link href="/about">
            <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center">About</li>
          </Link>

          <Link href="/services">
            <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center">Services</li>
          </Link>

          <Link href="/store">
            <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center">Store</li>
          </Link>

          <Link href="/contact">
            <li className="hover:bg-CTA px-3 py-1 rounded text-lg my-4 lg:my-0 lg:text-base text-center">Contact</li>
          </Link>
        </ul>

        {/* Cart icon */}
        <div className="relative" onClick={handleCartClick}>
          <Image src={cart} alt="cart icon" height={21} width={22} className="cursor-pointer" />

          {noOfItemsInCart > 0 && <span className="absolute -top-1 -right-1 bg-CTA text-white rounded-full w-4 h-4 text-xs flex items-center cardoFont justify-center">{noOfItemsInCart}</span>}
        </div>

        <Link href="/store/checkout" onClick={() => setNavbar(false)}>
          <button className="bg-CTA px-3 py-2 text-headerBackground font-bold ml-6 cardoFont">Order Today</button>
        </Link>
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
