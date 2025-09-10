import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  cardsData,
  categoriesData,
  recentBlogData,
} from "./ExploreAllInsightsDATA";

export default function ExploreAllInsights() {
  return (
    <>
      <div className="mt-20">
        <div className="info">
          <h1 className="font-bold text-4xl text-center">
            Explore All Insights
          </h1>
        </div>
      </div>

      {/* Main Div For Cards */}
      <div className="main-for-cards-and-side-info container  mx-auto mt-6 xl:grid xl:grid-cols-[70%_30%]">
        <div className="test-for-btn">
          <div className="Main-for-Cards mt-4 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:gap-y-4 w-full">
            {cardsData.map((data, index) => {
              return (
                <div
                  className="card w-full md:w-9/12 lg:w-11/12 mx-auto lg:mx-0 mt-3 border-none"
                  key={index}
                >
                  <div className="img mt-3">
                    <img className="rounded-xl" src={data.img} alt="" />
                  </div>
                  <div className="info mt-3">
                    <h1 className="text-gray-500">{data.name}</h1>
                    <p className="mt-2 text-lg font-bold">{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex justify-center w-full">
            <button className="px-2 py-2 border-1 border-black rounded-full">
              View More Blogs
            </button>
          </div>
        </div>

        {/* Main For Side Info  */}
        <div className="Main-for-Side-Info mt-4">
          <div className="Categories  md:flex md:justify-center md:w-80 xl:w-48 xl:mt-8">
            {categoriesData.map((data, index) => {
              return (
                <div className="info ">
                  <h1 className="font-bold text-xl">
                    {data.AllCategoriestitle}
                  </h1>
                  <div className="mt-3">
                    <h1>{data.AllCategories}</h1>
                    <h1 className="mt-3">{data.CareerDevelopment}</h1>
                    <h1 className="mt-3">{data.PersonalGrowth}</h1>
                    <h1 className="mt-3">{data.SkillBuilding}</h1>
                    <h1 className="mt-3">{data.TechnologyTrends}</h1>
                    <h1 className="mt-3">{data.IndustryInsights}</h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Recent-Blogs md:flex md:flex-col md:justify-center md:items-center md:w-11/12 lg:w-9/12 xl:mt-20 xl:w-11/12">
            {recentBlogData.map((data, index) => {
              return (
                <>
                  <div>
                    <div className="info mt-7">
                      <h1 className="font-bold text-xl">{data.recentblog}</h1>
                    </div>
                    <div className="flex-for-img-and-info mt-6 flex gap-3">
                      <div className="img">
                        <img
                          className="w-20 md:w-36 xl:w-48: rounded-lg"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="info xl:w-80">
                        <h1 className="font-bold">{data.title}</h1>
                        <p className="w-48 md:w-96 xl:w-56">{data.detail}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="follow-Us mt-8 md:flex md:flex-col md:justify-center md:ms-16 lg:ms-24 xl:ms-1 lg:flex-row lg:gap-5 lg:justify-start lg:items-center">
            <div>
              <div className="info flex justify-start">
                <h1 className="font-bold text-xl lg:mt-3">Follow us:</h1>
              </div>
            </div>
            <div className="icons flex items-center gap-3 mt-3">
              <div className="border py-2 px-2 rounded-full border-black">
                {" "}
                <FaTwitter size={20} />
              </div>
              <div className="border py-2 px-2 rounded-full border-black">
                {" "}
                <FaFacebookF size={20} />
              </div>
              <div className="border py-2 px-2 rounded-full border-black">
                {" "}
                <FaLinkedinIn size={20} />
              </div>
              <div className="border py-2 px-2 rounded-full border-black">
                {" "}
                <FaInstagram size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
