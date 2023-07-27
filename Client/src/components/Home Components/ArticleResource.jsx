import line from '../../../public/images/Line.png';
import Image from 'next/image';
import woman from '../../../public/images/readingwoman.png';
import woman2 from '../../../public/images/readingwoman2.png';
import sheet from '../../../public/images/paperwork.png';
import line2 from '../../../public/images/line2.png';

export default function ArticleResource() {
  return (
    <>
      <section className="w-full p-8 bg-[#F4F8FF]">
        <container className="container mx-auto mb-32 flex flex-col items-center">
          <container className="flex flex-col items-center my-8">
            <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Article & Resources</h2>
            <Image src={line} alt="line" width={80} />
          </container>

          <container className="flex flex-col items-center lg:flex-row gap-6">
            <article className="cursor-pointer">
              <Image src={woman} alt="woman reading" width={350} />
              <div className="bg-white p-4 max-w-[350px]">
                <h3 className="cardoFont text-headerBackground text-lg font-bold">The energy efficiency offers hydrotherapy or swim</h3>
                <p className="my-2 text-mainPGParagraphTxt">The point of using lorem ipsum hiter of that using making it look like others readable will get end.</p>
                <div className="flex items-center justify-between">
                  <p className="text-headerBackground font-bold underline">Read More</p>
                  <p className="text-headerBackground">Author - 23.05.2022</p>
                </div>
              </div>
            </article>

            <article className="cursor-pointer">
              <Image src={sheet} alt="woman reading" width={350} />
              <div className="bg-white p-4 max-w-[350px]">
                <h3 className="cardoFont text-headerBackground text-lg font-bold">Release of Letraset sheets tools containing passages</h3>
                <p className="my-2 text-mainPGParagraphTxt">The point of using lorem ipsum hiter of that using making it look like others readable will get end.</p>
                <div className="flex items-center justify-between">
                  <p className="text-headerBackground font-bold underline">Read More</p>
                  <p className="text-headerBackground">Author - 23.05.2022</p>
                </div>
              </div>
            </article>

            <article className="cursor-pointer">
              <Image src={woman2} alt="woman reading" width={350} />
              <div className="bg-white p-4 max-w-[350px]">
                <h3 className="cardoFont text-headerBackground text-lg font-bold">The energy efficiency offers hydrotherapy or swim</h3>
                <p className="my-2 text-mainPGParagraphTxt">The point of using lorem ipsum hiter of that using making it look like others readable will get end.</p>
                <div className="flex items-center justify-between">
                  <p className="text-headerBackground font-bold underline">Read More</p>
                  <p className="text-headerBackground">Author - 23.05.2022</p>
                </div>
              </div>
            </article>
          </container>
        </container>
      </section>

      <section className="w-full p-8 bg-white mb-32">
        <container className="container mx-auto bg-CTA p-8 xl:p-32 flex items-center flex-col">
          <container className="flex flex-col items-center my-8">
            <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Read a free Chapter</h2>
            <Image src={line2} alt="line" width={80} />
          </container>
          <p className="text-headerBackground text-center lg:w-1/2">Making this the first true value generator on the Internet. It has over 200 latin words, combined with a handful</p>
          <container className="flex flex-col xl:flex-row items-center gap-3 mt-4">
            <input type="text" placeholder="Your Email id..." className="w-full lg:w-[500px] py-4 px-6 rounded-md" />
            <button className="cardoFont bg-headerBackground px-10 py-4 rounded-md text-white">Subscribe</button>
          </container>
        </container>
      </section>
    </>
  );
}
