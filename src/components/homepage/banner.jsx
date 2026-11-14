import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaDumbbell } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div className="container mx-auto mt-12 mb-16 lg:px-0 px-4">
      <div className="p-8 md:p-14 bg-[#15171D] rounded-2xl border border-[#222630] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Text Area */}
        <div className="max-w-xl">
          <p className="text-[#C2F800] font-bold text-inter text-[11px] uppercase">
            WORKOUT LIBRARY
          </p>
          <h2 className="text-white text-[38px] md:text-[60px] font-extrabold font-oswald my-5">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>
          <p className="text-[#9CA3AF] font-inter text-[16px] mb-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link href="/#workouts" className="bg-[#C2F800] text-[#000000] text-[12px] font-bold font-inter py-3 px-6 uppercase rounded-md hover:bg-[#A8E400] transition duration-300 inline-flex items-center gap-2">
            <FaDumbbell /> BROWSE WORKOUTS
          </Link>
        </div>
        {/* Image Area */}
        <div className="flex justify-center">
          <Image
            src={bannerImg}
            alt="Banner Image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
