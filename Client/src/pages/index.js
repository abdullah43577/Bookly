import Head from 'next/head';
import line from '../../public/images/Line.png';
import Image from 'next/image';
import atomicBook from '../../public/images/atomic book.png';
import book from '../../public/images/book(2).png';
import bullet from '../../public/images/Point.png';
import AboutAuthor from '@/components/Home Components/AboutAuthor';
import Trustees from '@/components/Home Components/Trustees';
import BannerHome from '@/components/Home Components/BannerHome';
import WhatToLearn from '@/components/Home Components/WhatToLearn';
import ChapterSection from '@/components/Home Components/Chaptersect';
import ArticleResource from '@/components/Home Components/ArticleResource';

//? getting data from the server (runs before this page is loaded)
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api');
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  console.log('message from backend', data.message);

  return (
    <>
      <Head>
        <title>Bookly | Home</title>
        {/* <link rel="icon" type="image/x-icon" href="../../public/images/book.png"></link> */}
      </Head>
      <section className="container mx-auto px-8 mb-32">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Author's Book Includes</h2>
          <Image src={line} alt="line" width={80} />
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-10 my-10">
          <div className="flex flex-col md:flex-row gap-3 mx-auto justify-center items-center">
            <Image src={atomicBook} alt="atomic book" />

            <div className="md:w-1/4 flex flex-col xl:w-auto text-center xl:text-left">
              <h3 className="text-2xl font-medium text-headerBackground">Atomic One's</h3>
              <p className="my-4 text-mainPGParagraphTxt">Many variations of passages of Lorem ipsum willing araise alteration in some form</p>
              <div className="flex justify-between">
                <div className="info1 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt">586 pages</small>
                </div>

                <div className="info2 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium">
                      Length:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt">586 pages</small>
                </div>
              </div>
              <button className="cardoFont border-2 border-CTA px-10 py-3 text-headerBackground mt-4 hover:bg-CTA">Order Today</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mx-auto justify-center my-10 xl:my-0 items-center">
            <Image src={book} alt="atomic book" />

            <div className="md:w-1/4 flex flex-col xl:w-auto text-center xl:text-left">
              <h3 className="text-2xl font-medium text-headerBackground">The Dark Light</h3>
              <p className="my-4 text-mainPGParagraphTxt">Many variations of passages of Lorem ipsum willing araise alteration in some form</p>
              <div className="flex justify-between">
                <div className="info1 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt">586 pages</small>
                </div>

                <div className="info2 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium">
                      Length:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt">586 pages</small>
                </div>
              </div>
              <button className="cardoFont border-2 border-CTA px-10 py-3 text-headerBackground mt-4 hover:bg-CTA">Order Today</button>
            </div>
          </div>
        </div>
      </section>
      <AboutAuthor />
      <Trustees />
      <BannerHome />
      <WhatToLearn />
      <ChapterSection />
      <ArticleResource />
    </>
  );
}
