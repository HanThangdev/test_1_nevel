import Image from "next/image";

import { all_game, filter, home_page, search, time_line } from "@/assets/svgs";

import { HosttestGame } from "../hosttestCategory";
import { HotGame } from "../hotGame";
import { Section } from "./Section";
import { useState } from "react";

const Features = () => {
  const [active, setActive] = useState<string>("home");

  return (
    <Section className="lg:py-20 !w-full">
      <div className="gap-5 lg:flex">
        <ul className="lg:mr-8 flex basis-[15%] flex-row justify-between lg:justify-start font-semibold text-black lg:col-span-1 lg:flex-col border-b border-[#D9D9D9] lg:border-none">
          <li className="cursor-pointer hidden gap-0 lg:gap-2 border-b border-b-[#D9D9D9] py-3 lg:flex text-xs lg:text-sm ">
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
            onClick={() => setActive("home")}
            className={`cursor-pointer hidden gap-0 lg:gap-2 py-3 lg:flex  text-xs lg:text-sm ${active === "home" ? "" : "opacity-20"}`}
          >
            <Image alt="Games Home" src={home_page} /> <span> Games Home</span>
          </li>
          <li
            onClick={() => setActive("home")}
            className={`cursor-pointer flex min-w-[70px] flex-col items-center gap-0 lg:gap-2 py-3 uppercase lg:flex-row lg:capitalize lg:hidden text-xs lg:text-sm ${active === "home" ? " border-b border-b-[#9F9F9F] lg:border-none" : "opacity-20"}`}
          >
            <Image alt="Games Home" src={home_page} /> <span> Home</span>
          </li>
          <li
            onClick={() => setActive("timeline")}
            className={`cursor-pointer flex min-w-[70px] flex-col items-center gap-0 lg:gap-2 py-3 uppercase lg:flex-row lg:capitalize text-xs lg:text-sm ${active === "timeline" ? "border-b border-b-[#9F9F9F] lg:border-none" : "opacity-20"}`}
          >
            <Image alt="Time line" src={time_line} /> <span> Timeline</span>
          </li>
          <li
            onClick={() => setActive("allgame")}
            className={`cursor-pointer flex min-w-[70px] flex-col items-center gap-0 lg:gap-2 py-3 uppercase lg:flex-row lg:capitalize text-xs lg:text-sm ${active === "allgame" ? "border-b border-b-[#9F9F9F] lg:border-none" : "opacity-20"}`}
          >
            <Image alt="All Games" src={all_game} />{" "}
            <span className="align-middle text-center"> All Games</span>
          </li>
          <li
            onClick={() => setActive("search")}
            className={`cursor-pointer flex min-w-[70px] flex-col items-center gap-0 lg:gap-2 py-3 uppercase lg:hidden lg:flex-row lg:capitalize text-xs lg:text-sm ${active === "search" ? "border-b border-b-[#9F9F9F] lg:border-none" : "opacity-20"}`}
          >
            <Image alt="Search" src={search} /> <span> Search</span>
          </li>
          <li
            onClick={() => setActive("filter")}
            className={`cursor-pointer border-l !border-l-[#D9D9D9] flex min-w-[70px] flex-col items-center gap-0 lg:gap-2 py-3 uppercase lg:hidden  text-xs lg:text-sm lg:flex-row lg:capitalize ${active === "filter" ? "border-b border-b-[#9F9F9F] lg:border-none" : "opacity-20"}`}
          >
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
