import {
  avatar_hotgame_1,
  avatar_hotgame_2,
  avatar_hotgame_3,
  hero_1,
  hero_2,
  hotgame_1,
  hotgame_2,
  hotgame_3,
  hottest_cat_1,
  hottest_cat_2,
  hottest_cat_3,
  hottest_cat_4,
  hottest_cat_5,
  hottest_cat_6,
} from '@/assets/images';
import { music_icon, poker_icon } from '@/assets/svgs';
import { generateUniqueId } from '@/utils/funtion';

const DATA_HOT_CAT = [
  {
    name: 'Music',
    description:
      'Music makes everything better, and these games will grove to it!',
    bg1: hottest_cat_1,
    bg2: hottest_cat_2,
    bg3: hottest_cat_3,
    bg4: hottest_cat_4,
    cover: hottest_cat_6,
    icon: music_icon,
    bgColor: '#5C6EFF',
  },
  {
    name: 'Table Games',
    description: 'The classic table games for the gentlemen and ladies.',
    bg1: hottest_cat_1,
    bg2: hottest_cat_2,
    bg3: hottest_cat_3,
    bg4: hottest_cat_4,
    cover: hottest_cat_5,
    icon: poker_icon,
    bgColor: '#03837E',
  },
];

const HOT_GAME_LARGE_SCREEN = [
  {
    id: generateUniqueId(),
    name: 'Mahjong Ways',
    description:
      '4TECH™ has just launched their very first Mahjong inspired slot machine gam…',
    coverImg: hotgame_1,
    avatarImg: avatar_hotgame_1,
    volatility: 'MEDIUM',
    RTP: 95.01,
    maxWin: 5000,
  },
  {
    id: generateUniqueId(),
    name: 'Wild Bandito',
    description:
      'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…',
    coverImg: hotgame_2,
    avatarImg: avatar_hotgame_2,
    volatility: 'MEDIUM',
    RTP: 95.01,
    maxWin: 5000,
  },
];

const HOT_GAME_SMALL_SCREEN = [
  {
    id: generateUniqueId(),
    name: 'Tree Of Fortune',
    description: 'Legend has it that a farmer was granted a seed from a deity.',
    coverImg: hotgame_3,
    avatarImg: avatar_hotgame_3,
    volatility: 'MEDIUM',
    RTP: 95.01,
    maxWin: 5000,
  },
];

const FOOTER_LINKS = [
  {
    title: 'Web map',
    links: [
      {
        name: 'Home',
        link: '#',
      },
      {
        name: 'Games',
        link: '#',
      },
      {
        name: 'News',
        link: '#',
      },
      {
        name: 'Math',
        link: '#',
      },
      {
        name: 'Company',
        link: '#',
      },
      {
        name: 'Events',
        link: '#',
      },
      {
        name: 'Partners',
        link: '#',
      },
    ],
  },
  {
    title: 'About us',
    links: [
      {
        name: 'Listening',
        link: '#',
      },
      {
        name: 'Certification',
        link: '#',
      },
      {
        name: 'Responsible Gaming',
        link: '#',
      },
      {
        name: 'Exhibitions',
        link: '#',
      },
      {
        name: 'Copyright Protection',
        link: '#',
      },
      {
        name: 'Privacy Policy',
        link: '#',
      },
    ],
  },
  {
    title: 'Events',
    links: [
      {
        name: 'PG ICE 2017',
        link: '#',
      },
      {
        name: 'PG ICE 2018',
        link: '#',
      },
      {
        name: 'PG ICE 2019',
        link: '#',
      },
    ],
  },
  {
    title: 'Out partners',
    links: [
      {
        name: 'Relax Gaming',
        link: '#',
      },
      {
        name: 'Leander Games',
        link: '#',
      },
    ],
  },
];

const HEADER_LINKS = [
  {
    text: 'HOME',
    href: '/',
    key: 'HOME',
  },
  {
    text: 'GAMES',
    href: '/',
    key: 'GAMES',
  },
  {
    text: 'NEWS',
    href: '/',
    key: 'NEWS',
  },
  {
    text: 'MATH',
    href: '/',
    key: 'MATH',
  },
  {
    text: 'COMPANY',
    href: '/',
    key: 'COMPANY',
  },
  {
    text: 'EVENTS',
    href: '/',
    key: 'EVENTS',
  },
  {
    text: 'PARTNERS',
    href: '/',
    key: 'PARTNERS',
  },
];

const TOP_BANNERS_LARGE = [
  {
    image: hero_1,
    alt: 'Hero 1',
    bg_color: '#03827E',
  },
];

const TOP_BANNERS_SMALL = [
  {
    image: hero_2,
    alt: 'Hero 1',
    bg_color: '#03827E',
  },
];

export {
  DATA_HOT_CAT,
  FOOTER_LINKS,
  HEADER_LINKS,
  HOT_GAME_LARGE_SCREEN,
  HOT_GAME_SMALL_SCREEN,
  TOP_BANNERS_LARGE,
  TOP_BANNERS_SMALL,
};
