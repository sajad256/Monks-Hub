import React from "react";
import { mentorsData } from "./MentorsCardsDATA";
import { Link } from "react-router";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function MentorsCards() {
  return (
    <>
      {/* 4 Cards For Mobile */}
      <div className=" main-for-cards container mt-10 lg:grid lg:grid-cols-3 xl:grid-cols-4">
        {mentorsData.map((data, index) => {
          return (
            <Link to={data.link}>
              <div className="container md:flex md:justify-center">
                <div
                  className={`card  rounded-xl mt-4 md:w-80 border border-transparent hover:!border-green-800 transition-colors duration-500 hover:shadow-[0_-2px_6px_0_rgba(34,197,94,0.3),0_2px_6px_0_rgba(34,197,94,0.3),-2px_0_6px_0_rgba(0,0,0,0.25),2px_0_6px_0_rgba(0,0,0,0.25)] ${
                    index === 4
                      ? "hidden lg:block"
                      : index === 5
                      ? "hidden lg:block"
                      : index === 6
                      ? "hidden xl:block"
                      : index === 7
                      ? "hidden xl:block"
                      : index === 8
                      ? "hidden xl:block"
                      : index === 9
                      ? "hidden xl:block"
                      : index === 10
                      ? "hidden xl:block"
                      : index === 11
                      ? "hidden xl:block"
                      : ""
                  }`}
                >
                  <div
                    className={`img bg-[#FCEEDF]  rounded-xl ${
                      index === 1
                        ? "bg-[#BCF0E4]"
                        : index === 2
                        ? "bg-[#FAECDD]"
                        : index === 3
                        ? "bg-[#F9CEDC]"
                        : index === 4
                        ? ""
                        : index === 5
                        ? "bg-[#BCF0E4]"
                        : index === 6
                        ? "bg-[#F9CEDC]"
                        : index === 7
                        ? "bg-[#F8E9BE]"
                        : index === 8
                        ? "bg-[#BCF0E4]"
                        : index === 9
                        ? "bg-[#F9CEDC]"
                        : index === 10
                        ? "bg-[#FCEEDF]"
                        : index === 11
                        ? "bg-[#BCF0E4]"
                        : ""
                    }`}
                  >
                    <img src={data.img} alt="" className="rounded-xl" />
                  </div>
                  <div className="hidden">
                    <span className="px-2 py-2 rounded-full border border-white">
                      <CiTwitter size={20} />
                    </span>
                    <span className="px-2 py-2 rounded-full border border-white">
                      <FaFacebookF size={20} />
                    </span>
                    <span className="px-2 py-2 rounded-full border border-white">
                      <FaLinkedinIn size={20} />
                    </span>
                    <span className="px-2 py-2 rounded-full border border-white">
                      <FaInstagram size={20} />
                    </span>
                  </div>
                  <div className="info mt-3 mb-3 text-center">
                    <h1 className="font-bold text-lg">{data.name}</h1>
                    <p className="text-sm">{data.job}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="btn flex justify-center  mt-5">
        <button className="px-3 py-2 rounded-full border-1 border-black hover hover:bg-[#009D77] hover:text-white">
          View More Mentors
        </button>
      </div>
    </>
  );
}
