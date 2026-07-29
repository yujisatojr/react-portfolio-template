import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Timeline.scss";

type TimelineItem = {
  date: string;
  title: string;
  subtitle: string;
  details: ReactNode;
};

const education: TimelineItem[] = [
  {
    date: "2020",
    title: "10th | MSBSHSE",
    subtitle: "Shri Sant Dnyaneshwar Madhyamik Vidyalaya Kothrud, Pune",
    details: <>Percentage: <strong>93 / 100</strong></>,
  },
  {
    date: "2020 – 2022",
    title: "12th | MSBSHSE",
    subtitle: "MIT Junior College, Kothrud, Pune",
    details: <>Percentage: <strong>78 / 100</strong></>,
  },
  {
    date: "2022 – 2026",
    title: "B.Tech. – Computer Engineering",
    subtitle: "MIT Academy of Engineering, Pune",
    details: <>CGPA: <strong>9.31 / 10</strong></>,
  },
];

const career: TimelineItem[] = [
  {
    date: "Jun – Aug 2024",
    title: "Full Stack Web Developer Intern",
    subtitle: "Core Decimal Solutions",
    details:
      "Contributed to Project Planner, a full-stack interactive web application. Built responsive UIs using ReactJS, developed server-side APIs with ExpressJS, and handled MySQL database operations including schema design and query optimization.",
  },
  {
    date: "Jun – Jul 2025",
    title: "Summer Intern – Node.js",
    subtitle: "Celebal Technologies (Remote)",
    details:
      "Implemented secure JWT authentication and bcrypt password hashing. Engineered RESTful APIs for all CRUD operations with data validation. Integrated third-party APIs for real-time flight data into the application's chatbot with error handling and retry logic. Built file upload functionality using Multer with single and multiple file support.",
  },
  {
    date: "Jul 2025 – Jun 2026",
    title: "Digital Applications Intern",
    subtitle: "Colgate Global Business Services (CGBS) | GIT Team",
    details:
      "Automated end-to-end intake for GDA Digital Applications using Google Forms, Apps Script, and Jira REST APIs across 13+ request archetypes including SFMC, Data Cloud, Web Tagging, GDPR, and Gigya workflows. Engineered rule-based workflows for Salesforce Marketing Cloud and Data Cloud intakes. Designed a Customer Engagement Dashboard with dynamic filters and responsive UI. Provided AEM Redirects Console (ARC) support in production and authored documentation for the automation suite and Windows setup guides.",
  },
  {
    date: "Jul 2026 – Present",
    title: "Associate Consultant",
    subtitle: "Oracle Financial Services",
    details: null,
  },
];

function TimelineSection({ items, icon }: { items: TimelineItem[]; icon: typeof faBriefcase }) {
  return (
    <div className="vtimeline">
      <div className="vtimeline__line" />
      {items.map((item, i) => (
        <div key={`${item.date}-${i}`} className="vtimeline__item">
          <div className="vtimeline__dot">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="vtimeline__date">{item.date}</div>
          <div className="vtimeline__card">
            <h3 className="vtimeline__title">{item.title}</h3>
            <h4 className="vtimeline__subtitle">{item.subtitle}</h4>
            {item.details && <p className="vtimeline__details">{item.details}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>
        <TimelineSection items={education} icon={faGraduationCap} />
        <h1>Career Journey</h1>
        <TimelineSection items={career} icon={faBriefcase} />
      </div>
    </div>
  );
}

export default Timeline;
