"use client";
import React, { createContext, useState } from "react";

export const PlanContext = createContext();

const PlanProvider = ({ children }) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const removeFromToday = (id) => {
    setTodaysPlan((prev) => prev.filter((workout) => workout.id !== id));
  };

  const removeFromSaved = (id) => {
    setSavedWorkouts((prev) => prev.filter((workout) => workout.id !== id));
  };

  const shareData = {
    todaysPlan,
    setTodaysPlan,
    savedWorkouts,
    setSavedWorkouts,
    removeFromToday,
    removeFromSaved,
  };

  return (
    <PlanContext.Provider value={shareData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;