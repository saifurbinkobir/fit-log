"use client";
import React, { createContext, useState } from "react";

export const PlanContext = createContext();

const PlanProvider = ({ children }) => {
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // For Mark As Done
  const markAsDone = (id) => {
    setTodaysPlan((prev) =>
      prev.map((workout) =>
        workout.id === id ? { ...workout, completed: true } : workout,
      ),
    );
  };

  // Prevent Duplicate Listing
  const addToToday = (workout) => {
    setTodaysPlan((prev) => [...prev, workout]);
  };

  const addToSaved = (workout) => {
    setSavedWorkouts((prev) => [...prev, workout]);
  };

  // For Removing from list
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
    addToToday,
    addToSaved,
    markAsDone,
    removeFromToday,
    removeFromSaved,
  };

  return (
    <PlanContext.Provider value={shareData}>{children}</PlanContext.Provider>
  );
};

export default PlanProvider;
