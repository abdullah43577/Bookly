import { SERVER } from '@/components/helper';
import cart from '../../../public/images/Vector2.png';
import Image from 'next/image';
import { useContext } from 'react';
import { modal } from '@/components/RootLayout';

export const getStaticPaths = async function () {
  try {
    const res = await fetch(`${SERVER}/get-all-books`);
    const data = await res.json();

    const paths = data.map((item) => {
      return {
        params: { id: item._id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
  }
};

export const getStaticProps = async function ({ params }) {
  try {
    const id = params.id;
    const res = await fetch(`${SERVER}/${id}`);
    const data = await res.json();
    return {
      props: {
        bookInfo: data,
      },
    };
  } catch (err) {
    console.error(err);
  }
};

export default function Details({ bookInfo }) {
  const { formData, setFormData, closeCart, cartIsOpened, addToCart } = useContext(modal);

  const handleDecrement = function () {
    if (formData.total_quantity > 1) {
      setFormData({ ...formData, total_quantity: formData.total_quantity - 1 });
    }
  };

  const handleIncrement = function () {
    setFormData({ ...formData, total_quantity: formData.total_quantity + 1 });
  };

  return (
    <>
      <section className="w-full p-8 my-32">
        <div className="container mx-auto flex items-start justify-between gap-[4rem]">
          <div className="p-4 bg-[#F5F8FC]">
            <img className="mx-auto" width={800} src={bookInfo.file} alt="uploaded books images" />
          </div>

          <div>
            <h2 className="cardoFont font-bold text-headerBackground text-xl lg:text-3xl capitalize">{bookInfo.title}</h2>
            <p className="text-CTA text-xl font-bold my-3">${bookInfo.price}</p>
            <p>Making this the first true generator on the Internet. It uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate Lorem ipsum which looks reasonable. The generated Lorem ipsum.</p>
            <section className="text-mainPGParagraphTxt my-3">
              <div className="flex items-center gap-[2rem] my-2">
                <p>Publisher :</p>
                <p>Learning Private Limited (1 January 2021)</p>
              </div>

              <div className="flex items-center gap-[2rem] my-2">
                <p>Language :</p>
                <p>English</p>
              </div>

              <div className="flex items-center gap-[2rem] my-2">
                <p>Paperback :</p>
                <p>212 pages</p>
              </div>

              <div className="flex items-center gap-[2rem] my-2">
                <p>ISBN-10 :</p>
                <p>9788120345799</p>
              </div>

              <div className="flex items-center gap-[2rem] my-2">
                <p>Dimensions :</p>
                <p>20 x 14 x 4 cm</p>
              </div>
            </section>

            <div className="flex items-center gap-[2rem] mt-3">
              <div className="border border-CTA text-center w-[150px] p-3 flex items-center justify-between">
                <div className="cursor-pointer text-headerBackground font-bold text-2xl" onClick={handleDecrement}>
                  -
                </div>
                <p>{formData.total_quantity}</p>
                <div className="cursor-pointer text-headerBackground font-bold text-xl" onClick={handleIncrement}>
                  +
                </div>
              </div>
              <button className="cardoFont bg-CTA px-6 py-3 text-headerBackground font-bold" onClick={addToCart}>
                <Image src={cart} alt="cart icon" className="inline" /> Add to cart
              </button>
            </div>
          </div>
        </div>

        <section className="product-description container mx-auto flex items-center gap-[6rem] mt-32">
          <div>
            <div className="cardoFont text-lg bg-headerBackground px-6 py-3 text-white font-bold max-w-[300px] ml-auto">PRODUCT DESCRIPTION</div>
            <div>
              <h2 className="cardoFont text-headerBackground font-bold my-4 text-2xl">Do you offer discounts for education?</h2>
              <p className="text-mainPGParagraphTxt">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.
              </p>
            </div>
          </div>

          <div>
            <div className="cardoFont text-lg text-headerBackground font-bold bg-[#F5F8FC] px-6 py-3 inline-block">ADDITIONAL INFO</div>
            <div>
              <h2 className="cardoFont text-headerBackground font-bold my-4 text-2xl">Is this book for me?</h2>
              <p className="text-mainPGParagraphTxt">
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* modal window  for whenever the cart is clicked*/}
      <div className={`modalWindow w-[480px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] rounded-md bg-white ${cartIsOpened && 'visible'}`}>
        <div className="bg-CTA w-full flex items-center justify-between px-4 py-3 rounded-t-lg">
          <h2 className="text-headerBackground font-bold cardoFont text-xl">Your Cart</h2>
          <p className="text-headerBackground cursor-pointer" onClick={closeCart}>
            &#10006;
          </p>
        </div>
        <div className="flex items-start px-8 py-6 gap-[2rem] border-b border-mainPGParagraphTxt">
          <img src={bookInfo.file} alt="book image" width={150} />

          <div className="w-full">
            <div className="flex items-center justify-between my-2">
              <div>
                <h2 className="text-headerBackground cardoFont font-bold capitalize">{bookInfo.title}</h2>
                <p className="text-mainPGParagraphTxt">${bookInfo.price}</p>
              </div>

              <div className="border border-CTA text-center w-[80px] px-3 py-1 flex items-center justify-between">
                <div className="cursor-pointer text-headerBackground font-bold text-2xl" onClick={handleDecrement}>
                  -
                </div>
                <p>{formData.total_quantity}</p>
                <div className="cursor-pointer text-headerBackground font-bold text-xl" onClick={handleIncrement}>
                  +
                </div>
              </div>
            </div>

            <button className="bg-headerBackground text-white font-bold cardoFont px-2 py-1 my-2">Remove</button>
          </div>
        </div>

        <div className="w-full px-8 py-6">
          <div className="flex items-center justify-between my-2">
            <p className="cardoFont text-headerBackground">Sub-Total</p>
            <p className="text-headerBackground font-bold">${bookInfo.price * formData.total_quantity}USD</p>
          </div>

          <button className="text-headerBackground font-bold w-full bg-CTA py-2 my-2">Continue to Checkout</button>
        </div>
      </div>
    </>
  );
}
