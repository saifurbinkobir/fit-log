"use client";
import React, { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { PlanContext } from "@/context/PlanContext";
import { toast } from "react-toastify";
const SaveForLaterButton = ({ workout }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(PlanContext);

  const handleSaveForLater = () => {
    const exists = savedWorkouts.some((item) => Number(item.id) === Number(workout.id));
    if (exists) {
      toast.warn("Already Added in your Saved list");
      return;
    }
    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success(`Saved ${workout.name} for later!`);
  };

  return (
    <button
      onClick={handleSaveForLater}
      className="w-full md:w-auto justify-center py-3 px-6 rounded-xl border border-[#374151] hover:border-[#ffffff] text-white text-[14px] font-semibold font-inter flex items-center gap-2.5 cursor-pointer"
    >
      <CiBookmark /> Save for later
    </button>
  );
};

export default SaveForLaterButton;
