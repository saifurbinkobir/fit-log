"use client";
import React, { useContext } from "react";
import { GrPlan } from "react-icons/gr";
import { PlanContext } from "@/context/PlanContext";
import { toast } from "react-toastify";

const AddToTodayButton = ({ workout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(PlanContext);

  const handleAddToToday = () => {
    const exists = todaysPlan.some((item) => Number(item.id) === Number(workout.id));
    if (exists) {
      toast.warn("Already Added in Today's Plan");
      return;
    }
    setTodaysPlan([...todaysPlan, workout]);
    toast.success(`Added ${workout.name} to today's plan!`);
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