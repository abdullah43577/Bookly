import Image from 'next/image';
import line2 from '../../public/images/line2.png';
import { useContext } from 'react';
import { modal } from '../components/RootLayout';

export default function store() {
  const { modalWindow, handleClick, handleSubmit, handleInputChange, submitBtn, formData, handleFileChange } = useContext(modal);

  return (
    <>
      <section className="products w-full p-8">
        <div className="container mx-auto cardoFont text-center border-2 border-[#F3F3F3] py-3 font-bold cursor-pointer" onClick={handleClick}>
          Upload a New Product
        </div>
      </section>

      <section className={`modal w-[300px] sm:w-[350px] md:w-[700px] bg-[#F3F3F3] mx-auto p-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] rounded-md ${modalWindow && 'visible'}`}>
        <form onSubmit={handleSubmit}>
          <input type="file" className="mb-4" id="file" name="file" onChange={handleFileChange} required accept="image/*" />

          <div>
            <label htmlFor="title" className="cardoFont">
              Title
            </label>
            <input type="text" className="block mt-2 w-full py-3 px-4 cardoFont" id="title" name="title" value={formData.title} required onChange={handleInputChange} placeholder="Title" />
          </div>

          <div>
            <label htmlFor="price" className="cardoFont">
              Price
            </label>
            <input type="number" className="block mt-2 w-full py-3 px-4 cardoFont" id="price" name="price" value={formData.price} required onChange={handleInputChange} placeholder="$" />
          </div>

          <div>
            <label htmlFor="description" className="cardoFont">
              Description
            </label>
            <textarea
              className="block mt-2 w-full h-[150px] cardoFont px-4 py-3"
              id="description"
              name="description"
              value={formData.description}
              required
              onChange={handleInputChange}
              maxLength={300}
              placeholder="Enter a short description"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category" className="cardoFont">
              Category
            </label>
            <input type="text" className="block mt-2 w-full py-3 px-4 cardoFont" id="category" name="category" value={formData.category} required onChange={handleInputChange} placeholder="Enter a category" />
          </div>

          <button className="bg-CTA text-headerBackground font-bold cardoFont px-4 py-3">{submitBtn}</button>
        </form>
      </section>

      {/* dynamically rendered content from backend */}
      <section className="w-full p-8 mb-32">
        <div className="container mx-auto"></div>
      </section>

      <section className="w-full p-8 bg-white mb-32">
        <div className="container mx-auto bg-CTA p-8 xl:p-32 flex items-center flex-col">
          <div className="flex flex-col items-center my-8">
            <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Read a free Chapter</h2>
            <Image src={line2} alt="line" width={80} />
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
