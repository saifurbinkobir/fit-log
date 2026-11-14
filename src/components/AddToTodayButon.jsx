"use client";
import React, { useContext } from "react";
import { GrPlan } from "react-icons/gr";
import { PlanContext } from "@/context/PlanContext";

const AddToTodayButton = ({ workout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(PlanContext);

  const handleAddToToday = () => {
    setTodaysPlan([...todaysPlan, workout]);
    alert(`Added ${workout.name} to today's plan!`);
  };

  return (
    <button
      onClick={handleAddToToday}
      className="w-full md:w-auto justify-center py-3 px-6 rounded-xl bg-[#CCFF00] hover:bg-[#A8E400] text-[#0F1115] text-[14px] font-semibold font-inter flex items-center gap-2.5 cursor-pointer"
    >
      <GrPlan /> Add to today&apos;s plan
    </button>
  );
};

export default AddToTodayButton;