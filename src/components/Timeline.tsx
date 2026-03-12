import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Air Traffic Management Research Institute (ATMRI) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - May 2026"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Air Traffic Management Research Institute (ATMRI), Singapore</h4>
            <p>
              I develop and experiment with AI systems that improve multi-accent air traffic control speech recognition and information extraction, using deep learning, large language models, and knowledge graphs to support safer and more reliable aviation operations.
            </p>
          </VerticalTimelineElement>

          {/* Stealth Startup */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024 - Feb 2025"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Pursoo (Startup), Singapore</h4>
            <p>
              Developed an AI-powered candidate recommendation platform with graph database similarity search, PII handling via Presidio, and advanced resume formatting using LLMs.
            </p>
          </VerticalTimelineElement>

          {/* NTU Student Assistant */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Nanyang Technological University, Singapore</h4>
            <p>
              Developed a multi-agent RAG chatbot for course recommendations, integrating FAISS, Sentence Transformers, and LLaMA 3.1 models.
            </p>
          </VerticalTimelineElement>

          {/* Nanoveu */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Nanoveu, Singapore</h4>
            <p>
              Reduced latency for 2D-to-3D conversion with Mask R-CNN and hyperparameter tuning on Deeplab V3 for segmentation quality.
            </p>
          </VerticalTimelineElement>

          {/* Mu Sigma */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2021 - Jun 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Decision Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Mu Sigma, India</h4>
            <p>
              Designed executive dashboards, built bankruptcy prediction models, and developed sentiment analysis tools, enabling strategic insights for a U.S. energy company.
            </p>
          </VerticalTimelineElement>

          {/* Malviya National Institute of Technology */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2019 - Jul 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">MNIT, India</h4>
            <p>
              Developed classification models using TF-IDF and BoW for retail analytics, deriving insights from customer reviews and demographics.
            </p>
          </VerticalTimelineElement>

          {/* NUS */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2019 - Jan 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">National University of Singapore</h4>
            <p>
              Built IoT systems for real-time analysis of RFID data using Azure IoT Hub and Power BI to optimize bus passenger congestion.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
