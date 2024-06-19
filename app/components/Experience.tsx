import Image from 'next/image';
import * as React from 'react';

interface Job {
  yearRange: string;
  position: string;
  company: string;
  location: string;
}
interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => (
  <div className="flex flex-col">
    {jobs.map((job, index) => (
      <section className="flex flex-col items-start px-4 pb-10 max-md:px-5" key={index}>
        <time className="leading-[100%] text-white text-opacity-70">{job.yearRange}</time>
        <h3 className="mt-5 text-2xl font-medium leading-7 text-white">{job.position}</h3>
        <p className="mt-5 leading-8 text-white text-opacity-30">{job.company}</p>
        <p className="leading-8 text-white text-opacity-30">{job.location}</p>
      </section>
    ))}
  </div>
);

const jobsLeftColumn: Job[] = [
  { yearRange: '2022 - 2024', position: 'Teach Lead', company: 'Limitless Technolgoies Sdn Bhd', location: 'Kuala Lumpur, Malaysia' },
  { yearRange: '2019 - 2022', position: 'Software Engineer', company: 'Atom AP Sdn Bhd', location: 'Kuala Lumpur, Malaysia' }
];

const jobsRightColumn: Job[] = [
  { yearRange: '2016 - 2018', position: 'Software Developer', company: 'B2M Technologies Ltd.', location: 'Dhanmondi, Dhaka' },
  { yearRange: '2014 - 2016', position: 'Web Developer', company: 'Multimedia IT Lmitied', location: 'Bannai, Dhaka' }
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-20 pb-20 bg-neutral-900 max-md:px-5">
      <main className="flex-wrap justify-center content-end mt-11 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center max-sm:mb-20 self-stretch px-4 max-md:pr-5">
              <figure className="flex flex-col items-center px-16 pt-16 pb-16 mt-1.5 border border-solid aspect-square bg-stone-900 border-white border-opacity-10 rounded-[135px] max-md:px-5">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e15444c740a748c64662c2f779043751dd3aea429a4779868dcc73c02e473335?apiKey=6fe9f02908104beead3305568f05e1a3&"
                  alt="Profile"
                  className="mx-2.5 aspect-square w-[130px]"
                />
              </figure>
            </div>
          </aside>
          <section className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:max-w-full">
              <header className="flex flex-col text-center px-4 pb-16 max-w-full font-medium w-[660px]">
                <h2 className="text-base leading-8 text-white text-opacity-70 max-md:max-w-full">
                  My Resume
                </h2>
                <h1 className="mt-4 text-5xl text-white leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Previous Working
                  <br />
                  Experience
                </h1>
              </header>
              <section className="flex flex-col px-11 pt-16 pb-px text-base rounded-2xl bg-stone-900 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-wrap gap-5 justify-between content-start items-start max-md:max-w-full">
                  <JobList jobs={jobsLeftColumn} />
                  <div className="shrink-0 w-px bg-white bg-opacity-10 h-[285px] max-sm:hidden" />
                  <JobList jobs={jobsRightColumn} />
                </section>
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Experience;