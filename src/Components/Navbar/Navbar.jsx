import React, { useState } from "react";
import logo from "../../assets/NavbarIMG/logo.svg";
import menu from "../../assets/NavbarIMG/menu.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiArrowTopRight } from "react-icons/tfi";
import { NavbarData } from "./NavbarDATA";
import { Link } from "react-router";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="container flex justify-between items-center h-16 md:justify-around md:h-24 xl:justify-between relative bg-none">
        {/* Logo */}
        <div className="logo">
          <img className="w-40" src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="lists">
          {NavbarData.map((data, index) => (
            <div key={index} className="hidden xl:flex">
              <ul className="nav gap-6 font-bold text-lg">
                <li
                  className="cursor-pointer hover:text-[#EA4C89] flex items-center gap-2 relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  {/* Trigger text */}
                  {data.home}
                  <span className="mt-1">
                    <MdKeyboardArrowDown />
                  </span>

                  {/* Dropdown */}
                  <div
                    className={`xl:absolute xl:top-6 xl:-left-16 xl:right-96 h-52 w-44 transform transition-all duration-500 ease-out ${
                      dropdown
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                    }`}
                  >
                    <ul className="bg-white p-4 w-48 text-base rounded-lg shadow-xl text-black mt-8">
                      <li className="hover:text-[#EA4C89] py-2">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="hover:text-[#EA4C89] py-2">Home V2</li>
                      <li className="hover:text-[#EA4C89] py-2">Home V3</li>
                    </ul>
                  </div>
                </li>

                <li className="cursor-pointer">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 hover:text-red-600 transition-colors duration-200"
                        : "text-black hover:text-[#EA4C89] transition-colors duration-200"
                    }
                  >
                    {data.course}
                  </NavLink>
                </li>

                <li className=" cursor-pointer hover:text-[#EA4C89]">
                  <Link to="/mentor"> {data.mentors}</Link>
                </li>
                <li className=" cursor-pointer hover:text-[#EA4C89]">
                  <Link to="/blog">{data.blog}</Link>
                </li>
                <li className=" cursor-pointer hover:text-[#EA4C89]">
                  <Link to="/AboutUs"> {data.aboutUs}</Link>
                </li>
                <li className=" cursor-pointer hover:text-[#EA4C89]">
                  {data.contact}
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button + Menu Icon */}
        <div className="flex items-center gap-3">
          <div className="btn hidden lg:flex border-2 border-black rounded-full px-3 py-2">
            <button className="group flex gap-3 items-center font-bold">
              Get this template
              <span className="bg-black rounded-full px-2 py-2">
                <CgArrowTopRight
                  size={20}
                  className="text-white transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="menu xl:hidden cursor-pointer">
            {isOpen ? (
              <FaTimes className="w-7 h-7" onClick={() => setIsOpen(false)} />
            ) : (
              <img
                className="w-9"
                src={menu}
                alt="menu"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute z-50 top-24 left-4 md:top-28 w-11/12 rounded-3xl  bg-white shadow-md border-2 border-gray-300 xl:hidden transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          {NavbarData.map((data, index) => (
            <ul
              key={index}
              className="flex flex-col container ms-3 gap-3 mt-3 font-bold"
            >
              <li className="hover:text-[#EA4C89] cursor-pointer">
                <Link to="/"> {data.home}</Link>
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                {data.homev2}
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                {data.homev3}
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                <Link to="/courses">{data.course}</Link>
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                <Link to="/mentor"> {data.mentors}</Link>
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                <Link to="/blog">{data.blog}</Link>
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                {data.aboutUs}
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                {data.contact}
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                {data.terms}
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer">
                {data.policy}
              </li>
              <li className="hover:text-[#EA4C89] cursor-pointer mb-2">
                {data.four}
              </li>
            </ul>
          ))}
        </div>
      </nav>
    </>
  );
}
