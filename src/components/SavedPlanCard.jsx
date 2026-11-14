import React from "react";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { GiSolidLeaf } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const SavedPlanCard = ({ workout, onRemove }) => {
  return (
    <div className="bg-[#14171E] border border-[#232732] rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between">
      {/* Image and Text area */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Image */}
        <div>
          <Image
            src={workout.image}
            alt={workout.name}
            width={400}
            height={250}
            className="w-100 md:w-full h-20 object-cover rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-white font-oswald text-[16px] font-bold uppercase">
            {workout.name}
          </h3>
          <p className="text-[#8A92A0] font-inter text-[14px] my-0.5">
            {workout.equipment}
          </p>
          <div className="flex gap-4">
            <p className="text-[#9CA3AF] font-inter text-[16px] flex items-center gap-2">
              <span className="text-[#CCFF00]">
                <CiClock2 />
              </span>
              {workout.duration} mins
            </p>
            <p className="text-[#9CA3AF] font-inter text-[16px] flex items-center gap-2">
              <span className="text-[#CCFF00]">
                <GiSolidLeaf />
              </span>
              {workout.caloriesBurned} kcal
            </p>
            <p className="text-[#9CA3AF] font-inter text-[16px] flex items-center gap-2">
              <span className="text-[#CCFF00]">
                <FaRegStar />
              </span>
              {workout.rating} stars
            </p>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex mt-3 md:mt-0 gap-3 items-center">
        <Link href={`/exercise/${workout.id}`} className=" text-white font-inter text-[12px] font-normal px-4.5 py-2.5 rounded-[30px] border border-[#374151] hover:border-[#ffffff]">
          View Details
        </Link>
        <button onClick={onRemove} className="text-[#6B7280]">
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default SavedPlanCard;