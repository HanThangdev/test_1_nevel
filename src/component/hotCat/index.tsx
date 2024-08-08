import Image from 'next/image';
import React, { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { navigate_right } from '@/assets/svgs';
import { DATA_HOT_CAT } from '@/constants';
import useWindowSize from '@/hooks/useWindowSize';
import { multipleArray } from '@/utils/funtion';

import { CardHotCat } from './card';

const HottestGame = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const swiperRef = useRef<SwiperType>();
  const { width } = useWindowSize();

  return (
    <div className='" p-5 lg:p-0'>
      <div className="flex justify-between pb-5">
        <h1 className="text-2xl font-medium uppercase text-black lg:capitalize">
          Hottest Category
        </h1>
        <div className="hidden lg:block">
          <button
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image
              loading="lazy"
              alt="navigate_right"
              src={navigate_right}
              className="rotate-180"
            />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image loading="lazy" alt="navigate_right" src={navigate_right} />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={width > 1024 ? 2 : 1}
        navigation={
          width > 1024
            ? {
                // Both prevEl & nextEl are null at render so this does not work
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }
            : false
        }
        modules={width > 1024 ? [Navigation] : [Pagination]}
        className="swiper_custom !m-0 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {multipleArray(DATA_HOT_CAT, 3).map((item, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <CardHotCat data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { HottestGame };
