import Link from 'next/link';

export default function AuthorBooks({ uploadedBooks }) {
  const result = uploadedBooks?.map((uploadedBooks, index) => {
    return (
      <div key={index}>
        <div className="p-4 bg-[#F5F8FC]">
          <img className="mx-auto" src={uploadedBooks.file} alt="uploaded books images" />
        </div>
        <div className="content">
          <div className="flex items-center justify-between mt-3">
            <h2 className="cardoFont font-bold text-headerBackground text-xl lg:text-3xl capitalize">{uploadedBooks.title}</h2>
            <p className="text-CTA font-bold">${uploadedBooks.price}</p>
          </div>
          <p className="text-mainPGParagraphTexts my-3 text-center lg:text-left">{uploadedBooks.description}</p>
          <div className="flex items-center gap-2 my-3">
            <img src="/Point.png" alt="bullet" />
            <p className="cardoFont font-bold text-lg lg:text-xl capitalize text-headerBackground">{uploadedBooks.category}</p>
          </div>
          <Link href={`/store/${uploadedBooks._id}`}>
            <button className="cardoFont border border-CTA px-4 py-2 hover:bg-CTA w-full lg:w-auto">Order Today</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="w-full py-8 bg-white">
      <div className="container booksContainer mx-auto px-8">{result.length ? result : 'Fetching Data Request, Please Hold On'}</div>
    </section>
  );
}
