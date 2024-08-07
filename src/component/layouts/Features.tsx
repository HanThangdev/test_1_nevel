import Image from 'next/image';

import { all_game, filter, home_page, search, time_line } from '@/assets/svgs';

import { HosttestGame } from '../hosttestCategory';
import { HotGame } from '../hotGame';
import { Section } from '../layout/Section';

const Features = () => {
  return (
    <Section className="px-5 lg:py-20">
      <div className="gap-5 lg:flex">
        <ul className="mr-8 flex basis-[15%] flex-row justify-evenly text-sm font-semibold text-black lg:col-span-1 lg:flex-col">
          <li className="hidden gap-2 border-b border-b-[#D9D9D9] py-3 lg:flex ">
            <Image alt="Search" src={search} />{' '}
            <input placeholder="Search" className="focus:outline-none" />
          </li>
          <li className="hidden gap-2 border-b border-b-[#D9D9D9] py-3 lg:flex ">
            <Image alt="Games Home" src={home_page} /> <span> Games Home</span>
          </li>
          <li className="flex min-w-[70px] flex-col items-center gap-2 py-3 uppercase lg:flex-row lg:capitalize">
            <Image alt="Games Home" src={home_page} /> <span> Home</span>
          </li>
          <li className="flex min-w-[70px] flex-col items-center gap-2 py-3 uppercase lg:flex-row lg:capitalize">
            <Image alt="Time line" src={time_line} /> <span> Timeline</span>
          </li>
          <li className="flex min-w-[70px] flex-col items-center gap-2 py-3 uppercase lg:flex-row lg:capitalize">
            <Image alt="All Games" src={all_game} />{' '}
            <span className="align-middle"> All Games</span>
          </li>
          <li className="flex min-w-[70px] flex-col items-center gap-2 py-3 uppercase lg:hidden lg:flex-row lg:capitalize">
            <Image alt="Search" src={search} /> <span> Search</span>
          </li>
          <li className="flex min-w-[70px] flex-col items-center gap-2 py-3 uppercase lg:hidden lg:flex-row lg:capitalize">
            <Image alt="Filter" src={filter} /> <span> Filter</span>
          </li>
        </ul>
        <div className="basis-4/5">
          <HotGame />
          <HosttestGame />
        </div>
      </div>
    </Section>
  );
};

export { Features };
