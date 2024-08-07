import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from './Logo';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [top, setTop] = useState<boolean>(true);
  const [active, setActive] = useState('/');

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

  const links = [
    {
      text: 'HOME',
      href: '/',
      key: 'HOME',
    },
    {
      text: 'GAMES',
      href: '/games',
      key: 'GAMES',
    },
    {
      text: 'NEWS',
      href: '/news',
      key: 'NEWS',
    },
    {
      text: 'MATH',
      href: '/math',
      key: 'MATH',
    },
    {
      text: 'COMPANY',
      href: '/company',
      key: 'COMPANY',
    },
    {
      text: 'EVENTS',
      href: '/events',
      key: 'EVENTS',
    },
    {
      text: 'PARTNERS',
      href: '/partners',
      key: 'PARTNERS',
    },
  ];

  return (
    <Background color="bg-gray-100">
      <Section isFullWidth={true}>
        <header
          className={`fixed top-0 z-30 w-full transition duration-300 ease-in-out lg:bg-black-60`}
        >
          <div className="mx-auto max-w-screen-xl justify-center">
            <div className="mx-4 flex h-20 items-center justify-between">
              <a
                href="#"
                className="mr-4 flex shrink-0 items-center text-gray-400"
              >
                <Logo xl />
              </a>
              <div className="h-full">
                <nav className="hidden h-full pl-6 lg:flex">
                  <ul className="flex grow list-none flex-wrap items-center justify-center">
                    {links.map((item, index) => (
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
              <MobileMenu links={links} />
            </div>
          </div>
        </header>
      </Section>
    </Background>
  );
};

export { Header };
