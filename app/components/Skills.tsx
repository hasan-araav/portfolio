import React from 'react';

interface SkillCardProps {
  imgSrc: string;
  altText: string;
  skillName: string;
  skillPercentage: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imgSrc, altText, skillName, skillPercentage }) => {
  return (
    <div className="flex flex-col grow  text-xl text-center  max-w-[150px]">
      <div className=" flex flex-col justify-center items-center px-3 pt-7 pb-3 rounded-2xl border border-solid bg-stone-900 border-white border-opacity-10">
        <img loading="lazy" src={imgSrc} alt={altText} className="self-center aspect-square w-[55px]" />
        <div className="justify-center px-10 mt-4 font-medium text-white leading-[140%]">{skillName}</div>
        <div className="justify-center px-11 max-sm:px-0 py-2.5 mt-4 font-bold rounded-2xl bg-neutral-900 leading-[120%] text-white text-opacity-30 max-md:px-5 w-full">
          {skillPercentage}
        </div>
      </div>
    </div>
  );
};

const skillsData = [
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/035ccfae0fcb2ff4a218d93ae71af1617c70705637f9e3c4ec7682ab91ae654e?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Figma logo", skillName: "Figma", skillPercentage: "95%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f1bb8d91d017758456461e76208065917e515ffd0f0be9e08bd4db3e0552992?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Framer logo", skillName: "Framer", skillPercentage: "83%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d52f4161fc5009cf373f530607d123dd2c3a14b985103f8154a3dbf87cd4130?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Figma logo", skillName: "Figma", skillPercentage: "93%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7590d03ab4151bb0bb5291c3e8d1ee6c488426cb5f64baa70e64a424b83fc066?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Wordpress logo", skillName: "Wordpress", skillPercentage: "84%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cb123250d69a9e2de7c6704217af3bea16266cacd94f390ab883a5914f905e6?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Figma logo", skillName: "Figma", skillPercentage: "65%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d83162001b70dbf48d4406ef7e6ce8d0ec06b3abf66a200f722cf6ba734060d?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Webflow logo", skillName: "Webflow", skillPercentage: "86%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0bb2b1249143990549945ddc804750641031416c8c4dfd484590cf0c4119fab?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Figma logo", skillName: "Figma", skillPercentage: "62%" },
  { imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4e91df58c25fce00758632d2ee01ebb39d8ac19327d4d53cf3142bb639766fb?apiKey=6fe9f02908104beead3305568f05e1a3&", altText: "Sketch logo", skillName: "Sketch", skillPercentage: "94%" },
];

const Skills: React.FC = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-16 bg-neutral-900 max-md:px-5">
      <div className="flex justify-center items-center py-20 pr-16 pl-16 w-full bg-zinc-950 max-w-[1620px] max-md:px-5 max-md:max-w-full">
        <div className="justify-center mt-11 mb-5 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <aside className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-start pr-12 max-sm:pb-20 pl-4 max-w-[1390px] max-md:pr-5 max-md:max-w-full">
                <p className="self-stretch text-base font-medium leading-8 text-white text-opacity-70 max-md:max-w-full">My Skills</p>
                <h2 className="mt-4 text-5xl font-medium text-white leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Things <br />I've Mastered
                </h2>
                <p className="mt-6 text-base leading-8 text-white text-opacity-70 max-md:max-w-full">
                  Over the years I have accumulated skills in various stacks.
                </p>
                <div className="flex gap-0 justify-center px-9 py-2.5 mt-10 max-w-full bg-lime-400 rounded-2xl max-md:px-5">
                  <button className="text-base font-semibold leading-8 text-center capitalize text-zinc-950" tabIndex={0}>Learn More</button>
                  <div className="flex flex-col justify-center items-start px-2.5 my-auto">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa7fbba2a00281023bcdcb241873ea716a8c1a0b14d4125b7cc3012bc558ef68?apiKey=6fe9f02908104beead3305568f05e1a3&" alt="" className="w-1.5 aspect-[0.37]" />
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-2 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 justify-center max-sm:flex-row max-sm:gap-4 max-md:flex-col max-md:gap-0 flex-wrap">
                    {skillsData.map((skill, index) => (
                      <SkillCard
                        key={index}
                        imgSrc={skill.imgSrc}
                        altText={skill.altText}
                        skillName={skill.skillName}
                        skillPercentage={skill.skillPercentage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;