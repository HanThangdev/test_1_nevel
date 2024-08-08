import { CardHottestCategory } from './card';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import {navigate_right } from "@/assets/svgs";
import Image from "next/image";
const HosttestGame = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  
  const swiperRef = useRef<SwiperType>();
  const { width } = useWindowSize();
  return(
 
   <div className='p-5 lg:p-0 "'>
      <div className="flex justify-between pb-5">
        <h1 className="text-2xl font-medium text-black uppercase lg:capitalize">
          Hottest Category
        </h1>
        <div>
          <button
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
             <Image alt="navigate_right" src={navigate_right} className="rotate-180"/>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image alt="navigate_right" src={navigate_right} />
          </button>
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
        className="swiper_navigation_custom lg:max-w-[1000px]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <CardHottestCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardHottestCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardHottestCategory />
        </SwiperSlide>
        <SwiperSlide>
          <CardHottestCategory />
        </SwiperSlide>
      </Swiper>
    </div>
)};

export { HosttestGame };
