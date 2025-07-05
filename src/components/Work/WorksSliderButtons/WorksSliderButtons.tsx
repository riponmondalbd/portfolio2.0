"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
export default function WorksSliderButtons() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-start">
      <button
        className="bg-amber-200 hover:bg-amber-300 text-[#1c1b22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className="bg-amber-200 hover:bg-amber-300 text-[#1c1b22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}
