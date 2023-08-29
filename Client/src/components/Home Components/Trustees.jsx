import { useMediaQuery } from '@react-hook/media-query';

export default function Trustees() {
  const isSmallScreen = useMediaQuery('(max-width:978px)');

  return (
    <section className="w-full p-8 mb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Trusted by the Best</h2>
          <img src="/Line.png" alt="line" width={80} />
        </div>

        <div className="flex items-center justify-between text-center mt-10">
          <div className="flex items-center flex-col">
            <img src="/Logo (1).png" alt="logo" width={isSmallScreen ? 50 : 100} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Amazen Corp</h2>
                <p className="text-mainPGParagraphTxt w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>

          <div className="flex items-center flex-col">
            <img src="/Logo (2).png" alt="logo" width={isSmallScreen ? 100 : 150} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Megan Books</h2>
                <p className="text-mainPGParagraphTxt w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>

          <div className="flex items-center flex-col">
            <img src="/Logo (3).png" alt="logo" width={isSmallScreen ? 80 : 150} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Los Books</h2>
                <p className="text-mainPGParagraphTxt w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>

          <div className="flex items-center flex-col">
            <img src="/Logo.png" alt="logo" width={isSmallScreen ? 50 : 100} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Urban Lib</h2>
                <p className="text-mainPGParagraphTxt w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
