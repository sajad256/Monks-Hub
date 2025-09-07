import React from "react";
import imges from "../../assets/Take your expertise to the next levelIMG/TakeYourExpertiseToTheNextLevelJSIMG";
import { GoPlus } from "react-icons/go";
import Cards from "./Cards";

export default function TakeYourExpertiseToTheNextLevel() {
  return (
    <>
      <div className="xl:flex xl:justify-around xl:container">
        {/* Main for Both  */}
        <div className="mt-16">
          {/* For Images */}
          <div className="imges md:flex md:items-center md:flex-col">
            {/* Image 1 with Badge */}
            <div className="img-1 relative m-3">
              <img
                className="w-52 rounded-xl md:w-80 lg:w-96"
                src={imges.img1}
                alt=""
              />

              {/* Badge - Positioned on top of image */}
              <div className="100k-Student absolute top-3 left-28 md:left-48 lg:left-56 border w-44 text-center p-2 rounded-xl bg-white shadow-md">
                <p>100k Students</p>
                <div className="for-img flex justify-center items-center w-44 mt-2">
                  <img
                    className="w-9 rounded-full bg-gray-200"
                    src={imges.student1}
                    alt=""
                  />
                  <img
                    className="w-9 rounded-full bg-gray-200 -ml-2"
                    src={imges.student2}
                    alt=""
                  />
                  <img
                    className="w-9 rounded-full bg-gray-200 -ml-2"
                    src={imges.student3}
                    alt=""
                  />
                  <img
                    className="w-9 rounded-full bg-gray-200 -ml-2"
                    src={imges.student4}
                    alt=""
                  />
                  <span className="border rounded-full px-2 py-2 bg-[#E3F4EF] -ml-2">
                    <GoPlus />
                  </span>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="img-2 flex justify-end md:justify-center mt-3">
              <img
                className="w-52 rounded-xl md:w-80 lg:w-96 xl:relative xl:left-36"
                src={imges.img2}
                alt=""
              />
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
}
