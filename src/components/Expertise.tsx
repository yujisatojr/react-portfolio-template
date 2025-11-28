import React from "react";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faAws,
  faCloudflare,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];

const labelsSecond = [
  "Rest API's",
  "GRAPHQL API's",
  "SQL",
  "Database",
  "TypeScript",
  "Python",
];

const labelsThird = [
  "AWS Services",
  "Lambda",
  "S3",
  "EventBridge",
  "RDS",
  "CloudWatch",
  "Cognito",
];

const labelsTesting = ["TDD", "Unit Tests", "Jest", "E2E"];

const labelsAi = [
  "Prompt Enginering",
  "Agentic AI",
  "Dev AI Tools",
  "GPT",
  "Cursor",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Front-End Development</h3>
            <p>
              Built and maintained a diverse array of web and mobile
              applications using modern technologies such as React and React
              Native, following sustainable patterns, clean architecture, and
              scalable design practices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Back-End Development</h3>
            <p>
              Develop and maintain REST and GraphQL APIs, integrating and
              modeling relational databases and applying clean architecture
              principles to deliver secure, reliable, and well-tested back-end
              services.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud Solutions</h3>
            <p>
              Develop features and application workflows directly on AWS
              services, using serverless functions, secure storage, managed
              databases, and event-driven integrations to deliver reliable
              functionality and smooth product behavior.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" />
            <h3>Testing</h3>
            <p>
              Develop features with a testing-first mindset, using TDD, unit
              tests, and E2E coverage to ensure reliability and prevent
              regressions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsTesting.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faMicrochip} size="3x" />
            <h3>AI Proficiency</h3>
            <p>
              Continuously improving skills in modern AI tooling to accelerate
              development, enhance problem-solving, and integrate intelligent
              workflows into daily work.{" "}
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsAi.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
