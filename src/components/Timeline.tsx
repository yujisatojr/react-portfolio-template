import "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import TimelineItem from "./TimelineItem"; // Import the new component

interface TimelineProps {
  mode: string;
}

function Timeline({ mode }: TimelineProps) {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <TimelineItem
            mode={mode}
            date="2025 - 2026"
            icon={faBriefcase}
            title="Software Engineer Intern"
            location="Oujda, Marocco"
            description="Full-stack Development, API Development, User Experience"
          />
          <TimelineItem
            mode={mode}
            date="2024 - 2025"
            icon={faBriefcase}
            title="AI Engineer Intern"
            location="Bamako, Mali"
            description="ChatGPT Integration, AI Model Training, Natural Language Processing"
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
