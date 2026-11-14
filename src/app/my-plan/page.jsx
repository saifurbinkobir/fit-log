"use client";
import { useState, useContext, useEffect } from "react";
import React from "react";
import { PlanContext } from "@/context/PlanContext";
import TodaysPlanCard from "@/components/TodaysPlanCard";
import SavedPlanCard from "@/components/SavedPlanCard";
import EmptyPlanCard from "@/components/EmptyPlanCard";
import { toast } from "react-toastify";
import { FaChevronDown } from "react-icons/fa6";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("today");
  const {
    todaysPlan,
    savedWorkouts,
    markAsDone,
    removeFromToday,
    removeFromSaved,
  } = useContext(PlanContext);

  // For Sorting
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "today" ? todaysPlan : savedWorkouts;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return Number(b.duration) - Number(a.duration);
    if (sortBy === "calories")
      return Number(b.caloriesBurned) - Number(a.caloriesBurned);
    if (sortBy === "rating") return Number(b.rating) - Number(a.rating);
    return 0;
  });

  // Loading
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Mark As Done
  const handleMarkAsDone = (id, workoutName) => {
    markAsDone(id);
    toast.success(`Congratulations on completing ${workoutName}!`);
  };

  // Remove Today's Plan Button Handler
  const handleRemoveToday = (id, workoutName) => {
    removeFromToday(id);
    toast.success(`${workoutName} Removed from Today's Plan list`);
  };

  // Remove Save Button Handler
  const handleRemoveSaved = (id, workoutName) => {
    removeFromSaved(id);
    toast.success(`${workoutName} Removed from Saved list`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-32 flex justify-center items-center">
        <p className="text-white font-oswald text-4xl md:text-5xl animate-pulse">
          Loading workouts…
        </p>
      </div>
    );
  }

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
            {currentList.length}
          </p>
        </div>
        <div className="py-4 md:py-0 md:px-6">
          <p className="text-[#8A92A0] font-inter text-[12px]">Minutes</p>
          <p className="text-white font-oswald text-[32px] font-bold mt-1">
            {currentList.reduce(
              (total, current) => total + (Number(current.duration) || 0),
              0,
            )}
          </p>
        </div>
        <div className="pt-4 md:pt-0 md:pl-6">
          <p className="text-[#8A92A0] font-inter text-[12px]">Calories</p>
          <p className="text-white font-oswald text-[32px] font-bold mt-1">
            {currentList.reduce(
              (total, current) => total + (Number(current.caloriesBurned) || 0),
              0,
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-8">
        {/* Tabs Area */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="bg-[#15171d] border border-[#252830] rounded-xl p-1 flex items-center gap-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`${
                activeTab === "today"
                  ? "bg-[#252830] text-white"
                  : "text-[#8A92A0]"
              } font-inter text-[13px] font-medium px-4 py-1.5 rounded-lg cursor-pointer`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`${
                activeTab === "saved"
                  ? "bg-[#252830] text-white"
                  : "text-[#8A92A0]"
              } font-inter text-[13px] font-medium px-4 py-1.5 rounded-lg cursor-pointer`}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Sorting Options */}
        <div className="flex items-center gap-3">
          <span className="text-[#8A92A0] font-inter text-[12px]">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#13161D] text-white border border-[#232732] rounded-xl px-4 py-2 pr-10 font-inter text-[12px] appearance-none focus:outline-none focus:border-[#C2F800] cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A92A0] pointer-events-none">
              <FaChevronDown size={12} />
            </span>
          </div>
        </div>
      </div>

      {/* Conditionally Render Content */}
      {activeTab === "today" && (
        <div className="mt-6 space-y-3">
          {todaysPlan.length === 0 ? (
            <EmptyPlanCard />
          ) : (
            sortedList.map((workout, index) => (
              <TodaysPlanCard
                key={index}
                workout={workout}
                onMarkAsDone={() => {
                  if (!workout.completed) {
                    handleMarkAsDone(workout.id, workout.name);
                  }
                }}
                onRemove={() => handleRemoveToday(workout.id, workout.name)}
              />
            ))
          )}
        </div>
      )}

      {activeTab === "saved" && (
        <div className="mt-6 space-y-3">
          {savedWorkouts.length === 0 ? (
            <EmptyPlanCard />
          ) : (
            sortedList.map((workout, index) => (
              <SavedPlanCard
                key={index}
                workout={workout}
                onRemove={() => handleRemoveSaved(workout.id, workout.name)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;
