import Link from 'next/link';
import Image from 'next/image';
import book from '../../public/images/hero book.png';
import line from '../../public/images/Line.png';
import whiteLine from '../../public/images/white line.png';

export default function HomeDYN() {
  return (
    <section className="hero lg:flex justify-between items-center max-w-[1200px] w-full mx-auto mt-10">
      <div className="hero-content lg:flex gap-4 flex-col lg:w-1/2">
        <small className="text-background flex items-center gap-2 text-lg">
          <Image src={line} alt="line" />
          <i> Welcome to Bookly</i>
        </small>
        <h2 className="text-white text-6xl font-bold">Books are uniquely portable magic</h2>
        <p className="text-background">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className="button-sect lg:flex items-center gap-4">
          <button className="bg-CTA px-3 py-2 text-headerBackground font-bold">Order Today</button>
          <Link href="#" className="text-white">
            <a>Read Free Demo</a>
            <Image src={whiteLine} alt="white border" width={125} />
          </Link>
        </div>
      </div>

      <Image src={book} width={420} height={680} alt="book logo" />
    </section>
  );
}
