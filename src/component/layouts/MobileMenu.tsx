'use client';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useRef } from 'react';

import { close, menu } from '@/assets/svgs';
import type { MenuTypes } from '@/types';

interface IMobileMenuProps {
  links: MenuTypes[];
  mobileNavOpen: boolean;
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
}
export default function MobileMenu({
  links,
  mobileNavOpen,
  setMobileNavOpen,
}: IMobileMenuProps) {
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="flex lg:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <Image
          loading="lazy"
          src={mobileNavOpen ? close : menu}
          alt="menu"
          className="size-[28px] object-contain"
        />
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-50 size-full h-screen overflow-hidden bg-[#158C84] pb-16"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex flex-col justify-between">
            <ul className="list-none px-5 py-4">
              {links.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex w-full px-5 py-4 font-medium text-[#D1D2D5] hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
