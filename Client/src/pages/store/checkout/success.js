import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SuccessCheckout() {
  const router = useRouter();
  const { status, tx_ref, transaction_id } = router.query;

  // safe guard if someone manually navigates to this route
  if (!status) {
    window.open('https://bookly-app-nu.vercel.app', '_self');
    return;
  }

  //empty cart
  useEffect(() => localStorage.clear(), []);

  return (
    <section className="checkout_section flex items-center justify-center">
      <div className="checkout_container my-16 lg:my-32 w-[300px] md:w-[600px]">
        <h2 className="text-4xl cardoFont text-headerBackground text-center font-bold">Thank You</h2>
        <p className="text-center cardoFont font-bold text-2xl text-headerBackground my-3">{` Your order with the transaction id ${transaction_id} was completed successfully!`}</p>

        <div className="flex flex-col lg:flex-row items-center gap-3 my-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[3em] lg:h-[5em]" viewBox="0 0 512 512" fill="#1B3764">
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>

          <p className="text-center cardoFont font-bold text-xl text-headerBackground">An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records.</p>
        </div>
      </div>
    </section>
  );
}
