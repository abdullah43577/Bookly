import Image from 'next/image';
import Link from 'next/link';
import cart from '../../public/images/Vector.png';
import book from '../../public/images/book.png';

export default function Navbar() {
  return (
    <nav className="logo_nav_menu flex items-center justify-between w-full py-6">
      <div className="logo flex items-center justify-center">
        <Image src={book} alt="logo icon" />
        <label htmlFor="logo" className="pl-2 text-white">
          Bookly
        </label>
      </div>

      <div className="absolute top-0 right-0 lg:relative lg:flex items-center justify-center gap-4">
        <ul className="lg:flex items-center justify-center text-white gap-4">
          <li className="hover:bg-CTA px-3 py-1 rounded">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded">
            <Link href="/pages">Pages</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:bg-CTA px-3 py-1 rounded">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Cart icon */}
        <Image src={cart} alt="cart icon" height={21} width={22} className="cursor-pointer" />

        <button className="bg-CTA px-3 py-2 text-headerBackground font-bold ml-6">Order Today</button>
      </div>
    </nav>
  );
}
