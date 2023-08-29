import Head from 'next/head';
import Trustees from '@/components/Home Components/Trustees';

export default function About() {
  return (
    <>
      <Head>
        <title>Bookly | About</title>
      </Head>
      <section className="about w-full p-8 mb-32 bg-background">
        <div className="container mx-auto flex flex-col">
          <img src="/man image.png" alt="author profile pic" />
          <div className="authorInfo flex flex-col lg:flex-row lg:items-start justify-between">
            <div className="bg-white p-6 lg:w-[35%]">
              <div className="flex justify-between my-5">
                <p className="text-headerBackground font-bold text-sm">Country:</p>
                <label htmlFor="country" className="text-mainPGParagraphTxt text-sm">
                  United Kingdom
                </label>
              </div>

              <div className="flex justify-between my-5">
                <p className="text-headerBackground font-bold text-sm">Language:</p>
                <label htmlFor="country" className="text-mainPGParagraphTxt text-sm">
                  English
                </label>
              </div>

              <div className="flex justify-between my-5">
                <p className="text-headerBackground font-bold text-sm">Genre:</p>
                <label htmlFor="country" className="text-mainPGParagraphTxt text-sm">
                  Historiography
                </label>
              </div>

              <div className="flex justify-between my-5">
                <p className="text-headerBackground font-bold text-sm">Publication date:</p>
                <label htmlFor="country" className="text-mainPGParagraphTxt text-sm">
                  1991
                </label>
              </div>

              <div className="flex justify-between my-5">
                <p className="text-headerBackground font-bold text-sm">Share us on:</p>
                <div className="text-mainPGParagraphTxt flex items-center gap-3">
                  <img src="/fb.png" alt="facebook icon" className="cursor-pointer" />

                  <img src="/xcorp.png" alt="xcorp icon" className="cursor-pointer" />

                  <img src="/linkedin-in.png" alt="linkedin icon" className="cursor-pointer" />
                </div>
              </div>
            </div>

            <article className="mt-6 xl:mt-0 lg:w-[60%]">
              <div>
                <h2 className="text-4xl text-headerBackground font-bold mb-4 cardoFont text-center lg:text-left">About Dr. John Abraham</h2>
                <img src="/Line.png" alt="line" width={40} className="mx-auto xl:mx-0" />
              </div>
              <p className="text-mainPGParagraphTxt my-8 lg:w-[70%] text-center lg:text-left">
                All the lorem generators on the internet tends to repeat redefined chunks as necessary, making this the first true value generator on the internet. It uses a dictionary of over 200 Latin words, combined with a handful.
              </p>
              <button className="bg-CTA px-6 py-3 cardoFont text-headerBackground font-bold flex mx-auto lg:mx-0">Contact now</button>
            </article>
          </div>
        </div>
      </section>

      <section className="story w-full p-8 mb-32">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-start">
          <article className="xl:w-1/2">
            <div>
              <h2 className="text-4xl text-headerBackground font-bold my-4 lg:mt-0 cardoFont text-center xl:text-left">My Story</h2>
              <img src="/Line.png" alt="line" width={40} className="mx-auto xl:mx-0" />
            </div>
            <p className="text-mainPGParagraphTxt my-8 text-center xl:text-left lg:w-[70%] mx-auto xl:mx-0">
              Making this the first true generator on the Internet. It uses a dictionary of over 200 latin words, combined with a handful of model sentence structures
            </p>

            <img src="/handtomouth.png" alt="author's image" className="xl:hidden" />

            <div className="xl:translate-x-[40px] w-full xl:w-3/4 grid relative mt-8 xl:mt-0 lg:max-w-[60%] xl:max-w-full lg:mx-auto xl:mx-0">
              <img src="/linethrough.png" alt="line through" className="absolute top-10 left-4" />

              <img src="/linethrough.png" alt="line through" className="absolute bottom-20 left-4" />

              <div className="flex items-start justify-between gap-16">
                <number className="bg-CTA text-headerBackground font-bold cardoFont p-2">01</number>
                <div>
                  <h3 className="cardoFont text-headerBackground font-bold">Great Author Awards 1996 - 2000</h3>
                  <p className="mt-2 text-mainPGParagraphTxt">How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-16 my-10 xl:my-8">
                <number className="bg-CTA text-headerBackground font-bold cardoFont p-2">02</number>
                <div>
                  <h3 className="cardoFont text-headerBackground font-bold">10 Times New York Times Best Seller</h3>
                  <p className="mt-2 text-mainPGParagraphTxt">How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-16">
                <number className="bg-CTA text-headerBackground font-bold cardoFont p-2">03</number>
                <div>
                  <h3 className="cardoFont text-headerBackground font-bold">Writer of Hack Productivity</h3>
                  <p className="mt-2 text-mainPGParagraphTxt">How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                </div>
              </div>
            </div>
          </article>
          <img src="/handtomouth.png" alt="author's image" className="hidden xl:block" />
        </div>
      </section>

      <section className="w-full p-8 mb-32 bg-[#DBE1E9]">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center xl:gap-10 my-10">
          <div className="flex flex-col md:flex-row gap-3 mx-auto justify-center items-center">
            <img src="/atomic book.png" alt="atomic book" />

            <div className="md:w-1/4 flex flex-col xl:w-auto text-center xl:text-left">
              <h3 className="text-2xl font-medium text-headerBackground">Atomic One's</h3>
              <p className="my-4 text-mainPGParagraphTxt">Many variations of passages of Lorem ipsum willing araise alteration in some form</p>
              <div className="flex justify-between">
                <div className="info1 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt">586 pages</small>
                </div>

                <div className="info2 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
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
            <img src="/book(2).png" alt="atomic book" />

            <div className="md:w-1/4 flex flex-col xl:w-auto text-center xl:text-left">
              <h3 className="text-2xl font-medium text-headerBackground">The Dark Light</h3>
              <p className="my-4 text-mainPGParagraphTxt">Many variations of passages of Lorem ipsum willing araise alteration in some form</p>
              <div className="flex justify-between">
                <div className="info1 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt">586 pages</small>
                </div>

                <div className="info2 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
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

      <Trustees />

      <section className="w-full p-8 bg-white mb-32">
        <div className="container mx-auto bg-CTA p-8 xl:p-32 flex items-center flex-col">
          <div className="flex flex-col items-center my-8">
            <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Read a free Chapter</h2>
            <img src="/line2.png" alt="line" width={80} />
          </div>
          <p className="text-headerBackground text-center lg:w-1/2">Making this the first true value generator on the Internet. It has over 200 latin words, combined with a handful</p>
          <div className="flex flex-col xl:flex-row items-center gap-3 mt-4">
            <input type="text" placeholder="Your Email id..." className="w-full lg:w-[500px] py-4 px-6 rounded-md" />
            <button className="cardoFont bg-headerBackground px-10 py-4 rounded-md text-white">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
