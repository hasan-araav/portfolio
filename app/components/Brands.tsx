import Image from "next/image";
import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const ResponsiveImage: React.FC<ImageProps> = ({ src, alt }) => (
  <Image loading="lazy" src={src} alt={alt} className="content-center w-full aspect-[4.35] max-w-[1320px] max-md:max-w-full" />
);

const Brands: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 pt-16 pb-16 text-lg font-medium leading-5 text-center text-white bg-neutral-900 max-md:px-5">
      <div className="flex flex-col px-4 pb-16 mt-12 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <p className="justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
          I’ve 1253+ Global Clients & lot’s of Project Complete
        </p>
      </div>
      <ResponsiveImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/82fd694603a22ac97a57396b6468be0f68a484e068dd992be1a387da5c6cef8b?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" />
    </section>
  );
};

export default Brands;