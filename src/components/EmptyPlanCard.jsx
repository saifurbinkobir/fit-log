import Link from 'next/link';
import React from 'react';

const EmptyPlanCard = () => {
    return (
         <div className="border border-dashed border-[#252830] rounded-2xl py-24 px-4 mt-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-white font-oswald text-[20px] font-bold">
          NOTHING HERE YET
        </h2>
        <p className="text-[#8A92A0] font-inter text-[13px] mt-1.5">
          Browse the library and add a lift to get today moving.
        </p>
        <Link href="/" className="bg-[#C2F800] text-black font-inter text-[13px] font-bold px-6 py-2.5 rounded-full mt-5">
          Go to workouts
        </Link>
      </div>
    );
};

export default EmptyPlanCard;