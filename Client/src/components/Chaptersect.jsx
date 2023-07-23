import line from '../../public/images/Line.png';
import Image from 'next/image';
import bullet from '../../public/images/Point.png';
import Link from 'next/link';
import man1 from '../../public/images/man 1.png';
import man2 from '../../public/images/man 2.png';
import female from '../../public/images/female.png';

export default function ChapterSection() {
  return (
    <>
      <section className="w-full p-8 bg-[#f4f8ff]">
        <container className="container mx-auto mb-32 flex flex-col items-center">
          <container className="flex flex-col items-center my-8">
            <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground cardoFont">The Chapter Includes</h2>
            <Image src={line} alt="line" width={80} />
          </container>

          <container className="gridBox">
            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-01 Get Started Intro</h3>
              <p className="text-headerParagraphTexts my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <container className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">1 Hour 15 mins</small>
                </div>
              </container>
            </div>

            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-02 Create a Massive Content</h3>
              <p className="text-headerParagraphTexts my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <container className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">1 Hour 15 mins</small>
                </div>
              </container>
            </div>

            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-03 Maintaining the Creative Arcs</h3>
              <p className="text-headerParagraphTexts my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <container className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">1 Hour 15 mins</small>
                </div>
              </container>
            </div>

            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-04 The Conclusion</h3>
              <p className="text-headerParagraphTexts my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <container className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={bullet} alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base lg:text-lg font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-headerParagraphTexts text-base">1 Hour 15 mins</small>
                </div>
              </container>
            </div>
          </container>

          <container className="mt-10">
            <button className="px-16 py-4 bg-CTA text-headerBackground font-bold cardoFont">Start a 15-Days Free Trial</button>
            <p className="my-4 text-headerParagraphTexts text-sm text-center">Short description about each chapter</p>
            <p className="text-sm text-center text-headerParagraphTexts">
              <Link href="/contact" className="text-headerBackground font-bold underline">
                Have any questions?
              </Link>{' '}
              Contact us
            </p>
          </container>
        </container>
      </section>

      <section className="w-full p-8">
        <container className="container mx-auto flex items-center">
          <article>
            <h2 className="text-3xl text-center xl:text-left mb-3 cardoFont font-bold text-headerBackground cardoFont">What Readers Say About The Book</h2>
            <Image src={line} alt="line" />
            <p className="text-headerParagraphTexts my-3">If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarassing hidden in the middle of the text. All the lorem ipsum generators.</p>
            <rating>
              <div className="text-headerBackground">(4.8/5)</div>
              <div className="text-headerBackground">Overall Customer Ratings</div>
            </rating>
          </article>
          <container></container>
        </container>
      </section>
    </>
  );
}
