"use client";

import React, { useEffect } from "react";

import Nav from "./Nav";
import DeveloperText from "./DeveloperText";
import { IoCallOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import FluidImage from "./FluidImage";
import DistortImage from "./DistortImage";

function Hero() {
  return (
    <section className="w-full h-full absolute top-0 left-0 flex items-start">
      <DeveloperText />
      <section className="w-full h-full px-20 py-5 flex flex-col justify-start">
        <Nav />
        <section className="w-full h-full flex">
          <section className="_left_ _name-title_ w-1/2 h-full  flex flex-col items-center justify-center gap-5">
            <section className=" w-9/12 flex flex-col gap-8">
              <section className="font-semibold text-4xl">Hi, i am</section>
              <section className="font-semibold text-5xl">
                Kazi Mohammed Irfan
              </section>
              <section className="c">
                Motivated MERN Stack Developer with strong skills in building
                scalable, user-focused web applications. Passionate about clean
                architecture, performance, and delivering high-quality code.
              </section>
              <section className="_button_ flex items-center gap-3">
                <button className="magnet  px-5 py-3 rounded-md text-white bg-violet-600 border-2 border-violet-600 hover:bg-violet-800 font-semibold flex items-center gap-2 cursor-pointer">
                  <span className="text-lg">
                    <FiDownload />
                  </span>
                  <span>Download CV</span>
                </button>
                <button className="px-5 py-3  bg-transparent border-2 border-violet-700 text-white font-semibold flex items-center gap-2 rounded-md hover:bg-violet-700/20 cursor-pointer hover:text-violet-500">
                  <span className="text-lg">
                    <IoCallOutline />
                  </span>
                  <span className="c">Contact</span>
                </button>
              </section>
            </section>
          </section>
          <section className="_right_ _image_ w-1/2 h-full items-center justify-center">
            {/* <FluidImage /> */}

            <DistortImage />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Hero;
