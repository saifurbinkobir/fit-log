import Image from "next/image";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { GiSolidLeaf } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";

const getWorkoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutCards = async () => {
  const workoutData = await getWorkoutData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {workoutData.map((workOut) => {
        return (
          <Link className="border border-[#252830] hover:border-[#C2F800] rounded-xl" href={`/exercise/${workOut.id}`} key={workOut.id}>
            <Image
              src={workOut.image}
              alt={workOut.name}
              width={400}
              height={250}
              className="w-full h-75 object-cover rounded-t-xl"
            />
            {/* Text Box */}
            <div className="p-6 bg-[#15171d] rounded-b-xl">
              <div className="flex gap-1 items-center flex-wrap">
                {workOut.muscleGroups.map((group, index) => (
                  <span
                    key={index}
                    className="text-[#000000] text-[11px] font-bold font-inter py-0.5 px-2.5 rounded-[30px] bg-[#C2F800]"
                  >
                    {group}
                  </span>
                ))}
              </div>
              <h2 className="text-white text-[18px] font-bold font-oswald mt-2 mb-1">
                {workOut.name}
              </h2>
              <p className="text-[#9CA3AF] font-inter text-[16px]">
                {workOut.equipment}
              </p>
              <div className="border-t border-[#20242e] mt-4 pt-4.5 flex gap-4">
                <p className="text-[#9CA3AF] font-inter text-[16px] flex items-center gap-2">
                  <CiClock2 /> {workOut.duration} mins
                </p>
                <p className="text-[#9CA3AF] font-inter text-[16px] flex items-center gap-2">
                  <GiSolidLeaf /> {workOut.calories} kcal
                </p>
                <p className="text-[#9CA3AF] font-inter text-[16px] flex items-center gap-2">
                  <FaRegStar /> {workOut.stars} stars
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default WorkoutCards;
