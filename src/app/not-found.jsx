import Link from 'next/link';
import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa6';

const NotFoundPage = () => {
    return (
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center min-h-[70vh]">
      <div className="text-[#CCFF00] text-6xl mb-6">
        <FaRegSadTear />
      </div>
      <h1 className="text-white text-4xl md:text-5xl font-bold font-oswald uppercase tracking-wider mb-3">
        404 <br/>Page Not Found
      </h1>
      <p className="text-[#9CA3AF] font-inter text-[15px] max-w-md mb-8">
        Looks like you&apos;ve hit the wrong URL. Check your URL properly or go to homepage by clicking below button. 
      </p>
      <Link
        href="/"
        className="bg-[#CCFF00] text-[#000000] text-[12px] font-bold font-inter py-3 px-6 uppercase rounded-md hover:bg-[#A8E400] transition duration-300 inline-flex items-center gap-2"
      >
        <FaDumbbell /> Back to Workouts
      </Link>
    </div>
    );
};

export default NotFoundPage;