import { useState } from 'react';
import { alert } from '@/components/helper';

export default function Checkout() {
  const [checkoutData, setCheckoutData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    address: '',
    amount: '$100',
  });

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setCheckoutData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  // checkout
  const handleSubmitCheckout = async function (e) {
    e.preventDefault();
    const validityCheck = Object.keys(checkoutData).every((obj) => obj !== '');

    if (!validityCheck) {
      alert('error', 'You need to fill out the form properly');
      return;
    }

    const checkoutObject = {
      customer: {
        name: `${checkoutData.firstName} ${checkoutData.lastName}`,
        email: `${checkoutData.email}`,
        items: '',
        phone: `${checkoutData.phoneNo}`,
        address: `${checkoutData.address}`,
      },

      json: {
        amount: `${checkoutData.amount}`,
      },
    };

    try {
      const res = await fetch(`${SERVER}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutObject),
      });

      const data = await res.json();

      if (res.status !== 200) throw new Error(data.message);
      console.log(data);

      window.location.href = data.paymentLink;

      alert('success', 'Payment Made Successfully!');
    } catch (err) {
      console.log(err);
      alert('error', 'Error Making Payment');
    }
  };

  return (
    <section className="checkout_section flex items-center justify-center w-full">
      <form onSubmit={handleSubmitCheckout} className="checkout_form w-[600px] container mx-auto my-32 flex flex-col">
        <h2 className="cardoFont font-bold text-headerBackground text-4xl text-center">Billing Information</h2>

        <div className="w-full">
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="firstName" className="block mb-2">
                First Name:
              </label>
              <input type="text" placeholder="First Name" value={checkoutData.firstName} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md" required name="firstName" />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2">
                Last Name:
              </label>
              <input type="text" placeholder="Last Name" value={checkoutData.lastName} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md" required name="lastName" />
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
            <input type="text" placeholder="Amount" value={checkoutData.amount} onChange={handleInputChange} className="px-4 py-2 outline-none rounded-md w-full" required disabled />
          </div>
        </div>

        <button className="w-full py-3 bg-headerBackground text-white rounded-md">Proceed To Payment</button>
      </form>
    </section>
  );
}
