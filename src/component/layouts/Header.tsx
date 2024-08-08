import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HEADER_LINKS } from '@/constants';
import useWindowSize from '@/hooks/useWindowSize';

import { Background } from '../background';
import { Logo } from '../logo';
import MobileMenu from './MobileMenu';
import { Section } from './Section';

const Header = () => {
  const [top, setTop] = useState<boolean>(true);
  const [active, setActive] = useState('/');
  const { width } = useWindowSize();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    if (window.performance) {
      if (performance.navigation.type === 1) {
        scrollToTop();
      }
    }
    const handleBeforeUnload = () => {
      scrollToTop();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const scrollHandler = () => {
    return window?.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <Background color="bg-gray-100">
      <Section isFullWidth={true}>
        <div
          className={`absolute z-30 w-full transition duration-300 ease-in-out lg:fixed lg:top-0 lg:bg-black-60`}
        >
          <div className="mx-auto max-w-screen-xl justify-center">
            <div className="mx-4 flex h-20 items-center justify-between">
              <a
                href="#"
                className="mr-4 flex shrink-0 items-center text-gray-400"
              >
                <Logo xl={width > 1024} />
              </a>
              <div className="h-full">
                <nav className="hidden h-full pl-6 lg:flex">
                  <ul className="flex grow list-none flex-wrap items-center justify-center">
                    {HEADER_LINKS.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => setActive(item.href)}
                        className={`h-full ${
                          active === item.href
                            ? 'borer-b-white  border-b-2 text-white'
                            : 'text-gray-500'
                        }`}
                      >
                        <Link
                          href={item.href}
                          className="flex h-full cursor-pointer items-center px-4 py-5 text-sm font-medium transition duration-150 ease-in-out hover:text-[#FFFFFF]"
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <MobileMenu links={HEADER_LINKS} />
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Header };
