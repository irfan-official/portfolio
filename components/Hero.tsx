"use client";

import React, { useEffect } from "react";

import Nav from "./Nav";
import DeveloperText from "./DeveloperText";
import { IoCallOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import FluidImage from "./FluidImage";
import DistortImage from "./DistortImage";
import dynamic from "next/dynamic";
const Terminal = dynamic(() => import("@/components/Terminal"), {
  ssr: false,
});

function Hero() {
  return (
    <section className="w-full h-full absolute top-0 left-0 flex items-start">
      <DeveloperText />
      <section className="w-full  h-full px-10 lg:px-20 py-5 flex flex-col  justify-start">
        <Nav />
        <section className="w-full h-full flex ">
          <section className="_left_ w-full _name-title_ lg:w-1/2 h-full   flex flex-col items-center justify-center gap-5">
            <section className="w-full lg:w-9/12 flex flex-col gap-4 lg:gap-8 ">
              <section className="flex flex-col gap-1 lg:gap-4">
                <section className="font-semibold text-[1.5rem] lg:text-4xl">
                  Hi, i am
                </section>
                <section className="font-semibold text-[1.58rem] lg:text-5xl">
                  Kazi Mohammed Irfan
                </section>
              </section>
              <section className="text-[0.95rem] md:text-[1rem] mt-2 lg:mt-1">
                Motivated MERN Stack Developer with strong skills in building
                scalable, user-focused web applications. Passionate about clean
                architecture, performance, and delivering high-quality code.
              </section>
              <section className="_button_ flex items-center gap-3 mt-5">
                <button className="magnet  px-3 py-2 lg:px-5 lg:py-3 rounded-md text-white bg-violet-600 border border-violet-600 hover:bg-violet-800 font-semibold flex items-center gap-2 cursor-pointer">
                  <span className="text-lg">
                    <FiDownload />
                  </span>
                  <span className="text-[0.9rem] lg:text-[1rem]  text-nowrap">
                    Download CV
                  </span>
                </button>
                <button className="px-3 py-2 lg:px-5 lg:py-3  bg-transparent border-2 border-violet-700 text-white font-semibold flex items-center gap-2 rounded-md hover:bg-violet-700/20 cursor-pointer hover:text-violet-500">
                  <span className="text-lg">
                    <IoCallOutline />
                  </span>
                  <span className="text-[0.9rem] lg:text-[1rem]">Contact</span>
                </button>
              </section>
            </section>
          </section>
          <section className="_right_ hidden _image_ w-1/2 h-full lg:flex items-center justify-center  p-5 ">
            <Terminal />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Hero;
