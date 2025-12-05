"use client";

import { title } from "process";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

function GetInTouch() {
  const mediaData = [
    {
      icon: <HiOutlineMail size={30} />,
      title: "Email",
    },
    {
      icon: <LuGithub size={30} />,
      title: "GitHub",
    },
    {
      icon: <FaLinkedinIn size={30} />,
      title: "LinkedIn",
    },
    {
      icon: <BsTwitterX size={30} />,
      title: "X",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 px-8 lg:px-30 ">
      <section className="_left_ _let's_connect_ w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-10 ">
        <section className="_let's_connect_title_ text-3xl font-medium">
          Let's Connect
        </section>

        <section className="w-full h-full flex items-center justify-center gap-4 flex-wrap">
          {mediaData.map(({ icon, title }, index) => (
            <section
              key={index}
              className=" rounded-lg border p-3 flex flex-col gap-2 items-center justify-center text-4xl text-white border-white/20 bg-white/6 hover:bg-white/20 backdrop-blur-sm cursor-pointer"
            >
              <span className="c">{icon}</span>
            </section>
          ))}
        </section>
      </section>

      <section className="_right_ border border-white/20 bg-white/6 backdrop-blur-sm _message_ w-full lg:w-1/2 flex flex-col items-center gap-10 rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full px-5 flex flex-col items-center justify-center gap-5  py-10 rounded-lg "
        >
          <h2 className="text-3xl font-medium">Message Me</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="border w-full max-w-[30rem] py-4 px-3 rounded-md backdrop-blur-[100px] bg-violet-700/20 border-violet-700/30"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="border w-full max-w-[30rem] py-3 px-3 rounded-md backdrop-blur-[100px] bg-violet-700/20 border-violet-700/30"
          />
          <textarea
            name="text_message"
            placeholder="message"
            required
            className=" border w-full max-w-[30rem] py-4 px-3 rounded-md backdrop-blur-[100px] bg-violet-700/20 border-violet-700/30"
          ></textarea>
          <button
            type="submit"
            className="py-3 w-full max-w-[30rem] rounded-md border bg-black border-white hover:bg-slate-950 text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default GetInTouch;
