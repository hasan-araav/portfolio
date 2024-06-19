import * as React from "react";

interface ProjectProps {
  imageSrc: string;
  projectType: string;
  projectTitle: string;
  projectDescription: string;
}

const Project: React.FC<ProjectProps> = ({
  imageSrc,
  projectType,
  projectTitle,
  projectDescription,
}) => (
  <article className="flex flex-col md:flex-row gap-5 md:gap-0">
    <div className="md:w-[55%] w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="w-full aspect-[1.27] max-w-[630px] md:mr-2.5 md:max-w-full"
      />
    </div>
    <div className="md:w-[45%] w-full">
      <div className="self-stretch text-base leading-8 my-auto px-16 pb-20 md:px-5 max-w-full">
        <div className="text-lime-400">{projectType}</div>
        <h3 className="mt-6 text-5xl font-medium text-white leading-[54px] md:text-4xl md:leading-[53px]">
          {projectTitle}
        </h3>
        <p className="mt-6 mb-3 text-white text-opacity-70">
          {projectDescription}
        </p>
      </div>
    </div>
  </article>
);

const Projects: React.FC = () => {
  const projects = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5bd0ef02d1606e940f01eea5b25c182130f35140fe6aeda92bddeed1abc59d8?apiKey=6fe9f02908104beead3305568f05e1a3&",
      projectType: "Product Design",
      projectTitle: "Mobile Application \n Design",
      projectDescription:
        "Sed ut perspiciatis unde omnin natus totam rem \n aperiam eaque inventore veritatis architecto beatae",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e851e0348f44e153c5ecc57fa9ad285b1382fcd22515d947c2d13f469d6966f0?apiKey=6fe9f02908104beead3305568f05e1a3&",
      projectType: "Product Design",
      projectTitle:
        "Brand Identity and \n Motion Design",
      projectDescription:
        "Sed ut perspiciatis unde omnin natus totam rem \n aperiam eaque inventore veritatis architecto beatae",
    },
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7e4de6e953023f6c5caf07e66828ade23a07c8df5dcd6c5ca98f4353daa271e?apiKey=6fe9f02908104beead3305568f05e1a3&",
        projectType: "Product Design",
        projectTitle: "Website Makeup \n Design",
        projectDescription:
          "Sed ut perspiciatis unde omnin natus totam rem \n aperiam eaque inventore veritatis architecto beatae",
      },
      {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/972759f51ed362a1ef2c65834405271167fabebf64f8a59c7598363eb6cba043?apiKey=6fe9f02908104beead3305568f05e1a3&",
        projectType: "Product Design",
        projectTitle: "Mobile Application \n Development",
        projectDescription:
          "Sed ut perspiciatis unde omnin natus totam rem \n aperiam eaque inventore veritatis architecto beatae",
      },
  ];

  return (
    <section className="flex flex-col items-center self-stretch p-20 bg-neutral-900 max-md:px-5">
      <header className="flex flex-col px-4 pb-16 mt-11 w-full font-medium text-center max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-base leading-8 text-white text-opacity-70 max-md:px-5 max-md:max-w-full">
          Latest Works
        </h2>
        <h1 className="mt-4 text-5xl text-white leading-[54px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
          Explore My Popular Projects
        </h1>
      </header>
      <main className="flex-wrap justify-center content-center pb-6 w-full max-w-[1320px] max-md:max-w-full">
        {projects.map((project) => (
          <Project
            key={project.imageSrc}
            imageSrc={project.imageSrc}
            projectType={project.projectType}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
          />
        ))}
      </main>
      <footer className="flex justify-center items-center px-16 w-full max-w-[1320px] max-md:px-5 max-md:max-w-full">
        <button
          type="button"
          className="flex gap-0 justify-center px-9 py-2.5 max-w-full bg-lime-400 rounded-2xl w-[236px] max-md:px-5"
        >
          <span className="text-base font-semibold leading-8 text-center capitalize text-zinc-950">
            View More Projects
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f515f3830eb518481aa38c0d8f6bab908b08203f91efcedd4025762f3d13b0?apiKey=6fe9f02908104beead3305568f05e1a3&"
            alt="Arrow icon"
            className="w-1.5 aspect-[0.37]"
          />
        </button>
      </footer>
    </section>
  );
};

export default Projects;