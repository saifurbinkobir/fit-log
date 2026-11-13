import BannerSection from "@/components/homepage/banner";
import WorkoutCards from "@/components/homepage/WorkoutCards";


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
        <WorkoutCards></WorkoutCards>
      </div>
    </div>
  );
}
