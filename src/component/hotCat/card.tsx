import Image from 'next/image';

import type { HottestCatInfo } from '@/types';

interface ICardHotCatProps {
  data: HottestCatInfo;
}
const CardHotCat = ({ data }: ICardHotCatProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-3xl bg-stone-200 p-6 sm:max-w-[490px]">
      <div className="grid-cols grid gap-2">
        <div
          style={{
            backgroundColor: data.bgColor,
          }}
          className={`grid-cols gap-6 rounded-2xl p-2 text-white md:p-4`}
        >
          <div>
            <Image
              src={data.icon}
              alt={'icon'}
              className="text-xs md:text-sm"
            />
          </div>
          <h2 className="text-sm md:text-xl">{data.name}</h2>
          <h4 className="text-xs font-thin md:text-sm">{data.description}</h4>
        </div>
        <div className="grid grid-cols-2 items-end gap-2">
          <Image
            src={data.bg1}
            alt={'hottest_cat_2'}
            className="w-full object-cover"
          />{' '}
          <Image
            src={data.bg2}
            alt={'hottest_cat_3'}
            className="w-full object-cover"
          />{' '}
        </div>
      </div>
      <div className="grid-cols grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={data.bg3}
            alt={'hottest_cat_4'}
            className="w-full object-cover"
          />{' '}
          <Image
            src={data.bg4}
            alt={'hottest_cat_5'}
            className="w-full object-cover"
          />{' '}
        </div>
        <div>
          <Image
            src={data.cover}
            alt={'hotgame_1'}
            className="rounded-2xl object-cover"
          />{' '}
        </div>
      </div>
    </div>
  );
};

export { CardHotCat };
