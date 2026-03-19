import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Zapier",
  "Make (Integromat)",
  "Notion",
  "Notion API",
  "Google Workspace",
  "Gmail",
  "Google Drive",
  "Google Sheets",
  "Slack",
  "Webhooks",
];

const labelsSecond = [
  "Python",
  "REST APIs",
  "Postman",
  "SQL",
  "PostgreSQL",
  "Pandas",
  "CSV Processing",
  "Logging",
  "Git",
  "GitHub",
];

const labelsThird = [
  "Process Documentation",
  "SOP Building",
  "UAT Support",
  "QA Validation",
  "Incident Triage",
  "Ticket-based Support",
  "Stakeholder Comms",
  "Continuous Improvement",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Workflow Automation & Integrations</h3>
            <p>
              I build automations that remove repetitive admin work-like routing
              requests, creating tasks, filing attachments, and updating CRMs.
              I connect tools like Notion, Gmail, Google Sheets, and Slack using
              Zapier/Make, webhooks, and clean automation logic.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tool stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Python Scripting & Data Automation</h3>
            <p>
              I write Python scripts to automate data workflows—ingestion,
              transformation, validation, and exports, so teams spend less time in
              spreadsheets and more time executing. I also handle API testing and
              database checks to ensure outputs are accurate and reliable.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Technical Ops Support (QA, UAT, Documentation)</h3>
            <p>
              I support teams during testing and rollout by documenting issues,
              validating fixes, and keeping processes organized. My background in
              systems support helps me troubleshoot fast, communicate clearly,
              and maintain clean documentation for handover and audit readiness.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Strengths:</span>
              {labelsThird.map((label, index) => (
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