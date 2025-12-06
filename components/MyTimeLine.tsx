"use client";

import NextJs from "@/icons/NextJsIcon";
import ReactIcon from "@/icons/ReactIcon";
import ExpressjsIcon from "@/icons/ExpressjsIcon";
import MongoDBIcon from "@/icons/MongoDBIcon";
import NodejsIcon from "@/icons/NodejsIcon";
import HtmlIcon from "@/icons/HtmlIcon";
import CssIcon from "@/icons/CssIcon";
import JavaScriptIcon from "@/icons/JavaScriptIcon";
import FigmaIcon from "@/icons/FigmaIcon";
import GraduationIcon from "@/icons/GraduationIcon";
import { FaGraduationCap } from "react-icons/fa";
import ProgrammingHeroIcon from "@/icons/ProgrammingHeroIcon";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Span } from "next/dist/trace";

export default function MyTimeline() {
  const contentStyle = {
    background: "#b700ff3f",
    backdropFilter: "blur(2px)",
    color: "#fff",
  };

  const contentArrowStyle = { borderRight: "7px solid #b700ff" };

  return (
    <VerticalTimeline lineColor="#b700ff">
      {/* 2025 - Present | Learning Next.js */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2025 - Present"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<NextJs />}
      >
        <h3 className="vertical-timeline-element-title">Learning Next.js 16</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Advanced Frontend
        </h4>
        <p>
          Currently learning Next.js 16 through YouTube and paid Udemy courses
          to strengthen full-stack skills.
        </p>
      </VerticalTimelineElement>
      {/* Graduation */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="October 2025"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={
          <span className="w-full h-full text-5xl">
            <FaGraduationCap size={60} />
          </span>
        }
      >
        <h3 className="vertical-timeline-element-title">
          Graduation (B.Sc in CSE)
        </h3>
        <h4 className="vertical-timeline-element-subtitle">BAUET, Natore</h4>
        <p>
          Graduated with CGPA 3.02 and preparing for full-stack developer
          opportunities.
        </p>
      </VerticalTimelineElement>
      {/* Programming Hero */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="July 2025 - Present"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={
          <span className="w-full h-full text-5xl">
            <ProgrammingHeroIcon />
          </span>
        }
      >
        <h3 className="vertical-timeline-element-title">
          Programming Hero Level-1 Web Development Course
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Final Skill Polishing
        </h4>
        <p>
          Joined Programming Hero to refine full-stack skills, strengthen
          project building, and prepare for job-ready development tasks.
        </p>
      </VerticalTimelineElement>

      {/* Backend Learning (Node.js + Express.js) */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="Dec 2024 - 2025"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<NodejsIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Node.js Backend Foundations
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Backend Development
        </h4>
        <p>
          Began backend journey with Node.js from YouTube tutorials (Chai aur
          Code, Piyush Garg node series).
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="Dec 2024 - 2025"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<ExpressjsIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Express.js & API Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Backend Framework
        </h4>
        <p>
          Learned Express.js routing, middleware, REST APIs, authentication, and
          backend project structure.
        </p>
      </VerticalTimelineElement>

      {/* Backend Domination + MongoDB */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2025"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<MongoDBIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Backend Domination Course
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Sheryians Coding School
        </h4>
        <p>
          Completed advanced backend topics including MongoDB, authentication,
          validation, and scalable API design.
        </p>
      </VerticalTimelineElement>

      {/* React */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="July 2024 - August 2024"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<ReactIcon />}
      >
        <h3 className="vertical-timeline-element-title">React Development</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Frontend Framework
        </h4>
        <p>
          Learned React, hooks, components, and built multiple projects to
          prepare for backend learning.
        </p>
      </VerticalTimelineElement>

      {/* JavaScript */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="April 2024 - June 2024"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<JavaScriptIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          JavaScript Foundations
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Web Development Core
        </h4>
        <p>
          Learned JavaScript fundamentals and built small apps from Sheryians
          Coding School YouTube tutorials.
        </p>
      </VerticalTimelineElement>

      {/* CSS */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="March 2024"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<CssIcon />}
      >
        <h3 className="vertical-timeline-element-title">CSS & UI Styling</h3>
        <h4 className="vertical-timeline-element-subtitle">Frontend Basics</h4>
        <p>
          Learned layout concepts, responsive design, flexbox, grid, and basic
          animations.
        </p>
      </VerticalTimelineElement>

      {/* HTML */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="February 2024"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<HtmlIcon />}
      >
        <h3 className="vertical-timeline-element-title">HTML Fundamentals</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Starting Web Journey
        </h4>
        <p>
          First step into web development — learned HTML structure, tags, and
          semantic markup.
        </p>
      </VerticalTimelineElement>

      {/* Figma */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="January 2024"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<FigmaIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          UI Design with Figma
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Design Foundations
        </h4>
        <p>
          Started with Figma to learn UI/UX basics before diving into frontend
          development.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
