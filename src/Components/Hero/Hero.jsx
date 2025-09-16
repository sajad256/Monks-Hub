import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import { IoIosSearch } from "react-icons/io";

export default function Hero() {
  return (
    <>
      <section className="bg-[url('/bg.png')] bg-center bg-cover">
        <Navbar />
        {/* Information */}
        <div className="Main-for-learn-from flex justify-center items-center h-32">
          <div className="learn-from-top-expert border flex justify-center w-72 px-2 py-2 rounded-full">
            <h1 className="flex items-center gap-2 font-bold">
              <span>
                <img
                  src="https://framerusercontent.com/images/oh5LDYcjfF2ZEekpHtQSpRE.svg"
                  alt=""
                />
              </span>
              Learn From the Top Experts
            </h1>
          </div>
        </div>
        {/* Building Futures Together By Empowering Minds */}
        <div className="text-center container">
          <h1 className="font-bold text-5xl leading-snug">
            Building Future Together By Empowering Minds
          </h1>
          <p className="mt-4">
            Join us in shaping a brighter future by nurturing potential,
            empowering minds, and fastering growth through education and
            callacbaration.
          </p>
        </div>
        {/* Input Feild */}
        <div className="input flex justify-around items-center container mt-6 border-1 border-gray-400 w-72 px-2 py-2 rounded-full">
          <input type="text" placeholder="e.g. UX Design" name="" id="" />
          <div className="search-icon">
            <IoIosSearch size={20} />
          </div>
        </div>
      </section>
      <Cards />
    </>
  );
}
