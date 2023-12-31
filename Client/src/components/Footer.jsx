import { useState } from 'react';

export default function Footer() {
  const [date, setDate] = useState(new Date().getFullYear());

  return (
    <footer className="w-full p-8 bg-headerBackground">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 border-b border-mainPGParagraphTxt pb-8 mb-4">
        <div>
          <div className="flex items-center">
            <img src="/book.png" alt="logo" />
            <label htmlFor="logo" className="pl-2 text-white font-bold">
              Bookly
            </label>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-headerParagraphTexts p-4 rounded-md"></div>
            <div className="bg-headerParagraphTexts p-4 rounded-md"></div>
            <div className="bg-headerParagraphTexts p-4 rounded-md"></div>
            <div className="bg-headerParagraphTexts p-4 rounded-md"></div>
          </div>
        </div>

        <div className="xl:ml-auto flex flex-col lg:flex-row items-start gap-10">
          <div>
            <h4 className="cardoFont text-white text-lg pb-3 font-bold">Explore</h4>
            <ul>
              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Home
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  About Us
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Services
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Appointment
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Blog
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Contact Us
                </label>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="cardoFont text-white text-lg pb-3 font-bold">Utility Pages</h4>
            <ul>
              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Start here
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Style guide
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  404 not found
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Password protected
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Licenses
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <img src="/icon.png" alt="bullet point" />
                <label htmlFor="bullet point" className="text-white text-sm">
                  Changelog
                </label>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="cardoFont text-white text-lg pb-3 font-bold">Keep in Touch</h4>
            <ul>
              <li className="flex items-center gap-2 py-1">
                <p className="text-white text-sm font-bold">Address:</p>
                <label htmlFor="bullet point" className="text-white text-sm">
                  24A Kingston St, Los Vegas NC 28202, USA
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <p className="text-white text-sm font-bold">Mail:</p>
                <label htmlFor="bullet point" className="text-white text-sm">
                  support@doctors.com
                </label>
              </li>

              <li className="flex items-center gap-2 py-1">
                <p className="text-white text-sm font-bold">Phone:</p>
                <label htmlFor="bullet point" className="text-white text-sm">
                  (+22) 123 - 4567 - 900
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-headerParagraphTexts w-full text-sm xl:text-center">
        &copy; {date} Drafted by <span className="text-white">VictorFlow</span> - Powered by <span className="text-white">Webflow</span> || Coded by <span className="text-white">Ayoola</span>
      </div>
    </footer>
  );
}
