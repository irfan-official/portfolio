import React from "react";

function AboutMe() {
  return (
    <div className="w-full h-full flex items-center justify-center px-5">
      <section className="flex flex-col lg:w-[70%]  items-center justify-center mx-auto gap-0 lg:gap-7 border border-white/10 bg-transparent backdrop-blur-xs p-5 lg:p-15 rounded-xl">
        <h2 className="font-semibold text-4xl lg:text-6xl">About Me</h2>
        <p className="mt-10 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat
          explicabo corrupti consequatur maiores accusantium. Suscipit repellat
          a dicta commodi perspiciatis nobis possimus officiis quibusdam
          repellendus, earum consectetur ipsum iusto ut repudiandae eligendi
          molestias. Suscipit quia nam, voluptatum labore minima rerum iusto
          veritatis corporis! Ducimus soluta autem quasi odit eos!
        </p>
        <section className="w-full flex flex-col lg:flex-row gap-5 items-center mt-2">
          <section className="flex flex-col gap-2 items-center font-semibold border-t border-t-white/10 lg:border-0 pt-2 w-full">
            <span className="text-xl">Name:</span>
            <span className="text-lg">Kazi Mohammed Irfan</span>
          </section>
          <section className="flex flex-col gap-2 items-center font-semibold border-t border-t-white/10 lg:border-0 pt-2 w-full">
            <span className="text-xl">Email:</span>
            <span className="text-lg">irfanofficial.work@gmail.com</span>
          </section>
          <section className="flex flex-col gap-2 items-center font-semibold border-t border-t-white/10 lg:border-0 pt-2 w-full">
            <span className="text-xl">Date of Birth:</span>
            <span className="text-lg">1/1/2002</span>
          </section>
          <section className="flex flex-col gap-2 items-center font-semibold border-t border-t-white/10 lg:border-0 pt-2 w-full">
            <span className="text-xl">From:</span>
            <span className="text-lg">Khulna, Bnagladesh</span>
          </section>
        </section>
      </section>
    </div>
  );
}

export default AboutMe;
