import Image from 'next/image';

import type { HotGameInfo } from '@/types';

interface ICardHotGameProps {
  data: HotGameInfo;
}
const CardHotGame = ({ data }: ICardHotGameProps) => (
  <div className="flex flex-col items-center rounded-2xl bg-[#C58F03] sm:max-w-[490px] sm:bg-white">
    <Image
      loading="lazy"
      src={data.coverImg}
      alt={data.name}
      className=" w-full rounded-t-2xl sm:pb-8"
    />
    <div className=" text-white  sm:text-black">
      <div className="m-6 flex items-center justify-between gap-3 lg:mx-0">
        <div>
          <Image
            loading="lazy"
            src={data.avatarImg}
            alt={data.name}
            className="w-14 basis-1/5 object-cover sm:w-24"
          />
        </div>
        <div className="basis-[70%]">
          <h1 className="text-xl font-semibold leading-10">{data.name}</h1>
          <h3 className="text-sm font-thin">{data.description}</h3>
        </div>
        <div className="hidden items-center sm:flex">
          <button className="h-[28px] w-[75px] rounded-md  border-2 border-[#CCCC] font-semibold text-black">
            View
          </button>
        </div>
      </div>
      <div className="m-6 flex items-center justify-between sm:hidden">
        <div className="flex flex-col">
          <span>{data.volatility}</span>
          <span className="font-thin">Volatility</span>
        </div>
        <div className="flex flex-col">
          <span>{data.RTP}%</span>
          <span className="font-thin">RTP</span>
        </div>
        <div className="flex flex-col">
          <span>x{data.maxWin}</span>
          <span className="font-thin">Maximum Win</span>
        </div>
      </div>
    </div>
  </div>
);

export { CardHotGame };
