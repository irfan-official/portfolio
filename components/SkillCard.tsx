import React from "react";

function SkillCard() {
  const icons = [
    {
      icon: "react-js-icon.svg",
      text: "React",
    },
    {
      icon: "nextjs-icon-svgrepo-com.svg",
      text: "Nextjs",
    },
    {
      icon: "nodejs-icon-svgrepo-com.svg",
      text: "Nodejs",
    },
    {
      icon: "expressjs.svg",
      text: "Expressjs",
    },
    {
      icon: "mongodb-icon-1.svg",
      text: "MongoDB",
    },
  ];

  return (
    <>
      {icons.map(({ icon, text }, index) => (
        <div
          key={index}
          className={`w-[15rem] h-[17rem] border border-white/15 hover:bg-white/10 cursor-pointer rounded-xl backdrop-blur-[5px] flex flex-col items-center justify-center gap-7 transition-all delay-80`}
        >
          <img
            src={`/${icon}`}
            alt=""
            className={`w-22 ${
              (text === "Nextjs" || text === "Expressjs") &&
              "overflow-hidden rounded-full bg-amber-50 border border-white"
            }`}
          />
          <h2 className=" w-full text-center text-4xl font-semibold">{text}</h2>
        </div>
      ))}
    </>
  );
}

export default SkillCard;
