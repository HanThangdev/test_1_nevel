import Image from 'next/image';
import { useState } from 'react';

import { all_game, filter, home_page, search, time_line } from '@/assets/svgs';

import { HottestGame } from '../hotCat';
import { HotGame } from '../hotGame';
import { Section } from '../layouts/Section';

const Features = () => {
  const [active, setActive] = useState<string>('home');

  return (
    <Section className="!w-full lg:py-20">
      <div className="gap-5 lg:flex lg:px-4">
        <ul className="flex basis-[10%] flex-row justify-between border-b border-[#D9D9D9] pr-8 font-semibold text-black lg:col-span-1 lg:flex-col lg:justify-start lg:border-none">
          <li className="hidden cursor-pointer gap-0 border-b border-b-[#D9D9D9] py-3 text-xs lg:flex lg:gap-2 lg:text-sm ">
            <label
              htmlFor="search"
              className="opacity-20 group-focus-within:opacity-100"
            >
              <Image alt="Search" src={search} className="" />
            </label>
            <input
              id="search"
              placeholder="Search"
              className="focus:outline-none"
              name="search"
            />
          </li>
          <li
            onClick={() => setActive('home')}
            className={`hidden cursor-pointer gap-0 py-3 text-xs lg:flex  lg:gap-2 lg:text-sm ${active === 'home' ? '' : 'opacity-20'}`}
          >
            <Image alt="Games Home" src={home_page} /> <span> Games Home</span>
          </li>
          <li
            onClick={() => setActive('home')}
            className={`flex min-w-[70px] cursor-pointer flex-col items-center gap-0 py-3 text-xs uppercase lg:hidden lg:flex-row lg:gap-2 lg:text-sm lg:capitalize ${active === 'home' ? ' border-b border-b-[#9F9F9F] lg:border-none' : 'opacity-20'}`}
          >
            <Image alt="Games Home" src={home_page} /> <span> Home</span>
          </li>
          <li
            onClick={() => setActive('timeline')}
            className={`flex min-w-[70px] cursor-pointer flex-col items-center gap-0 py-3 text-xs uppercase lg:flex-row lg:gap-2 lg:text-sm lg:capitalize ${active === 'timeline' ? 'border-b border-b-[#9F9F9F] lg:border-none' : 'opacity-20'}`}
          >
            <Image alt="Time line" src={time_line} /> <span> Timeline</span>
          </li>
          <li
            onClick={() => setActive('allgame')}
            className={`flex min-w-[70px] cursor-pointer flex-col items-center gap-0 py-3 text-xs uppercase lg:flex-row lg:gap-2 lg:text-sm lg:capitalize ${active === 'allgame' ? 'border-b border-b-[#9F9F9F] lg:border-none' : 'opacity-20'}`}
          >
            <Image alt="All Games" src={all_game} />{' '}
            <span className="text-center align-middle"> All Games</span>
          </li>
          <li
            onClick={() => setActive('search')}
            className={`flex min-w-[70px] cursor-pointer flex-col items-center gap-0 py-3 text-xs uppercase lg:hidden lg:flex-row lg:gap-2 lg:text-sm lg:capitalize ${active === 'search' ? 'border-b border-b-[#9F9F9F] lg:border-none' : 'opacity-20'}`}
          >
            <Image alt="Search" src={search} /> <span> Search</span>
          </li>
          <li
            onClick={() => setActive('filter')}
            className={`flex min-w-[70px] cursor-pointer flex-col items-center gap-0 border-l !border-l-[#D9D9D9] py-3 text-xs uppercase lg:hidden  lg:flex-row lg:gap-2 lg:text-sm lg:capitalize ${active === 'filter' ? 'border-b border-b-[#9F9F9F] lg:border-none' : 'opacity-20'}`}
          >
            <Image alt="Filter" src={filter} /> <span> Filter</span>
          </li>
        </ul>
        <div className="basis-[90%]">
          <HotGame />
          <HottestGame />
        </div>
      </div>
    </Section>
  );
};

export { Features };
