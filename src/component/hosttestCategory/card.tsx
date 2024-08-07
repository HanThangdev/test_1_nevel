import Image from 'next/image';

import { avatar_hotgame_1, hotgame_1 } from '@/assets/images';

const CardHottestCategory = () => (
  <div className=" max-w-[490px]">
    <Image
      src={hotgame_1}
      alt={'hotgame_1'}
      className="min-w-[343px] rounded-t-2xl pb-8"
    />
    <div className="flex justify-between">
      <Image
        src={avatar_hotgame_1}
        alt={'avatar_hotgame_1'}
        className="object-contain"
        width={90}
        height={90}
      />
      <div>
        <h2 className="text-xl font-semibold leading-10">Mahjong Ways</h2>
        <p>
          4TECH™ has just launched their very <br />
          first Mahjong inspired slot machine gam…
        </p>
      </div>
      <div className="flex items-center">
        <button className="h-[28px] w-[75px] rounded-md  border-2 border-[#CCCC] font-semibold text-black">
          View
        </button>
      </div>
    </div>
  </div>
);

export { CardHottestCategory };
