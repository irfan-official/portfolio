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

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export default function MyTimeline() {
  const contentStyle = {
    background: "#b700ff3f",
    backdropFilter: "blur(2px)",
    color: "#fff",
  };

  const contentArrowStyle = { borderRight: "7px solid #b700ff" };

  return (
    <VerticalTimeline lineColor="#b700ff">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2011 - present"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<NextJs />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2010 - 2011"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<MongoDBIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2008 - 2010"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<ExpressjsIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2006 - 2008"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<NodejsIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="April 2013"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<ReactIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="November 2012"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<JavaScriptIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2002 - 2006"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<CssIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2002 - 2006"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<HtmlIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        date="2002 - 2006"
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<FigmaIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
