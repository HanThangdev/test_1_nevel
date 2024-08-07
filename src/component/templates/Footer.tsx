import Image from 'next/image';

import { linkedin, twitter, youtube } from '@/assets/svgs';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Web map',
      links: [
        {
          name: 'Home',
          link: 'https://www.hoobank.com/content/',
        },
        {
          name: 'Games',
          link: 'https://www.hoobank.com/how-it-works/',
        },
        {
          name: 'News',
          link: 'https://www.hoobank.com/create/',
        },
        {
          name: 'Math',
          link: 'https://www.hoobank.com/explore/',
        },
        {
          name: 'Company',
          link: 'https://www.hoobank.com/terms-and-services/',
        },
        {
          name: 'Events',
          link: 'https://www.hoobank.com/terms-and-services/',
        },
        {
          name: 'Partners',
          link: 'https://www.hoobank.com/terms-and-services/',
        },
      ],
    },
    {
      title: 'About us',
      links: [
        {
          name: 'Listening',
          link: 'https://www.hoobank.com/help-center/',
        },
        {
          name: 'Certification',
          link: 'https://www.hoobank.com/partners/',
        },
        {
          name: 'Responsible Gaming',
          link: 'https://www.hoobank.com/suggestions/',
        },
        {
          name: 'Exhibitions',
          link: 'https://www.hoobank.com/blog/',
        },
        {
          name: 'Copyright Protection',
          link: 'https://www.hoobank.com/newsletters/',
        },
        {
          name: 'Privacy Policy',
          link: 'https://www.hoobank.com/newsletters/',
        },
      ],
    },
    {
      title: 'Events',
      links: [
        {
          name: 'PG ICE 2017',
          link: 'https://www.hoobank.com/our-partner/',
        },
        {
          name: 'PG ICE 2018',
          link: 'https://www.hoobank.com/become-a-partner/',
        },
        {
          name: 'PG ICE 2019',
          link: 'https://www.hoobank.com/become-a-partner/',
        },
      ],
    },
    {
      title: 'Out partners',
      links: [
        {
          name: 'Relax Gaming',
          link: 'https://www.hoobank.com/our-partner/',
        },
        {
          name: 'Leander Games',
          link: 'https://www.hoobank.com/become-a-partner/',
        },
      ],
    },
  ];

  return (
    <Background className="border-t-[1px] border-t-[#D9D9D9]">
      <Section>
        <section
          className={`flex flex-col items-center justify-center py-6 sm:py-16`}
        >
          <div className={`grid grid-cols-6 gap-4`}>
            <div className="col-start-1 col-end-2">
              <div className="flex flex-col items-start justify-start ">
                <div className="flex flex-row items-start justify-start">
                  <Logo color="#A59E9E" />
                </div>
                <div className="relative leading-[1rem]">
                  <p className="py-1">Valletta Buildings, South Street,</p>
                  <p className="py-1">Valletta - VLT 1103 Malta</p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1rem]">
                <Image
                  className="relative size-[1.25rem] min-h-[1.25rem] shrink-0 overflow-hidden"
                  loading="lazy"
                  alt="twitter"
                  src={twitter}
                />
                <Image
                  className="relative size-[1.25rem] min-h-[1.25rem] shrink-0 overflow-hidden"
                  loading="lazy"
                  alt="youtube"
                  src={youtube}
                />
                <Image
                  className="relative size-[1.25rem] min-h-[1.25rem] shrink-0 overflow-hidden"
                  loading="lazy"
                  alt="linkedin"
                  src={linkedin}
                />
              </div>
            </div>

            <div className="col-start-3 col-end-7 flex items-start justify-between">
              {footerLinks.map((footerlink) => (
                <div
                  key={footerlink.title}
                  className={`ss:my-0 my-4 flex flex-col `}
                >
                  <h4 className="font-poppins text-[18px] font-medium leading-[27px] text-black">
                    {footerlink.title}
                  </h4>
                  <ul className="mt-4 list-none">
                    {footerlink.links.map((link, index) => (
                      <li
                        key={link.name}
                        className={`font-poppins text-dimWhite hover:text-secondary cursor-pointer text-[16px] font-normal leading-[24px] ${
                          index !== footerlink.links.length - 1
                            ? 'mb-4'
                            : 'mb-0'
                        }`}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#D9D9D9] pt-6 md:flex-row">
            <p className="font-poppins text-center text-[18px] font-normal leading-[27px] text-[#D9D9D9]">
              COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
            </p>
          </div>
        </section>
      </Section>
    </Background>
  );
};

export { Footer };
