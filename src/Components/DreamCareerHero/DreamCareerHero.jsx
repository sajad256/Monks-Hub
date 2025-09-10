import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi";
import { CgArrowTopRight } from "react-icons/cg";

export default function DreamCareerHero() {
  return (
    <>
      <div className="container">
        <div className="mt-20  border rounded-3xl p-4 container bg-[url('/bg.png')] bg-cover bg-center md:w-4/5 lg:w-11/12">
          <div className="info mt-4 xl:text-center xl:grid xl:justify-items-center">
            <h1 className="text-4xl text-center font-bold xl:w-10/12 xl:text-5xl">
              Join Driven Professionals & Launch Your Dream Career Today!
            </h1>
            <p className="mt-4 text-center xl:w-7/12">
              Connect with a network of driven professionals, gain valuable
              insights, and access resources that propel you toward your dream
              career.
            </p>
          </div>
          <div className="for-md-center md:grid md:justify-items-center lg:flex lg:items-center lg:justify-center lg:gap-3">
            <div className="input mt-4 border px-3 py-2 rounded-full md:w-72">
              <input
                type="email"
                placeholder="Enter your Email"
                name=""
                id=""
              />
            </div>
            <div className="flex mt-3">
              <button className="group flex items-center hover: hover:bg-black hover:transition-transform duration-500 ease-in-out cursor-pointer justify-between w-64 border px-2 py-1 rounded-full bg-[#009D77] text-white font-bold md:w-72 lg:w-40 lg:mt-2 xl:mt-2">
                Join With Us
                <span className="mt-1 border px-2 py-2 rounded-full text-black bg-white">
                  <CgArrowTopRight
                    className="transition-transform duration-300 group-hover:rotate-45"
                    size={20}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
