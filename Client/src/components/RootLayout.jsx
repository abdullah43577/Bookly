import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HomeDYN from '@/components/Routes/HomeDYN';
import AboutDYN from '@/components/Routes/AboutDYN';
import PagesDYN from '@/components/Routes/PagesDYN';
import ServicesDYN from '@/components/Routes/ServicesDYN';
import ContactDYN from '@/components/Contact';
import StoreDYN from './Routes/StoreDYN';
import { createContext, useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { SERVER } from './helper';

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

  const alert = function (status, message) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: status,
      title: message,
    });
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
      setCartItems((prevValue) => [...prevValue, bookInfo]);
      alert('success', 'Item successfully added to cart!');
    }
  };

  useEffect(() => setNoOfItemsInCart(cartItems.length), [cartItems]);

  // sets data to local storage
  useEffect(() => {
    if (cartItems.length || noOfItemsInCart > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('noOfItemsInCart', JSON.stringify(noOfItemsInCart));
    }
  }, [cartItems, noOfItemsInCart]);

  // get data from local storage
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    const parsedArray = storedCartItems ? JSON.parse(storedCartItems) : [];
    if (parsedArray && parsedArray.length) {
      setCartItems(parsedArray);
    }

    const totalNumberOfItems = localStorage.getItem('noOfItemsInCart');
    const newlyParsedNo = totalNumberOfItems ? JSON.parse(totalNumberOfItems) : [];
    if (newlyParsedNo && newlyParsedNo > 0) {
      setNoOfItemsInCart(newlyParsedNo);
    }
  }, []);

  // function to render different content based on the route
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
    </modal.Provider>
  );
}
