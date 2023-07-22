import Link from 'next/link';
import Image from 'next/image';
import book from '../../public/images/hero book.png';
import line from '../../public/images/Line.png';
import whiteLine from '../../public/images/white line.png';
import bullet from '../../public/images/Point.png';

export default function HomeDYN() {
  return (
    <>
      <div className="hero-content lg:flex gap-6 flex-col lg:w-1/2">
        <small className="text-background flex items-center gap-2 text-lg">
          <Image src={line} alt="line" />
          <i className="cardoFont"> Welcome to Bookly</i>
        </small>
        <h2 className="text-white text-4xl lg:text-6xl font-bold cardoFont my-4 lg:my-0">Books are uniquely portable magic</h2>
        <p className="text-headerParagraphTexts my-4 lg:my-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className="button-sect flex items-center gap-4 my-8 lg:my-4">
          <button className="bg-CTA px-6 py-3 text-headerBackground font-bold cardoFont">Order Today</button>
          <Link href="#" className="text-white hover:text-CTA">
            <span>Read Free Demo</span>
            <Image src={whiteLine} alt="white border" width={125} />
          </Link>
        </div>

        <div className="info flex items-center justify-between">
          <div className="info1 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Image src={bullet} alt="bullet point" width={10} />
              <label htmlFor="pages" className="text-white text-base lg:text-lg">
                Pages:
              </label>
            </div>
            <small className="text-headerParagraphTexts">586 pages</small>
          </div>

          <div className="info2 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Image src={bullet} alt="bullet point" width={10} />
              <label htmlFor="pages" className="text-white text-base lg:text-lg">
                Length:
              </label>
            </div>
            <small className="text-headerParagraphTexts">10 Hours</small>
          </div>

          <div className="info3 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Image src={bullet} alt="bullet point" width={10} />
              <label htmlFor="pages" className="text-white text-base lg:text-lg">
                Ratings:
              </label>
            </div>
            <small className="text-headerParagraphTexts">4.5/5 (305 ratings)</small>
          </div>
        </div>
      </div>

      <Image src={book} width={420} height={680} alt="book logo" className="mt-8 lg:my-0 mx-auto" />
    </>
  );
}
