import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2026 - Present"
            iconStyle={{ background: '#3379a8', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Information System Analyst II</h3>
            <h4 className="vertical-timeline-element-subtitle">Bureau of Internal Revenue</h4>
            <p>
              Increased operational efficiency by combining advanced technical support with API and database validation, automating repetitive workflows using Python, and supporting large-scale system deployments with structured documentation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2026"
            iconStyle={{ background: '#3379a8', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Maintenance Technologist II</h3>
            <h4 className="vertical-timeline-element-subtitle">Philippine Statistics Authority</h4>
            <p>
              Strengthened enterprise system reliability by delivering Tier 1–2 support, validating APIs and databases during testing, supporting national-scale deployments, automating repetitive workflows with Python, and maintaining audit-ready documentation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: '#3379a8', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Information System Analyst I</h3>
            <h4 className="vertical-timeline-element-subtitle">Philippine Statistics Authority</h4>
            <p>
              Ensured system reliability by monitoring backend operations, leading test validation for deployments, resolving cross-functional application issues, and delivering clear technical documentation and user training.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#3379a8', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Technical Support Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Competitive Card Solutions Phils. Inc.</h4>
            <p>
              Delivered enterprise technical support, resolved recurring system issues through root cause analysis, and supported QA validation processes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;