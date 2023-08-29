import Link from 'next/link';

export default function ChapterSection() {
  return (
    <>
      <section className="w-full p-8 bg-[#f4f8ff]">
        <div className="container mx-auto mb-32 flex flex-col items-center">
          <div className="flex flex-col items-center my-8">
            <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">The Chapter Includes</h2>
            <img src="/Line.png" alt="line" width={80} />
          </div>

          <div className="gridBox">
            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-01 Get Started Intro</h3>
              <p className="text-mainPGParagraphTxt my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <div className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">1 Hour 15 mins</small>
                </div>
              </div>
            </div>

            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-02 Create a Massive Content</h3>
              <p className="text-mainPGParagraphTxt my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <div className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">1 Hour 15 mins</small>
                </div>
              </div>
            </div>

            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-03 Maintaining the Creative Arcs</h3>
              <p className="text-mainPGParagraphTxt my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <div className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">1 Hour 15 mins</small>
                </div>
              </div>
            </div>

            <div className="bg-white p-10">
              <h3 className="cardoFont text-headerBackground text-lg font-bold">Chapter-04 The Conclusion</h3>
              <p className="text-mainPGParagraphTxt my-2">Making this the first true value generator on the Internet. It has over 200 latin words combined with a handful</p>

              <div className="flex justify-between xl:justify-normal items-center gap-6">
                <div className="info1 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Pages:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">85 pages</small>
                </div>

                <div className="info2 flex flex-col xl:flex-row items-center gap-1">
                  <div className="flex items-center gap-2">
                    <img src="/Point.png" alt="bullet point" width={10} />
                    <label htmlFor="pages" className="text-headerBackground text-base font-medium cardoFont">
                      Length:
                    </label>
                  </div>
                  <small className="text-mainPGParagraphTxt text-base">1 Hour 15 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="px-16 py-4 bg-CTA text-headerBackground font-bold cardoFont">Start a 15-Days Free Trial</button>
            <p className="my-4 text-mainPGParagraphTxt text-sm text-center">Short description about each chapter</p>
            <p className="text-sm text-center text-mainPGParagraphTxt">
              <Link href="/contact" className="text-headerBackground font-bold underline">
                Have any questions?
              </Link>{' '}
              Contact us
            </p>
          </div>
        </div>
      </section>

      <section className="w-full p-8 mb-32 flex flex-col items-center">
        <div className="container mx-auto flex flex-col items-center gap-16 lg:flex-row">
          <article className="lg:w-[40%]">
            <h2 className="text-3xl text-center xl:text-left mb-3 font-bold text-headerBackground cardoFont">What Readers Say About The Book</h2>
            <img src="/Line.png" alt="line" />
            <p className="text-mainPGParagraphTxt my-3">If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarassing hidden in the middle of the text. All the lorem ipsum generators.</p>
            <section>
              <div className="flex items-center gap-2">
                <img src="/Group 3.svg" alt="rating" width={100} />
                <label htmlFor="rating" className="text-headerBackground">
                  (4.8/5)
                </label>
              </div>
              <div className="text-headerBackground">Overall Customer Ratings</div>
            </section>
          </article>

          <div className="lg:w-[60%] testimonial_grid">
            <article className="bg-[#1B3764] px-6 py-4 max-w-[300px] rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <img src="/man 1.png" alt="image of a man" width={50} />
                <div>
                  <p className="text-white cardoFont">Martin Phillips</p>
                  <img src="/Group 3.svg" alt="rating icon" width={50} />
                </div>
              </div>
              <p className="text-white my-2 cardoFont">"Awesome Impact"</p>
              <p className="text-mainPGParagraphTxt text-sm">All the lorem ipsum generators on the internet tend to repeat willings predefined chunks of values</p>
            </article>

            <article className="bg-[#1B3764] px-6 py-4 max-w-[300px] rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <img src="/man 2.png" alt="image of a man" width={50} />
                <div>
                  <p className="text-white cardoFont">James Anderson</p>
                  <img src="/Group 3.svg" alt="rating icon" width={50} />
                </div>
              </div>
              <p className="text-white my-2 cardoFont">"Mind Blowing Words"</p>
              <p className="text-mainPGParagraphTxt text-sm">All the lorem ipsum generators on the internet tend to repeat willings predefined chunks of values</p>
            </article>

            <article className="bg-[#1B3764] px-6 py-4 max-w-[300px] rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <img src="/female.png" alt="image of a man" width={50} />
                <div>
                  <p className="text-white cardoFont">Christina Louis</p>
                  <img src="/Group 3.svg" alt="rating icon" width={50} />
                </div>
              </div>
              <p className="text-white my-2 cardoFont">"Great Books Collection"</p>
              <p className="text-mainPGParagraphTxt text-sm">All the lorem ipsum generators on the internet tend to repeat willings predefined chunks of values</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
