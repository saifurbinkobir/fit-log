import Image from "next/image";
import React from "react";
import { GrPlan } from "react-icons/gr";
import { CiBookmark } from "react-icons/ci";
import AddToTodayButton from "@/components/AddToTodayButon";
import SaveForLaterButton from "@/components/SaveForLaterButton";


const getWorkoutDetails = async (id) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const SingleWorkoutPage = async ({ params }) => {
  const { id } = await params;
  const workout = await getWorkoutDetails(id);
  return (
    <div className="container mx-auto mt-12 mb-16 lg:px-0 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="relative w-full h-full min-h-75">
          <Image
            src={workout.image}
            alt="Workout"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-white text-[36px] font-bold font-oswald">
            {workout.name}
          </h1>
          <p className="text-[#9CA3AF] font-inter text-[16px] font-normal">
            {workout.description}
          </p>

          <div className="flex items-center flex-wrap gap-2.5 my-5">
            {workout.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="text-[#000000] text-[11px] font-bold font-inter py-0.5 px-2.5 rounded-[30px] bg-[#C2F800]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Details Table */}
          <div className="bg-[#151922] border border-[#232834] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 items-center px-6 py-4 border-b border-[#1e2330]">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                EQUIPMENT
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.equipment}
              </span>
            </div>
            <div className="grid grid-cols-2 items-center px-6 py-4 border-b border-[#1e2330]">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                DIFFICULTY
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.difficulty}
              </span>
            </div>
            <div className="grid grid-cols-2 items-center px-6 py-4 border-b border-[#1e2330]">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                SETS
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.sets}
              </span>
            </div>
            <div className="grid grid-cols-2 items-center px-6 py-4 border-b border-[#1e2330]">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                REPS
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.reps}
              </span>
            </div>
            <div className="grid grid-cols-2 items-center px-6 py-4 border-b border-[#1e2330]">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                DURATION
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.duration} min
              </span>
            </div>
            <div className="grid grid-cols-2 items-center px-6 py-4 border-b border-[#1e2330]">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                CALORIES
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.caloriesBurned} kcal
              </span>
            </div>
            <div className="grid grid-cols-2 items-center px-6 py-4">
              <span className="text-[#9CA3AF] font-inter text-[12px] font-bold">
                RATING
              </span>
              <span className="text-white font-inter text-[14px] font-medium">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instruction Area */}
          <div>
            <h2 className="text-[16px] font-extrabold font-inter text-white uppercase mt-8 mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-[#D1D5DB] font-inter text-[14px]">
              {workout.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="flex items-center flex-wrap gap-4 mt-9">
              <AddToTodayButton workout={workout}/>
              <SaveForLaterButton workout={workout}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkoutPage;
