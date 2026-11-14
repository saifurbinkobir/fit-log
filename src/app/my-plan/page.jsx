"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("today");
  return (
    <div className="container mx-auto mb-16 lg:px-0 px-4">
      <div className="mt-10 mb-6">
        <h1 className="text-white text-[36px] font-bold font-oswald">
          MY PLAN
        </h1>
        <p className="text-[#8A92A0] font-inter text-[14px] mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="bg-[#15171d] border border-[#252830] rounded-2xl p-6 mt-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#252830]">
        <div className="pb-4 md:pb-0 md:pr-6">
          <p className="text-[#8A92A0] font-inter text-[12px]">Exercises</p>
          <p className="text-[#CCFF00] font-oswald text-[32px] font-bold mt-1">
            2
          </p>
        </div>
        <div className="py-4 md:py-0 md:px-6">
          <p className="text-[#8A92A0] font-inter text-[12px]">Minutes</p>
          <p className="text-white font-oswald text-[32px] font-bold mt-1">
            23
          </p>
        </div>
        <div className="pt-4 md:pt-0 md:pl-6">
          <p className="text-[#8A92A0] font-inter text-[12px]">Calories</p>
          <p className="text-white font-oswald text-[32px] font-bold mt-1">
            190
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-8">
        <div className="bg-[#15171d] border border-[#252830] rounded-xl p-1 flex items-center gap-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`${
              activeTab === "today"
                ? "bg-[#252830] text-white"
                : "text-[#8A92A0]"
            } font-inter text-[13px] font-medium px-4 py-1.5 rounded-lg`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`${
              activeTab === "saved"
                ? "bg-[#252830] text-white"
                : "text-[#8A92A0]"
            } font-inter text-[13px] font-medium px-4 py-1.5 rounded-lg`}
          >
            Saved
          </button>
        </div>
      </div>

      {/* Conditionally Render Content */}
      {activeTab === "today" && <div>Content for Today Plan goes here...</div>}

      {activeTab === "saved" && (
        <div>Content for Saved workouts goes here...</div>
      )}

      {/* <div className="border border-dashed border-[#252830] rounded-2xl py-24 px-4 mt-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-white font-oswald text-[20px] font-bold">
          NOTHING HERE YET
        </h2>
        <p className="text-[#8A92A0] font-inter text-[13px] mt-1.5">
          Browse the library and add a lift to get today moving.
        </p>
        <Link href="/" className="bg-[#C2F800] text-black font-inter text-[13px] font-bold px-6 py-2.5 rounded-full mt-5">
          Go to workouts
        </Link>
      </div> */}
    </div>
  );
};

export default MyPlanPage;
