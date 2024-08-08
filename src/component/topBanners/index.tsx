import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { arrow } from '@/assets/svgs';
import { TOP_BANNERS_LARGE, TOP_BANNERS_SMALL } from '@/constants';
import useWindowSize from '@/hooks/useWindowSize';
import type { BannerInfo } from '@/types';
import { multipleArray } from '@/utils/funtion';

import { Section } from '../layouts/Section';

const TopBanners = () => {
  const [data, setData] = useState<BannerInfo[]>([]);
  const { width } = useWindowSize();

  useEffect(() => {
    setData(
      width > 640
        ? multipleArray(TOP_BANNERS_LARGE, 3)
        : multipleArray(TOP_BANNERS_SMALL, 3),
    );
  }, [width]);
  return (
    <Section
      yPadding="pt-20 pb-32"
      className="relative bg-transparent sm:bg-[#03827E]"
      isFullWidth={true}
    >
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="swiper_custom"
      >
        {data.map((banner, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <Image
              loading="lazy"
              src={banner.image}
              alt={banner.alt}
              className="max-h-[576px] w-full object-cover lg:max-w-[1400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-10 z-20 flex w-full flex-col items-center justify-center gap-3 text-white sm:hidden">
        <h1 className="text-3xl font-light">Chicky Run</h1>
        <a href="#" className="flex cursor-pointer gap-2 hover:underline">
          <h2 className="text-base font-extralight">Game Details</h2>
          <Image loading="lazy" src={arrow} alt={'arrow'} className="" />
        </a>
      </div>
    </Section>
  );
};

export { TopBanners };
