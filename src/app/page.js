import BannerSection from "@/components/homepage/banner";
import WorkoutCards from "@/components/homepage/WorkoutCards";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      {/* Library section */}
      <div className="container mx-auto mb-16 lg:px-0 px-4">
        <h2 className="text-white text-[30px] font-bold font-oswald">
          THE LIBRARY
        </h2>
        <p className="text-[#9CA3AF] font-inter text-[16px] mb-8">
          Twelve lifts covering every major muscle group.
        </p>
        {/* All Workouts */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>
              <p className="text-white font-inter text-sm">
                Loading workouts...
              </p>
            </div>
          }
        >
          <WorkoutCards />
        </Suspense>
      </div>
    </div>
  );
}
