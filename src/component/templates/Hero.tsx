import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { hero_1 } from '@/assets/images';
import { close, menu } from '@/assets/svgs';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [active, setActive] = useState('/');
  const [toggle, setToggle] = useState(false);

  const links = [
    {
      text: 'HOME',
      className: 'relative inline-block text-[1rem]',
      href: '/',
      key: 'HOME',
    },
    {
      text: 'GAMES',
      className: 'relative inline-block text-[1rem]',
      href: '/games',
      key: 'GAMES',
    },
    {
      text: 'NEWS',
      className: 'relative inline-block text-[1rem]',
      href: '/news',
      key: 'NEWS',
    },
    {
      text: 'MATH',
      className: 'relative inline-block text-[1rem]',
      href: '/math',
      key: 'MATH',
    },
    {
      text: 'COMPANY',
      className: 'relative inline-block text-[1rem]',
      href: '/company',
      key: 'COMPANY',
    },
    {
      text: 'EVENTS',
      className: 'relative inline-block text-[1rem]',
      href: '/events',
      key: 'EVENTS',
    },
    {
      text: 'PARTNERS',
      className: 'relative inline-block text-[1rem]',
      href: '/partners',
      key: 'PARTNERS',
    },
  ];

  const banners = [
    {
      image: hero_1,
      alt: 'Hero 1',
      bg_color: '#03827E',
    },
    {
      image: hero_1,
      alt: 'Hero 1',
      bg_color: '#03827E',
    },
    {
      image: hero_1,
      alt: 'Hero 1',
      bg_color: '#03827E',
    },
    {
      image: hero_1,
      alt: 'Hero 1',
      bg_color: '#03827E',
    },
  ];
  return (
    <Background color="bg-gray-100">
      <Section className="header_color fixed z-10 order-3 w-full">
        <NavbarTwoColumns logo={<Logo xl />}>
          <ul className=" hidden h-[90px] list-none sm:flex">
            {links.map((nav, index) => (
              <li
                key={nav.key}
                className={`font-poppins flex h-full cursor-pointer items-center justify-center text-[16px] font-normal ${
                  active === nav.href
                    ? 'borer-b-white  border-b-[2px] text-white'
                    : 'text-gray-500'
                } ${index === links.length - 1 ? 'mr-0' : 'mr-10'}`}
                onClick={() => setActive(nav.href)}
              >
                <a href={nav.href}>{nav.text}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center sm:hidden">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="size-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } sidebar absolute right-0 top-10 my-2 w-full bg-black p-6`}
            >
              <ul className="flex flex-1 list-none flex-col items-start justify-end">
                {links.map((nav, index) => (
                  <li
                    key={nav.key}
                    className={`font-poppins cursor-pointer text-[16px] font-medium ${
                      active === nav.href ? 'text-white' : 'text-dimWhite'
                    } ${index === links.length - 1 ? 'mb-0' : 'mb-4'}`}
                    onClick={() => setActive(nav.key)}
                  >
                    <Link href={nav.href}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NavbarTwoColumns>
      </Section>

      <Section
        yPadding="pt-20 pb-32"
        className="relative bg-[#03827E]"
        isFullWidth={true}
      >
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Image
                src={banner.image}
                alt={banner.alt}
                width={1920}
                height={900}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Background>
  );
};

export { Hero };
