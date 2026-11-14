"use client";
import React, { createContext, useState } from "react";

export const PlanContext = createContext();

const PlanProvider = ({ children }) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const shareData = {
    todaysPlan,
    setTodaysPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <PlanContext.Provider value={shareData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;