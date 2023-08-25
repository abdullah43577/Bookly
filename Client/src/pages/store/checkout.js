import { useState } from 'react';
import { alert } from '@/components/helper';

export default function Checkout() {
  const [checkoutData, setCheckoutData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    address: '',
    amount: '',
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
    <section className="container mx-auto px-8">
      <div>This is the checkout page</div>
    </section>
  );
}
