import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomeDYN from '@/components/Routes/HomeDYN';
import AboutDYN from '@/components/Routes/AboutDYN';
import PagesDYN from '@/components/Routes/PagesDYN';
import ServicesDYN from '@/components/Routes/ServicesDYN';
import ContactDYN from '@/components/Routes/ContactDYN';
import StoreDYN from './Routes/StoreDYN';
import { createContext, useState, useEffect, useRef } from 'react';
import { SERVER, alert } from './helper';
import Link from 'next/link';

export const modal = createContext();

export default function RootLayout({ children }) {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState('');
  const [desktopHeaderHeight, setDesktopHeaderHeight] = useState('');
  const [margin, setMargin] = useState('');
  const [modalWindow, setModalWindow] = useState(false);
  const [submitBtn, setSubmitBtn] = useState('Upload');
  const [allUploadedBooks, setAllUploadedBooks] = useState([]);
  const fileInput = useRef();
  const initialFormValue = useRef();
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState(0);
  const [cartItems, setCartItems] = useState([]); // stores all items in cart
  const [formData, setFormData] = useState({
    file: '',
    title: '',
    price: '',
    description: '',
    category: '',
    total_quantity: 1,
  });
  const [totalCost, setTotalCost] = useState(null);
  const [newObj, setNewObj] = useState(null);

  useEffect(() => {
    // i.e if modalWindow is closed either by the button or the overlay was clicked it empty all inputs
    if (modalWindow === false) {
      setFormData((prevValue) => {
        return {
          ...prevValue,
          file: '',
          title: '',
          price: '',
          description: '',
          category: '',
        };
      });

      // reset the file input back to an empty string
      if (fileInput.current) {
        fileInput.current.value = '';
      }
    }
  }, [modalWindow]);

  // converting image to base64 format
  const base64EncodedImage = function (file) {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          resolve(reader.result);
        };
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleFileChange = async function (e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const base64Image = await base64EncodedImage(file);
      setFormData((prevValue) => ({ ...prevValue, file: base64Image }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = async function (e) {
    const { name, value } = e.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    setSubmitBtn('Uploading...');

    try {
      const res = await fetch(`${SERVER}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status !== 200) throw new Error(data.message);

      alert('success', 'Submitted Successfully!');
    } catch (err) {
      console.log(err);
      alert('error', 'Error Submitting Form');
    } finally {
      setSubmitBtn('Upload');
      setModalWindow(false);
    }
  };

  const handleClick = function () {
    setModalWindow(true);
  };

  // fetch all books
  useEffect(() => {
    if (router.pathname === '/store') {
      const fetchBooks = async () => {
        try {
          const res = await fetch(`${SERVER}/get-all-books`);
          const data = await res.json();
          setAllUploadedBooks(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchBooks();
    }
  }, [router.pathname, modalWindow]);

  // code for cart section
  const handleCartClick = function () {
    setCartIsOpened((prevValue) => !prevValue);
  };

  const closeCart = function () {
    setCartIsOpened(false);
  };

  const addToCart = function (bookInfo) {
    // checking if the item already exist in the cart
    const isExisting = cartItems.some((obj) => obj._id === bookInfo._id);

    const newObj = cartItems.find((obj) => obj._id === bookInfo._id);

    if (isExisting) {
      setCartItems((prevValue) => prevValue.map((obj) => (obj._id === bookInfo._id ? { ...obj, total_quantity: newObj.total_quantity } : obj)));

      alert('success', 'Successfully updated item in cart!');
    } else {
      // updating the bookinfo object with the total_quantity if modified on first visit of the details page since cartItems is not existent at this point
      if (initialFormValue.current !== bookInfo.total_quantity) {
        bookInfo.total_quantity = initialFormValue.current.textContent;
        setCartItems((prevValue) => [...prevValue, bookInfo]);
        alert('success', 'Item successfully added to cart!');
      } else {
        setCartItems((prevValue) => [...prevValue, bookInfo]);
        alert('success', 'Item successfully added to cart!');
      }
    }
  };

  useEffect(() => setNoOfItemsInCart(cartItems.length), [cartItems]);

  // sets data to local storage
  useEffect(() => {
    if (cartItems.length) localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // get data from local storage
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    const parsedArray = storedCartItems ? JSON.parse(storedCartItems) : [];
    if (parsedArray && parsedArray.length) {
      setCartItems(parsedArray);
    }
  }, []);

  useEffect(() => {
    const total = cartItems.map((obj) => obj.price * obj.total_quantity).reduce((acc, curValue) => acc + curValue, 0);
    setTotalCost(total);
  }, [cartItems]);

  const handleIncrement2 = function (obj) {
    const index = cartItems.findIndex((item) => item._id === obj._id); // returns the index of the object in the array

    setCartItems((prevValue) => prevValue.map((item, i) => (i === index ? { ...item, total_quantity: +item.total_quantity + 1 } : item)));
  };

  const handleDecrement2 = function (obj) {
    if (obj.total_quantity > 1) {
      const index = cartItems.findIndex((item) => item._id === obj._id); // returns the index of the object in the array

      setCartItems((prevValue) => prevValue.map((item, i) => (i === index ? { ...item, total_quantity: +item.total_quantity - 1 } : item)));
    }
  };

  const removeItemFromCart = function (obj) {
    const newArray = cartItems.filter((item) => item._id !== obj._id);
    setCartItems(newArray);
    alert('success', 'Item removed from cart');
    localStorage.setItem('cartItems', JSON.stringify(newArray));
  };

  const findCurObj = function (bookInfo) {
    const foundObject = cartItems.find((obj) => obj._id === bookInfo._id);
    setNewObj(foundObject);
  };

  const cartDetails = cartItems?.map((obj, index) => {
    return (
      <div key={index} className="flex items-start px-8 py-6 gap-[2rem] border-b border-mainPGParagraphTxt">
        <img src={obj.file} alt="book image" className="w-[80px] md:w-[150px]" />

        <div className="w-full">
          <div className="flex items-center justify-between my-2">
            <div>
              <h2 className="text-headerBackground cardoFont font-bold capitalize">{obj.title}</h2>
              <p className="text-mainPGParagraphTxt">${obj.price}</p>
            </div>

            <div className="border border-CTA text-center w-[80px] px-3 py-1 flex items-center justify-between">
              <div className="cursor-pointer text-headerBackground font-bold text-2xl" onClick={() => handleDecrement2(obj)}>
                -
              </div>

              <p>{obj.total_quantity}</p>

              <div className="cursor-pointer text-headerBackground font-bold text-xl" onClick={() => handleIncrement2(obj)}>
                +
              </div>
            </div>
          </div>

          <button className="bg-headerBackground text-white font-bold cardoFont px-2 py-1 my-2" onClick={() => removeItemFromCart(obj)}>
            Remove
          </button>
        </div>
      </div>
    );
  });

  // render different content based on the route
  useEffect(() => {
    switch (router.pathname) {
      case '/pages':
        setCurrentRoute(<PagesDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/about':
        setCurrentRoute(<AboutDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/services':
        setCurrentRoute(<ServicesDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      case '/contact':
        setCurrentRoute(<ContactDYN />);
        setDesktopHeaderHeight('lg:h-[50vh]');
        setMargin('');
        break;

      default:
        if (router.pathname.startsWith('/store')) {
          setCurrentRoute(<StoreDYN />);
          setDesktopHeaderHeight('lg:h-[50vh]');
          setMargin('');
        } else {
          setCurrentRoute(<HomeDYN />);
          setDesktopHeaderHeight('lg:h-screen');
          setMargin('mb-32');
        }
        break;
    }
  }, [router.pathname]);

  return (
    <modal.Provider
      value={{
        modalWindow,
        handleClick,
        handleSubmit,
        formData,
        handleInputChange,
        submitBtn,
        handleFileChange,
        allUploadedBooks,
        fileInput,
        setFormData,
        handleCartClick,
        closeCart,
        cartIsOpened,
        addToCart,
        noOfItemsInCart,
        cartItems,
        setCartItems,
        initialFormValue,
        findCurObj,
        newObj,
      }}
    >
      <header className={`bg-headerBackground w-full h-auto ${desktopHeaderHeight} relative px-8 pb-6 lg:pb-0 ${margin}`}>
        <div className="inner_header w-full lg:flex items-center justify-center mx-auto container">
          <Navbar />
        </div>

        {/* content rendered dynamically based on the route */}
        <section className="hero lg:flex justify-between items-center container w-full mx-auto mt-10">{currentRoute}</section>
      </header>

      <main className="w-full h-full">{children}</main>

      <Footer />
      <div className={`overlay absolute top-0 left-0 bottom-0 z-[1000] h-full w-full ${modalWindow && 'visible'}`} onClick={() => setModalWindow(false)}></div>

      <div className={`overlay2 absolute top-0 left-0 bottom-0 z-[1000] h-full w-full ${cartIsOpened && 'visible'}`} onClick={closeCart}></div>

      {/* modal window */}
      <div className={`modalWindow w-[300px] sm:w-[480px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] rounded-md bg-white ${cartIsOpened && 'visible'}`}>
        <div className="bg-CTA w-full flex items-center justify-between px-4 py-3 rounded-t-lg">
          <h2 className="text-headerBackground font-bold cardoFont text-xl">Your Cart</h2>
          <p className="text-headerBackground cursor-pointer" onClick={closeCart}>
            &#10006;
          </p>
        </div>
        {cartDetails.length ? cartDetails : <p className="cardoFont text-lg text-mainPGParagraphTxt text-center p-6">There are no items in your cart at this time. You can start by adding items to you cart!</p>}

        <div className={`w-full px-8 py-6 ${cartItems.length ? 'block' : 'hidden'}`}>
          <div className="flex items-center justify-between my-2">
            <p className="cardoFont text-headerBackground">Sub-Total</p>
            <p className="text-headerBackground font-bold">${totalCost?.toFixed(2)} USD</p>
          </div>

          <Link href="/store/checkout">
            <button className="text-headerBackground font-bold w-full bg-CTA py-2 my-2">Continue to Checkout</button>
          </Link>
        </div>
      </div>
    </modal.Provider>
  );
}
