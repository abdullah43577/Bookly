import Head from 'next/head';
import Line from '../../public/images/Line.png';
import Image from 'next/image';
import userIcon from '../../public/images/user.png';
import mailIcon from '../../public/images/mail.png';
import phoneIcon from '../../public/images/phone2.png';
import editIcon from '../../public/images/edit.png';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Bookly | Contact</title>
      </Head>
      <section className="contact container mx-auto px-8 my-32 flex items-start justify-between">
        <article>
          <div>
            <h2 className="text-3xl cardoFont font-bold text-headerBackground mb-3">Keep in Touch</h2>
            <Image src={Line} alt="border" />
          </div>

          <p className="text-mainPGParagraphTxt my-3">
            There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>

          <div>
            <div className="flex items-start gap-8">
              <div className="bg-headerBackground p-3 rounded">
                <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.375 13.6253L17.5 3.41699L30.625 13.6253V29.667C30.625 30.4405 30.3177 31.1824 29.7707 31.7294C29.2237 32.2764 28.4819 32.5837 27.7083 32.5837H7.29167C6.51812 32.5837 5.77625 32.2764 5.22927 31.7294C4.68229 31.1824 4.375 30.4405 4.375 29.667V13.6253Z"
                    stroke="#FFCA42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M13.125 32.5833V18H21.875V32.5833" stroke="#FFCA42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div>
                <p className="text-headerBackground font-bold">Visit Us:</p>
                <p className="text-mainPGParagraphTxt">No:09a, Downtown, San Diego, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-8 my-6">
              <div className="bg-headerBackground p-3 rounded">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.83366 5.83301H29.167C30.7712 5.83301 32.0837 7.14551 32.0837 8.74967V26.2497C32.0837 27.8538 30.7712 29.1663 29.167 29.1663H5.83366C4.22949 29.1663 2.91699 27.8538 2.91699 26.2497V8.74967C2.91699 7.14551 4.22949 5.83301 5.83366 5.83301Z"
                    stroke="#FFCA42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M32.0837 8.75L17.5003 18.9583L2.91699 8.75" stroke="#FFCA42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div>
                <p className="text-headerBackground font-bold">Drop Us:</p>
                <p className="text-mainPGParagraphTxt">support@pages.com</p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="bg-headerBackground p-3 rounded">
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_1433)">
                    <path
                      d="M18.8125 6.75C20.0334 6.98821 21.1555 7.58532 22.0351 8.46492C22.9147 9.34452 23.5118 10.4666 23.75 11.6875M18.8125 1.75C21.3491 2.0318 23.7145 3.16772 25.5203 4.97126C27.3261 6.7748 28.465 9.13876 28.75 11.675M27.5 21.65V25.4C27.5014 25.7481 27.4301 26.0927 27.2906 26.4117C27.1512 26.7307 26.9466 27.017 26.6901 27.2523C26.4336 27.4877 26.1307 27.6669 25.8009 27.7784C25.4712 27.8899 25.1217 27.9313 24.775 27.9C20.9285 27.4821 17.2338 26.1677 13.9875 24.0625C10.9673 22.1433 8.40668 19.5827 6.48751 16.5625C4.37498 13.3015 3.06031 9.58874 2.65001 5.725C2.61877 5.37933 2.65985 5.03095 2.77063 4.70203C2.88142 4.37311 3.05947 4.07086 3.29347 3.81453C3.52746 3.55819 3.81226 3.35339 4.12975 3.21315C4.44723 3.07292 4.79043 3.00033 5.13751 3H8.88751C9.49414 2.99403 10.0822 3.20885 10.5422 3.60442C11.0022 3.99998 11.3026 4.54931 11.3875 5.15C11.5458 6.35008 11.8393 7.52841 12.2625 8.6625C12.4307 9.10991 12.4671 9.59614 12.3674 10.0636C12.2677 10.5311 12.0361 10.9601 11.7 11.3L10.1125 12.8875C11.892 16.0169 14.4831 18.6081 17.6125 20.3875L19.2 18.8C19.5399 18.4639 19.969 18.2323 20.4364 18.1326C20.9039 18.0329 21.3901 18.0693 21.8375 18.2375C22.9716 18.6607 24.1499 18.9542 25.35 19.1125C25.9572 19.1982 26.5118 19.504 26.9082 19.9719C27.3046 20.4397 27.5152 21.037 27.5 21.65Z"
                      stroke="#FFCA42"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1433">
                      <rect width="30" height="30" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div>
                <p className="text-headerBackground font-bold">Call Us:</p>
                <p className="text-mainPGParagraphTxt">Call: 1-800-123-9999</p>
              </div>
            </div>
          </div>
        </article>

        <form className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="relative w-[250px] border border-gray-300">
              <Image src={userIcon} alt="user icon" className="absolute left-2 bottom-2" />
              <input type="text" placeholder="Name" className="w-full px-10 py-2 outline-none" />
            </div>

            <div className="relative w-[250px] border border-gray-300">
              <Image src={mailIcon} alt="mail icon" className="absolute left-2 bottom-2" />
              <input type="text" placeholder="Email" className="w-full px-10 py-2 outline-none" />
            </div>
          </div>

          <div className="relative border border-gray-300">
            <Image src={phoneIcon} alt="phone icon" className="absolute left-2 bottom-2" />
            <input type="text" placeholder="Phone" className="w-full px-10 py-2 outline-none" />
          </div>

          <div className="relative border border-gray-300">
            <Image src={editIcon} alt="edit icon" className="absolute left-2 top-2" />
            <textarea placeholder="Message" className="w-full px-10 py-2 outline-none h-[150px]"></textarea>
          </div>

          <div>
            <input type="checkbox" className="mr-4" />
            <label htmlFor="checkbox" className="text-mainPGParagraphTxt text-sm">
              Keep me up to date with news and offers from time to time by email
            </label>
          </div>

          <button className="bg-CTA text-headerBackground font-bold py-3">Send Message</button>
        </form>
      </section>
    </>
  );
}
