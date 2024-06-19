import * as React from 'react';

interface Job {
  yearRange: string;
  position: string;
  company: string;
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
      </section>
    ))}
  </div>
);

const jobsLeftColumn: Job[] = [
  { yearRange: '2021 - Present', position: 'Lead Product Designer', company: 'Google' },
  { yearRange: '2018 - 2021', position: 'Senior Product Designer', company: 'Webflow' }
];

const jobsRightColumn: Job[] = [
  { yearRange: '2016 - 2018', position: 'Junior UX/UI Designer', company: 'LinkedIn' },
  { yearRange: '2014 - 2016', position: 'Graphics Designer', company: 'Apple' }
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-20 bg-neutral-900 max-md:px-5">
      <main className="flex-wrap justify-center content-end mt-11 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-start self-stretch px-4 py-20 max-md:pr-5">
              <figure className="flex flex-col items-center px-16 pt-16 pb-16 mt-1.5 border border-solid aspect-square bg-stone-900 border-white border-opacity-10 rounded-[135px] max-md:px-5">
                <img
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
              <header className="flex flex-col px-4 pb-16 max-w-full font-medium w-[660px]">
                <h2 className="text-base leading-8 text-white text-opacity-70 max-md:max-w-full">
                  My Resume
                </h2>
                <h1 className="mt-4 text-5xl text-white leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Real Problem Solutions
                  <br />
                  Experience
                </h1>
              </header>
              <section className="flex flex-col px-11 pt-16 pb-px text-base rounded-2xl bg-stone-900 max-md:px-5 max-md:max-w-full">
                <section className="flex flex-wrap gap-5 justify-between content-start items-start max-md:max-w-full">
                  <JobList jobs={jobsLeftColumn} />
                  <div className="shrink-0 w-px bg-white bg-opacity-10 h-[285px]" />
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