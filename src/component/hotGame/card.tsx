import Image from "next/image";

import { avatar_hotgame_1, hotgame_1 } from "@/assets/images";

const CardHotGame = () => (
  <div className="lg:max-w-[490px]">
    <Image
      src={hotgame_1}
      alt={"hotgame_1"}
      className="min-w-[343px] rounded-t-2xl pb-8"
    />
    <div className="flex justify-between gap-3">
      <Image
        src={avatar_hotgame_1}
        alt={"avatar_hotgame_1"}
        className="object-contain basis-[20%]"
        width={90}
        height={90}
      />
      <div className="basis-[70%]">
        <h2 className="text-xl font-semibold leading-10">Mahjong Ways</h2>
        <p>
          4TECH™ has just launched their very <br />
          first Mahjong inspired slot machine gam…
        </p>
      </div>
      <div className="items-center hidden lg:flex">
        <button className="h-[28px] w-[75px] rounded-md  border-2 border-[#CCCC] font-semibold text-black">
          View
        </button>
      </div>
    </div>
    <div className="items-center flex lg:hidden justify-between">
      <div className="flex flex-col">
        <span>MEDIUM</span>
        <span>Volatility</span>
      </div>
      <div className="flex flex-col">
        <span>95.01%</span>
        <span>RTP</span>
      </div>
      <div className="flex flex-col">
        <span>x5000</span>
        <span>Maximum Win</span>
      </div>
    </div>
  </div>
);

export { CardHotGame };
