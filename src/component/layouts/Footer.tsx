import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import { linkedin, plus_icon, twitter, youtube } from '@/assets/svgs';
import { FOOTER_LINKS } from '@/constants';

import { Logo } from '../logo';
import { Section } from './Section';

const Footer = () => {
  return (
    <Section className="px-5 lg:py-10">
      <footer>
        <div className="max-w-screen-medium mx-4 pb-20 md:mx-8 lg:m-auto">
          <div className="flex flex-col-reverse flex-wrap justify-between gap-8 pt-16 md:pt-12 lg:flex-row">
            <div className="mb-2 w-full lg:w-3/12">
              <div className="hidden lg:block">
                <Logo color="#A59E9E" />
              </div>
              <div className="flex flex-row text-nowrap py-5 text-sm font-light leading-6 text-[#B3B3B3] lg:flex-col">
                <span>Valletta Buildings, South Street,</span>
                <span> Valletta - VLT 1103 Malta</span>
              </div>
              <span className="block py-3 text-xs font-normal text-[#B3B3B3] lg:hidden">
                COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
              </span>
              <div className="flex gap-4 py-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.linkedin.com/company/chatflyai`}
                  className="cursor-pointer"
                >
                  <Image loading="lazy" src={linkedin} alt="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://discord.com/invite/UEGQBrXgY9`}
                  className="cursor-pointer"
                >
                  <Image loading="lazy" src={youtube} alt="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://discord.com/invite/UEGQBrXgY9`}
                  className="cursor-pointer"
                >
                  <Image loading="lazy" src={twitter} alt="Icon" />
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col justify-between gap-[52px] lg:w-7/12 lg:flex-row">
              {FOOTER_LINKS.map((footerlink) => (
                <Fragment key={footerlink.title}>
                  <ul className="hidden list-none gap-6 space-y-3  lg:block">
                    <li className="text-sm font-semibold uppercase text-black  lg:text-nowrap">
                      {footerlink.title}
                    </li>
                    {footerlink.links.map((link, index) => (
                      <li key={index} className=" lg:text-nowrap">
                        <Link
                          href={link.link}
                          className="!cursor-pointer text-sm font-light text-[#B3B3B3] hover:text-black"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Disclosure as="div" className="block w-full lg:hidden">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="w-full border-b pb-8 text-left">
                          <div className="flex justify-between">
                            <h1 className="text-sm font-semibold uppercase  text-black">
                              {footerlink.title}
                            </h1>
                            <Image
                              loading="lazy"
                              width={12}
                              height={12}
                              src={plus_icon}
                              alt={'plus_icon'}
                            />
                          </div>
                          <div className="overflow-hidden py-2">
                            <AnimatePresence>
                              {open && (
                                <DisclosurePanel
                                  static
                                  as={motion.div}
                                  initial={{ opacity: 0, y: -24 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -24 }}
                                  className="origin-top"
                                >
                                  <ul>
                                    {footerlink.links.map((link) => (
                                      <li
                                        key={link.link}
                                        className="cursor-pointer text-[#B3B3B3] lg:text-nowrap"
                                      >
                                        <Link
                                          href={link.link}
                                          className="cursor-pointer text-sm font-light text-[#B3B3B3] transition duration-150 ease-in-out hover:text-black"
                                        >
                                          {link.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </DisclosurePanel>
                              )}
                            </AnimatePresence>
                          </div>
                        </DisclosureButton>
                      </>
                    )}
                  </Disclosure>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden border-t border-t-[#D9D9D9] pt-10 text-xs font-normal text-[#B3B3B3] lg:block">
          <span>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </Section>
  );
};

export { Footer };
