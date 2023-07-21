import Link from 'next/link';

export default function HomeDYN() {
  return (
    <section className="hero lg:flex justify-between items-center">
      <div className="hero-content lg:flex items-center gap-4 flex-col">
        <small className="text-background">Welcome to Bookly</small>
        <h2 className="text-white">Books are uniquely portable magic</h2>
        <p className="text-background">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className="button-sect lg:flex items-center gap-4">
          <button className="bg-CTA px-3 py-2 text-headerBackground font-bold">Order Today</button>
          <Link href="#">Read Free Demo</Link>
        </div>
      </div>
    </section>
  );
}
