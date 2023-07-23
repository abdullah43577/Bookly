import line from '../../public/images/Line.png';
import Image from 'next/image';
import coffee from '../../public/images/coffee.png';

export default function BannerHome() {
  return (
    <section className="w-full p-4 bg-headerBackground">
      <container className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mt-10">
          <container>
            <h2 className="text-4xl text-white font-bold cardoFont mb-1">Get Book Copy Today</h2>
            <Image src={line} className="mx-auto lg:mx-0" />
          </container>
          <p className="text-headerParagraphTexts my-8">This is the first true value generator on the internet. It uses alphas dictionary of over 200 words.</p>
          <button className="text-white border border-CTA px-6 py-3 hover:bg-CTA">Order Today</button>
        </div>
        <Image src={coffee} alt="coffee image" />
      </container>
    </section>
  );
}
