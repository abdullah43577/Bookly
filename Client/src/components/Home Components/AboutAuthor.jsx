import author from '../../../public/images/author.png';
import line from '../../../public/images/Line.png';
import qrcode from '../../../public/images/qrcode.png';
import Image from 'next/image';

export default function AboutAuthor() {
  return (
    <section className="bg-[#F4F8FF] w-full px-8 py-16 mb-32">
      <container className="container flex flex-col xl:flex-row mx-auto gap-16 items-center">
        <Image src={author} alt="author's image" />

        <article className="md:w-1/2 text-center xl:w-auto xl:text-left">
          <container>
            <h2 className="text-4xl text-headerBackground font-bold mb-4 cardoFont">About Author</h2>
            <Image src={line} alt="line" width={40} className="mx-auto xl:mx-0" />
          </container>
          <p className="text-mainPGParagraphTxt my-8">
            All the lorem generators on the internet tends to repeat redefined chunks as necessary, making this the first true value generator on the internet. It uses a dictionary of over 200 Latin words, combined with a handful.
          </p>
          <container className="flex justify-between items-center">
            <div>
              <h1 className="text-headerBackground text-4xl cardoFont font-bold">02</h1>
              <p className="text-mainPGParagraphTxt">Books Published</p>
            </div>
            <div>
              <h1 className="text-headerBackground text-4xl cardoFont font-bold">4.5</h1>
              <p className="text-mainPGParagraphTxt">User Reviews</p>
            </div>
            <div>
              <h1 className="text-headerBackground text-4xl cardoFont font-bold">04</h1>
              <p className="text-mainPGParagraphTxt">Best Seller Awards</p>
            </div>
          </container>

          <container className="bg-headerBackground flex flex-col md:flex-row items-center p-4 mt-8 gap-4">
            <Image src={qrcode} alt="qr code" />
            <info>
              <p className="text-CTA cardoFont">John Abraham, Ph.d</p>
              <p className="text-headerParagraphTexts my-1">Mail: johnabraham@gmail.com</p>
              <p className="text-headerParagraphTexts">Phone: (+2) 123 549 9000</p>
            </info>
          </container>
        </article>
      </container>
    </section>
  );
}
