import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { navigate_right } from '@/assets/svgs';
import { HOT_GAME_LARGE_SCREEN, HOT_GAME_SMALL_SCREEN } from '@/constants';
import useWindowSize from '@/hooks/useWindowSize';
import type { HotGameInfo } from '@/types';
import { multipleArray } from '@/utils/funtion';

import { CardHotGame } from './card';

const HotGame = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = useRef<SwiperType>();
  const [data, setData] = useState<HotGameInfo[]>([]);
  const { width } = useWindowSize();

  useEffect(() => {
    setData(
      width > 500
        ? multipleArray(HOT_GAME_LARGE_SCREEN, 3)
        : multipleArray(HOT_GAME_SMALL_SCREEN, 3),
    );
  }, [width]);

  const [value, setValue] = useState(null);

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="w-full p-5 lg:p-0">
      <div className="flex justify-between pb-5">
        <h1 className="text-2xl font-medium uppercase text-black lg:capitalize">
          Hot Game
        </h1>
        <div>
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
          <div className="block lg:hidden">
            <div className="w-40 border">
              <Datepicker
                value={value}
                onChange={handleValueChange}
                showShortcuts={true}
                placeholder="Release Date"
              />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={width > 1024 ? 2 : 1}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        className="swiper_navigation_custom !m-0 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <CardHotGame data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { HotGame };
