import line from '../../public/images/Line.png';
import Image from 'next/image';
import image1 from '../../public/images/Logo.png';
import image2 from '../../public/images/Logo (1).png';
import image3 from '../../public/images/Logo (2).png';
import image4 from '../../public/images/Logo (3).png';
import { useMediaQuery } from '@react-hook/media-query';

export default function Trustees() {
  const isSmallScreen = useMediaQuery('(max-width:978px)');

  return (
    <section className="w-full px-8">
      <container className="container mx-auto bg-[#F5F5F5]">
        <container className="flex flex-col items-center my-8">
          <h2 className="text-3xl text-center mb-3 cardoFont font-bold text-headerBackground">Trusted by the Best</h2>
          <Image src={line} alt="line" width={80} />
        </container>

        <container className="flex items-center justify-between text-center mt-10">
          <div className="flex items-center flex-col">
            <Image src={image2} alt="logo" width={isSmallScreen ? 50 : 100} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Amazen Corp</h2>
                <p className="text-headerParagraphTexts w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>

          <div className="flex items-center flex-col">
            <Image src={image3} alt="logo" width={isSmallScreen ? 100 : 150} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Megan Books</h2>
                <p className="text-headerParagraphTexts w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>

          <div className="flex items-center flex-col">
            <Image src={image4} alt="logo" width={isSmallScreen ? 80 : 150} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Los Books</h2>
                <p className="text-headerParagraphTexts w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>

          <div className="flex items-center flex-col">
            <Image src={image1} alt="logo" width={isSmallScreen ? 50 : 100} />
            {!isSmallScreen && (
              <label htmlFor="logo">
                <h2 className="text-headerBackground font-bold cardoFont text-2xl my-2">Urban Lib</h2>
                <p className="text-headerParagraphTexts w-2/3 mx-auto">A long establishing fact that those looking at its layout.</p>
              </label>
            )}
          </div>
        </container>
      </container>
    </section>
  );
}
