import * as React from 'react';

interface SocialMediaLinkProps {
  platform: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ platform }) => {
  return (
    <a href={`https://${platform.toLowerCase()}.com`} className="px-6 pb-1.5 max-md:px-5 text-white text-opacity-70">
      {platform}
    </a>
  );
};

const Footer: React.FC = () => {
  const socialMediaPlatforms = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'];

  return (
    <footer className="flex flex-col bg-neutral-900">
      <section className="flex flex-col items-center px-16 pt-5 pb-1.5 w-full text-base leading-8 max-md:px-5 max-md:max-w-full">
        <nav className="flex flex-wrap gap-0 justify-center content-start px-20 max-md:px-5">
          <p className="px-4 pb-4 text-white max-md:max-w-full">Copyright @2023, Noxfolio All Rights Reserved</p>
          <div className="flex flex-col justify-center p-2.5 text-right whitespace-nowrap max-md:max-w-full">
            <div className="flex flex-wrap gap-0 content-start">
              {socialMediaPlatforms.map((platform) => (
                <SocialMediaLink key={platform} platform={platform} />
              ))}
            </div>
          </div>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;