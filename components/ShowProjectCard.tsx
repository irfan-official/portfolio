import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function ShowProjectCard() {
  const projectData = [
    {
      liveLink: "https://foodlovers.irfans.dev",
      imagePath: "/projects/FoodReviews.png",
      title: "Food Lovers",
      overviews:
        "A full-stack social platform for sharing food reviews with images,comments, and reactions.",
      highlightDescriptions: [
        "Built review, comment, and reaction features using a custom REST API.",
        "Added Firebase Authentication with Google OAuth and email/password login.",
        "Secured routes so only logged-in users can post comments or interact.",
      ],
      coreTech: [
        "React",
        "REST",
        "Firebase",
        "Google OAuth",
        "Express",
        "MongoDB",
        "NodeJs",
        "JavaScript",
      ],
    },
    {
      liveLink: "https://shopify.irfans.dev",
      imagePath: "/projects/Shopify.jpg",
      title: "Shopify",
      overviews:
        "A full-stack e-commerce platform with secure authentication, product management, and user verification.",
      highlightDescriptions: [
        "Built product CRUD, user profiles, and a review system with comments and replies.",
        "Integrated NextAuth with Google OAuth and email login, including email verification via Nodemailer.",
        "Implemented proxy-based route validation to ensure only authenticated users access protected pages.",
      ],
      coreTech: [
        "Next.js 16",
        "TypeScript",
        "NextAuth",
        "Google OAuth",
        "Express",
        "MongoDB",
        "Mongoose",
        "Nodemailer",
        "TailwindCSS",
      ],
    },
    {
      liveLink: "https://ph-assignment-08-alpha.vercel.app",
      imagePath: "/projects/MyStore.png",
      title: "My Store",
      overviews:
        "A React-based app store–style platform for browsing and installing apps, focused on clean and responsive UI.",
      highlightDescriptions: [
        "Built an app-store-inspired interface for discovering and installing apps.",
        "Designed a responsive and modern UI using React, TailwindCSS, and SweetAlert.",
        "Implemented smooth user interactions with a lightweight and optimized frontend flow.",
      ],
      coreTech: ["React", "TailwindCSS", "SweetAlert", "JavaScript"],
    },
    {
      liveLink: "https://petcare.irfans.dev",
      imagePath: "/projects/PetCare.png",
      title: "Pet Care",
      overviews:
        "A UI-focused pet care application built with React and Firebase Authentication.",
      highlightDescriptions: [
        "Created a clean and responsive UI for a smooth user experience.",
        "Integrated Firebase Authentication with email/password and Google OAuth.",
        "Developed a fully front-end experience with no backend database.",
      ],
      coreTech: [
        "React",
        "Firebase Auth",
        "Google OAuth",
        "TailwindCSS",
        "JavaScript",
      ],
    },
  ];
  return projectData.map(
    (
      {
        liveLink,
        imagePath,
        title,
        overviews,
        highlightDescriptions,
        coreTech,
      },
      index1
    ) => (
      <div
        key={index1}
        className="sm:max-w-[38%] lg:max-w-[70%] xl:max-w-[38%] max-w-full sm:min-w-120  rounded-lg border border-slate-200/20 flex items-center justify-center gap-0 sm:gap-2 overflow-clip bg-white/10 backdrop-blur-[5px] p-2 flex-col sm:flex-row"
      >
        <section className="_project_title_ font-semibold text-lg sm:hidden border-b border-b-slate-100/10 text-center w-full pb-1">
          {title}
        </section>
        <section className="_left_ _image_ w-full sm:w-[14rem] h-full  relative cursor-pointer ">
          <img
            src={imagePath}
            alt={title}
            className="w-full h-[22rem] object-cover object-top relative z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-white/0 z-20 flex items-center justify-center font-semibold">
            <a
              href={liveLink}
              target="_blank"
              className="border-2 border-white text-white bg-black/55 backdrop-blur-[1px] rounded-full px-5 py-3 flex items-baseline gap-2 justify-center cursor-pointer hover:bg-black/70 hover:text-white/60"
            >
              <span className="c">
                <FaExternalLinkAlt />
              </span>
              <span className="c">Live</span>
            </a>
          </div>
        </section>
        <section className="_right_ _details_ flex flex-col items-center gap-2 px-1 py-3 sm:py-0  w-full sm:w-[70%] h-full">
          <section className="_project_title_ hidden sm:block font-semibold text-lg">
            {title}
          </section>
          <section className="_project_ _one_line_overview_ border-t border-t-slate-100/10 w-full sm:pt-1">
            {overviews}
          </section>
          <section className="_project_ _bullet_points_ flex flex-col items-start justify-center border-t border-t-slate-100/10 w-full pt-1 gap-1">
            {highlightDescriptions.map((text, index2) => (
              <section
                key={`${index2}+${text.length}`}
                className="_section_1_ flex items-baseline justify-start gap-2"
              >
                <span>●</span>
                <span className="">{text}</span>
              </section>
            ))}
          </section>
          <section className="_project_ _highlight_ h-full flex flex-wrap gap-2 border-t border-t-slate-100/10 w-full pt-1">
            {coreTech.map((techName, index3) => (
              <span
                key={`${index3}+${techName}`}
                className="px-3 py-2 border border-slate-100/5 text-white text-[0.67rem] bg-black rounded-sm"
              >
                {techName}
              </span>
            ))}
          </section>
        </section>
      </div>
    )
  );
}

export default ShowProjectCard;
