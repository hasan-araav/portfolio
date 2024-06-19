import * as React from "react";

type ContactInfoProps = {
  iconSrc: string;
  iconAlt: string;
  label: string;
  info: string;
}

type ServiceProps = {
  iconSrc: string;
  iconAlt: string;
  serviceTitle: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ iconSrc, iconAlt, label, info }) => {
  return (
    <div className="flex flex-col pb-4">
      <div className="flex gap-0">
        <div className="flex flex-col justify-center pr-4 my-auto">
          <div className="flex flex-col justify-center items-start p-3 bg-lime-400 rounded-3xl max-md:pr-5">
            <img loading="lazy" src={iconSrc} alt={iconAlt} className="w-4 aspect-square" />
          </div>
        </div>
        <div className="flex flex-col pt-0.5 pb-px leading-[150%]">
          <div className="text-sm text-white text-opacity-70">{label}</div>
          <div className="text-lg text-white">{info}</div>
        </div>
      </div>
    </div>
  );
};

const Service: React.FC<ServiceProps> = ({ iconSrc, iconAlt, serviceTitle }) => {
  return (
    <div className="flex gap-0">
      <div className="flex flex-col justify-center items-start pt-0.5 pr-3 pb-px my-auto">
        <img loading="lazy" src={iconSrc} alt={iconAlt} className="w-5 aspect-square" />
      </div>
      <div className="text-xl font-medium leading-8 text-white">{serviceTitle}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center self-stretch px-16 max-md:px-5">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-zinc-950 max-w-[1620px] max-md:px-5 max-md:max-w-full">
        <section className="mt-12 mb-6 w-full max-w-[1390px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-12 max-w-[1390px] max-md:px-5 max-md:max-w-full">
                <h2 className="text-base font-medium leading-8 text-white text-opacity-70 max-md:max-w-full">About Me</h2>
                <h1 className="mt-5 mr-14 text-5xl font-medium text-white leading-[54px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Senior Full Stack Web Application Developer
                </h1>
                <p className="mt-5 text-base leading-8 text-white text-opacity-70 max-md:max-w-full">
                With over 10 years of experience in developing robust and scalable web applications, I specialize in crafting solutions that drive digital transformation and deliver exceptional user experiences.
                </p>
                <div className="flex flex-wrap  flex-row gap-4 content-center items-start mt-8 w-full max-md:max-w-full">
                  <Service iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb17442719c98fcce39c163960565a84559d2695d341514ac913d1afb217262?apiKey=6fe9f02908104beead3305568f05e1a3&" iconAlt="Graphic representing Branding & Design" serviceTitle="Shopify Development" />
                  <Service iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d479eba523004d1d72eef9be3e5a650b9efe6e10323abea7c04007ce9882e862?apiKey=6fe9f02908104beead3305568f05e1a3&" iconAlt="Graphic representing Product Design" serviceTitle="WooCommerce Development" />
                  <Service iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/12b0e60fb5e8469a5b987b129cb02856a16926488cfec75496cfc19f4b675dd7?apiKey=6fe9f02908104beead3305568f05e1a3&" iconAlt="Graphic representing Digital Marketing" serviceTitle="Laravel Development" />
                  <Service iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/65de91c9a434e81f3d715bf68b7f4984ad1865ff94c95a9f9ddb57d4d7c0755b?apiKey=6fe9f02908104beead3305568f05e1a3&" iconAlt="Graphic representing Web Development" serviceTitle="Data Mining" />
                </div>
                <div className="flex flex-wrap gap-5 content-start px-10 pt-4 pb-1 mt-8 rounded-3xl border border-solid bg-stone-900 border-white border-opacity-10 max-md:px-5">
                  <ContactInfo iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/67ed7c2bdd74736c51ffa0d4cf57c23ed6b6ecfa83ea8ed0886495622e06cb52?apiKey=6fe9f02908104beead3305568f05e1a3&" iconAlt="Email Icon" label="Email Us" info="aravvi@gmail.com" />
                  <ContactInfo iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d7ecabd64a3d699a0aa1360db3130b1aefab5b0bcc835e8f89384425fd335ea7?apiKey=6fe9f02908104beead3305568f05e1a3&" iconAlt="Phone Icon" label="Make A Call" info="+880 1703417429" />
                </div>
              </div>
            </article>
            <aside className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full max-sm:mt-8">
              <div className="flex flex-col grow justify-center px-12 max-w-[1390px] max-md:px-5 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12875ba3346eaafc91993fc04aa89c5357ab48b226f4db8c799c25d7c56a141f?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="Decorative image" className="w-full aspect-[0.91] max-w-[479px] max-md:max-w-full" />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;