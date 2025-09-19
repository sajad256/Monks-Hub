import { cardsDATA } from "./MentorsCardsDATA";
import { useState, useEffect } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router";

export default function MentorsCards() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Determine how many cards to show based on screen width
  const getVisibleCards = () => {
    if (width >= 1280) return 8; // XL
    if (width >= 1024) return 6; // PC/LG
    if (width >= 640) return 4; // iPad → 2x2
    return 4; // Mobile
  };

  const visible = getVisibleCards();

  // Determine grid columns dynamically
  const getGridCols = () => {
    if (width >= 1280) return "xl:grid-cols-4"; // XL → 4 per row
    if (width >= 1024) return "lg:grid-cols-3"; // PC/LG → 3 per row
    if (width >= 640) return "sm:grid-cols-2"; // iPad → 2 per row
    return "grid-cols-1"; // Mobile → 1 per row
  };

  return (
    <>
      {/* Information */}
      <div className="info mt-20 text-center container mx-auto">
        <h1 className="text-4xl font-bold leading-snug">
          Meet the Next Generation of Masterful Mentors
        </h1>
        <p className="mt-4">
          Connect with the next wave of expert mentors, guiding you with fresh
          perspectives, innovative insights, and proven expertise.
        </p>
      </div>

      {/* Mentors Cards */}
      <div className="main-mentors-cards flex justify-center items-center container mt-10">
        <div className={`grid gap-8 w-full ${getGridCols()}`}>
          {cardsDATA.slice(0, visible).map((data, index) => (
            <Link
              key={index}
              to={
                index === 0
                  ? "/MentorDetails"
                  : index === 1
                  ? "/tahseen"
                  : index === 2
                  ? "/Raheb"
                  : index === 3
                  ? "/Saidshah"
                  : index === 4
                  ? "/Abdullah"
                  : ""
              } // 👈 only 2nd card goes to Tahseen
            >
              <div className="bg-white rounded-xl flex flex-col items-center p-4 border border-transparent hover:!border-green-800 transition-colors duration-500 hover:shadow-[0_-2px_6px_0_rgba(34,197,94,0.3),0_2px_6px_0_rgba(34,197,94,0.3),-2px_0_6px_0_rgba(0,0,0,0.25),2px_0_6px_0_rgba(0,0,0,0.25)]">
                {/* Image */}
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-20 h-20 sm:w-40 sm:h-40 bg-[#BDF1E5] rounded-full"
                />
                {/* Title & Job */}
                <div className="text-center mt-4">
                  <h1 className="text-xl font-semibold">{data.title}</h1>
                  <h6 className="text-gray-500">{data.job}</h6>
                </div>
                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <h1 className="border px-2 py-2 rounded-full">
                    {data.figma}
                  </h1>
                  <h1 className="border px-2 py-2 rounded-full">
                    {data.wordpress}
                  </h1>
                  <h1 className="border px-2 py-2 rounded-full">
                    {data.notion}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="btn flex justify-center items-center h-36">
        <button className="group flex items-center gap-3 border px-3 py-2 rounded-full bg-[#009D77] text-white font-bold hover: hover:bg-black  duration-500">
          Views All Mentors
          <span className="mt-1 border px-2 py-2 rounded-full text-black bg-white">
            <CgArrowTopRight
              size={20}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </button>
      </div>
    </>
  );
}
