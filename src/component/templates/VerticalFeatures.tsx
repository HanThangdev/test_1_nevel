import Image from 'next/image';

import { all_game, home_page, search, time_line } from '@/assets/svgs';

import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <div>
      <div>
        <ul>
          <li className="flex">
            <Image alt="Search" src={search} /> <span> Search</span>
          </li>
          <li className="flex">
            <Image alt="Games Home" src={home_page} /> <span> Games Home</span>
          </li>
          <li className="flex">
            <Image alt="Time line" src={time_line} /> <span> Time line</span>
          </li>
          <li className="flex">
            <Image alt="All Games" src={all_game} /> <span> All Games</span>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  </Section>
);

export { VerticalFeatures };
