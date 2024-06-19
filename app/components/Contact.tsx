import * as React from "react";

interface ExperienceItemProps {
  src: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ src, description }) => (
  <div className="flex gap-0 mt-5">
    <div className="flex flex-col justify-center pr-5">
      <div className="flex flex-col justify-center items-start bg-lime-400 rounded-2xl">
        <img loading="lazy" src={src} alt="" className="aspect-square w-[30px]" />
      </div>
    </div>
    <div className="flex-1 text-xl leading-8 text-white text-opacity-70">{description}</div>
  </div>
);

const ContactForm: React.FC = () => (
  <form className="flex flex-col flex-wrap grow content-start self-stretch max-md:max-w-full">
    <div className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 pb-8 max-w-[880px] max-md:max-w-full">
            <label htmlFor="fullName" className="text-lg font-medium leading-8 text-white">
              Full Name
            </label>
            <div className="flex gap-1.5 px-7 py-4 mt-5 rounded-2xl border border-solid bg-stone-900 border-white border-opacity-10 max-md:px-5">
              <input
                type="text"
                id="fullName"
                placeholder="Richard D. Hammond"
                aria-label="Full Name"
                className="justify-center my-auto text-base text-white text-opacity-20 bg-transparent border-none outline-none w-full"
              />
              <div className="flex justify-center items-center pt-2 pb-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31708ec693b738cd6c1924dd8b378e053f225e93726002e6c8bb344f25cb834?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" className="w-3.5 aspect-[0.88]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 pb-8 max-w-[880px] max-md:max-w-full">
            <label htmlFor="email" className="text-lg font-medium leading-8 text-white">
              Email Address
            </label>
            <div className="flex gap-1 px-7 py-4 mt-5 rounded-2xl border border-solid bg-stone-900 border-white border-opacity-10 max-md:px-5">
              <input
                type="email"
                id="email"
                placeholder="support@gmail.com"
                aria-label="Email Address"
                className="justify-center my-auto text-base whitespace-nowrap text-white text-opacity-20 bg-transparent border-none outline-none w-full"
              />
              <div className="flex justify-center items-center pt-2 pb-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a93a730f2e31ea3642c1ec9017cc1ced3e506f556cf9ebed9e6f4ef7595cfaa?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" className="w-4 aspect-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 pb-8 max-w-[880px] max-md:max-w-full">
            <label htmlFor="phoneNumber" className="text-lg font-medium leading-8 text-white">
              Phone Number
            </label>
            <div className="flex gap-1 px-7 py-4 mt-5 rounded-2xl border border-solid bg-stone-900 border-white border-opacity-10 max-md:px-5">
              <input
                type="tel"
                id="phoneNumber"
                placeholder="+880 (123) 456 88"
                aria-label="Phone Number"
                className="justify-center my-auto text-base text-white text-opacity-20 bg-transparent border-none outline-none w-full"
              />
              <div className="flex justify-center items-center pt-2 pb-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c7c64aba0cf5b37fb0abbd3ff43e4a9fc35613213c22bc2beaf45cae21a7b17?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" className="w-4 aspect-square" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-4 pb-8 max-w-[880px] max-md:max-w-full">
            <label htmlFor="subject" className="text-lg font-medium leading-8 text-white">
              Subject
            </label>
            <div className="flex gap-1.5 px-7 py-4 mt-5 rounded-2xl border border-solid bg-stone-900 border-white border-opacity-10 max-md:px-5">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                aria-label="Subject"
                className="justify-center my-auto text-base whitespace-nowrap text-white text-opacity-20 bg-transparent border-none outline-none w-full"
              />
              <div className="flex justify-center items-center pt-2 pb-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3d74f5092da8a4bb91eb58a8d936bac411166318a8e7049ef0670403522d994?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" className="w-3.5 aspect-[0.88]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col px-4 pb-8 max-w-[880px] max-md:max-w-full">
      <label htmlFor="message" className="text-lg font-medium leading-8 text-white max-md:max-w-full">
        Message
      </label>
      <textarea
        id="message"
        placeholder="Write message"
        aria-label="Message"
        className="px-8 pt-5 pb-20 mt-5 text-base leading-5 rounded-2xl border border-solid bg-stone-900 border-white border-opacity-10 text-white text-opacity-20 max-md:px-5 max-md:max-w-full w-full"
      />
    </div>
    <div className="flex flex-col justify-center items-start px-4 max-w-[880px] max-md:pr-5 max-md:max-w-full">
      <button type="submit" className="flex gap-0 justify-between px-9 py-2.5 max-w-full bg-lime-400 rounded-2xl w-[225px] max-md:px-5">
        <span className="text-base font-semibold leading-8 text-center capitalize text-zinc-950">Send Us Message</span>
        <div className="flex flex-col justify-center items-start px-2.5 my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/620708c136a4e801660a060ccb7c651877a2d6ac98e6856d247ef050d0b06867?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" className="w-1.5 aspect-[0.37]" />
        </div>
      </button>
    </div>
  </form>
);

const Contact: React.FC = () => (
  <div className="flex justify-center items-center px-16 py-20 bg-neutral-900 max-md:px-5">
    <div className="flex-wrap justify-center content-end mt-3.5 w-full max-w-[1320px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow px-4 pb-16 mt-3.5 max-w-[1320px] max-md:max-w-full">
            <h2 className="text-base font-medium leading-8 text-white text-opacity-70">Get In Touch</h2>
            <h1 className="mt-5 mr-8 text-5xl font-medium text-white leading-[54px] max-md:mr-2.5 max-md:text-4xl max-md:leading-[53px]">
              Let’s Talk For your <br /> Next Projects
            </h1>
            <p className="mt-5 text-base leading-8 text-white text-opacity-70">
              Sed ut perspiciatis unde omnin natus totam rem <br /> aperiam eaque inventore veritatis
            </p>
            <ExperienceItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc80194fdc543186199ee32059e53a0fa8e65e9ff30cd094db4d2e18ddc89e5a?apiKey=6fe9f02908104beead3305568f05e1a3&" description="5+ Years Of Experience" />
            <ExperienceItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/85852aa1dc05d6d7b280bec6186c736759cc2366775abcb89e7bd2dbc4b87a2a?apiKey=6fe9f02908104beead3305568f05e1a3&" description="5+ Years Of Experience" />
            <ExperienceItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bedac5c66b56aae38321d80edd9c572de4ee07953abb02e6adb91e210332f9e?apiKey=6fe9f02908104beead3305568f05e1a3&" description="5+ Years Of Experience" />
            <ExperienceItem src="https://cdn.builder.io/api/v1/image/assets/TEMP/79361b063590d5fa3e3a23032c6efb73983b3ffcc1cea9f83a449e6784bfc206?apiKey=6fe9f02908104beead3305568f05e1a3&" description="5+ Years Of Experience" />
          </section>
        </div>
        <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;