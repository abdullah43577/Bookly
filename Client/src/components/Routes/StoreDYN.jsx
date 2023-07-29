import line2 from '../../../public/images/Line.png';
import Image from 'next/image';

export default function StoreDYN() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
        <h2 className="text-5xl text-center mb-3 cardoFont font-bold text-white">My Store</h2>
        <Image src={line2} alt="line" width={50} />
      </div>
      <p className="text-headerParagraphTexts lg:w-1/2 text-center">There are variations of passages of lorem ipsum available, that have suffered alteration in some form</p>
    </section>
  );
}
