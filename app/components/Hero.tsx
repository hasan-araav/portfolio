import * as React from 'react';

type StatisticProps = {
  value: string;
  description: string;
};

const StatisticCard: React.FC<StatisticProps> = ({ value, description }) => (
  <div className="flex max-sm:text-center flex-col pb-7 mt-6 border-b border-solid border-white border-opacity-10">
    <div className="text-4xl max-sm:text-2xl font-medium leading-10 text-lime-400">{value}</div>
    <div className="mt-1.5 text-base leading-8 max-sm:leading-6 text-white text-opacity-70">{description}</div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-20 bg-neutral-900 max-md:px-5">
      <div className="flex-wrap justify-center content-center mt-16 w-full max-w-[1650px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
            <header className="flex flex-col self-stretch px-4 my-auto max-w-[1650px] max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl leading-[54px] text-white text-opacity-30 max-md:max-w-full max-md:text-4xl">
                Hello, i’m
              </h1>
              <h2 className="mt-5 text-6xl font-bold text-lime-400 leading-[78px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
                Hasan U. Jaman
              </h2>
              <h3 className="text-6xl font-bold text-white leading-[78px] max-md:mr-1 max-md:max-w-full max-md:text-4xl">
                Full-Stack Dev
              </h3>
              <p className="mt-5 text-base leading-8 text-white text-opacity-70 max-md:max-w-full">
                I'm speciaising in developing full-stack web application using React, Angular, Vue, Node and Laravel
              </p>
              <div className="flex gap-5 pt-4 mt-5 max-md:flex-wrap">
                <a
                  href="#"
                  className="flex gap-0 justify-center px-9 py-2.5 bg-lime-400 rounded-2xl max-md:px-5"
                  aria-label="Hire Me"
                >
                  <span className="text-base font-semibold leading-8 text-center capitalize text-zinc-950">Hire Me</span>
                  <div className="flex flex-col justify-center items-start pr-3 pl-2.5 my-auto">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05aa84fd33c613bfc269c249b383d77f251601119ea7577c712b05775bb6f989?apiKey=6fe9f02908104beead3305568f05e1a3&" className="w-1.5 aspect-[0.37]" alt="" />
                  </div>
                </a>
                <a
                  href="#"
                  className="flex gap-0 justify-between self-start mt-2.5"
                  aria-label="Download Resume"
                >
                  <span className="text-sm leading-8 text-white underline capitalize">Download Resume</span>
                  <div className="flex flex-col justify-center items-start pt-0.5 pb-px pl-2 my-auto">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8fd57a6d9a171ee1aa00605aabd050fde9144fe2e4a9ba3e91d9e1f0287a4b?apiKey=6fe9f02908104beead3305568f05e1a3&" className="aspect-[0.33] w-[5px]" alt="" />
                  </div>
                </a>
              </div>
            </header>
          </section>
          <section className="flex flex-col ml-5 w-4/12 max-md:ml-0 max-md:w-full max-sm:mt-8">
            <figure className="flex flex-col grow justify-center max-w-[1650px] max-md:max-w-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/898c1e8826082e70561aa53cdf083a79b6dec2c6ce63c3fd816c675b8d102c6d?apiKey=6fe9f02908104beead3305568f05e1a3&" className="w-full max-md:max-w-full" alt="Depiction of Roy C. Jones" />
            </figure>
          </section>
          <section className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <aside className="flex flex-col justify-center items-end self-stretch pr-4 pl-16 my-auto max-w-[1650px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-sm:flex-row px-10 py-9 max-w-full rounded-2xl bg-zinc-950 w-[265px] max-sm:w-full max-md:px-5">
                <StatisticCard value="13+" description="Years Of Experience" />
                <StatisticCard value="8k+" description="Project Complete" />
                <StatisticCard value="99%+" description="Client Satisfactions" />
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;