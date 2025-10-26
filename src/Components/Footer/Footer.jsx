import React from "react";
import logo from "../../assets/NavbarIMG/logo.svg";
import { Stayconnected } from "./FooterDATA";
import { pagesData } from "./FooterDATA";
import { otherData } from "./FooterDATA";
import { contactData } from "./FooterDATA";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      <div className="bg-[url('/bg.png')] bg-cover bg-center mt-20 h-96 xl:flex xl:items-center">
        <div className="container lg:ms- xl:flex xl:justify-between xl:items-center gap-10 ">
          {/* Left Column: Logo + Social */}
          <div className="pt-10 xl:w-1/3">
            <div className="logo-and-info">
              <div className="logo">
                <img className="w-36" src={logo} alt="Logo" />
              </div>
              <p className="text-sm mt-3">
                Unlock knowledge with expert-led online courses.
              </p>
            </div>

            <div className="main-stay-connected mt-6">
              {Stayconnected.map((data, index) => (
                <div key={index} className="info">
                  <h1 className="text-lg mb-2 font-bold">{data.title}</h1>
                  <div className="icons flex gap-2 text-xl">
                    {data.icons.map((Icon, i) => (
                      <Icon
                        key={i}
                        className="border border-black rounded-full px-2 py-2 text-4xl"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pages / Other / Contact */}
          <div className="mt-10 xl:mt-0 xl:w-2/3 lg:grid lg:grid-cols-3 gap-6 container">
            {/* Pages */}
            <div className="pages mt-4">
              {pagesData.map((data, idx) => (
                <div key={idx}>
                  <h1 className="font-bold text-lg">{data.title}</h1>
                  <p className="mt-2 font-medium">{data.Home1}</p>
                  <p className="mt-2 font-medium">{data.Home2}</p>
                  <p className="mt-2 font-medium">{data.Home3}</p>
                  <p className="mt-2 font-medium">{data.About}</p>
                  <p className="mt-2 font-medium">{data.Course}</p>
                </div>
              ))}
            </div>

            {/* Other */}
            <div className="other mt-4">
              {otherData.map((data, idx) => (
                <div key={idx}>
                  <h1 className="font-bold text-lg">{data.title}</h1>
                  <p className="mt-2 font-medium">{data.Mentor}</p>
                  <p className="mt-2 font-medium">{data.Blog}</p>
                  <p className="mt-2 font-medium">{data.four}</p>
                  <p className="mt-2 font-medium">{data.policy}</p>
                  <p className="mt-2 font-medium">{data.terms}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="contact-us mt-4">
              {contactData.map((data, idx) => (
                <div key={idx}>
                  <h1 className="font-bold text-lg">Contact Us</h1>
                  <div className="phone flex items-center gap-2 mt-3">
                    <FiPhone size={19} />
                    <p className="text-sm font-bold">{data.number}</p>
                  </div>
                  <div className="email flex items-center gap-2 mt-3">
                    <CiMail size={19} />
                    <p className="text-sm font-bold">{data.email}</p>
                  </div>
                  <div className="adress flex items-center gap-2 mt-2">
                    <CiLocationOn size={30} />
                    <p className="text-sm font-bold">{data.adress}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
