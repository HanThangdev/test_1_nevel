import type { StaticImageData } from 'next/image';

interface MenuTypes {
  text: string;
  href: string;
  key: string;
}

interface HotGameInfo {
  id: string;
  name: string;
  description: string;
  coverImg: StaticImageData;
  avatarImg: StaticImageData;
  volatility: string;
  RTP: number;
  maxWin: number;
}

interface HottestCatInfo {
  name: string;
  description: string;
  bg1: StaticImageData;
  bg2: StaticImageData;
  bg3: StaticImageData;
  bg4: StaticImageData;
  cover: StaticImageData;
  icon: any;
  bgColor: string;
}

interface BannerInfo {
  image: StaticImageData;
  alt: string;
  bg_color: string;
}

export type { BannerInfo, HotGameInfo, HottestCatInfo, MenuTypes };
