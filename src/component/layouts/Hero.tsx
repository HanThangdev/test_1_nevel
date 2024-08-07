import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { hero_1 } from '@/assets/images';

import { Section } from '../layout/Section';

const Hero = () => {
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
          <SwiperSlide key={index} className="!flex justify-center">
            <Image
              src={banner.image}
              alt={banner.alt}
              className="max-h-[576px] max-w-[1400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export { Hero };
