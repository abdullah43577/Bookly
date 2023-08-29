import { useState, useContext, useEffect } from 'react';
import { alert } from '@/components/helper';
import { modal } from '@/components/RootLayout';
import { nanoid } from 'nanoid';
import { SERVER } from '@/components/helper';

export default function Checkout() {
  const { totalCost } = useContext(modal);
  const [btnTxt, setBtnTxt] = useState('Proceed To Payment');

  const [checkoutData, setCheckoutData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    address: '',
    amount: '',
  });

  useEffect(() => {
    setCheckoutData((prevValue) => ({ ...prevValue, amount: `${totalCost?.toFixed(2) || 0}` }));
  }, [totalCost]);

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setCheckoutData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  // checkout
  const handleSubmitCheckout = async function (e) {
    e.preventDefault();
    const validityCheck = Object.keys(checkoutData).some((obj) => obj === '');

    if (validityCheck) {
      console.log('ran');
      alert('error', 'You need to fill out the form properly');
      return;
    }

    if (checkoutData.amount < 1) {
      alert('error', 'You need to add items to your cart');
      return;
    }

    const id = nanoid();

    const checkoutObject = {
      tx_ref: id,
      amount: checkoutData.amount,
      redirect_url: 'https://bookly-app-nu.vercel.app/store/checkout/success',

      meta: {
        consumer_id: id,
        consumer_mac: id,
      },

      customer: {
        name: `${checkoutData.firstName} ${checkoutData.lastName}`,
        email: `${checkoutData.email}`,
        phone: `${checkoutData.phoneNo}`,
      },
    };

    try {
      setBtnTxt('Processing...');
      const res = await fetch(`${SERVER}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutObject),
      });

      const data = await res.json();

      if (res.status !== 200) throw new Error(data.err2);

      // window.open(data.message, '_blank', 'toolbar=0,location=0,menubar=0');
      window.open(data.message, '_self');
    } catch (err) {
      console.error(err);
      alert('error', 'Error Making Payment');
    } finally {
      setBtnTxt('Proceed To Payment');
    }
  };

  return (
    <section className="checkout_section flex items-center justify-center w-full">
      <form onSubmit={handleSubmitCheckout} className="checkout_form w-[300px] md:w-[600px] container mx-auto my-16 md:my-32 flex flex-col">
        <h2 className="cardoFont font-bold text-headerBackground text-2xl md:text-4xl text-center">Billing Information</h2>

        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mt-4 md:mt-0">
              <label htmlFor="firstName" className="block mb-2">
                First Name:
              </label>
              <input type="text" placeholder="First Name" value={checkoutData.firstName} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full md:w-auto" required name="firstName" />
            </div>

            <div className="mt-4 md:mt-0">
              <label htmlFor="lastName" className="block mb-2">
                Last Name:
              </label>
              <input type="text" placeholder="Last Name" value={checkoutData.lastName} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full md:w-auto" required name="lastName" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block mb-2">
              Email Address:
            </label>
            <input type="text" placeholder="Email Address" value={checkoutData.email} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full" required name="email" />
          </div>

          <div className="mt-4">
            <label htmlFor="phoneNo" className="block mb-2">
              Phone No:
            </label>
            <input type="number" placeholder="Phone Number" value={checkoutData.phoneNo} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full" required name="phoneNo" />
          </div>

          <div className="mt-4">
            <label htmlFor="Billing Address" className="block mb-2">
              Billing Address:
            </label>
            <input type="text" placeholder="Billing Address" value={checkoutData.address} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full" required name="address" />
          </div>

          <div className="mt-4">
            <label htmlFor="Amount" className="block mb-2">
              Amount To Be Paid:
            </label>
            <input type="text" placeholder="Amount" value={`₦ ${checkoutData.amount}`} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full" required disabled />
          </div>
        </div>

        <button className="w-full py-3 bg-headerBackground text-white rounded-md">{btnTxt}</button>
      </form>
    </section>
  );
}
