import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineItemProps {
  title: string;
  location: string;
  description: string;
  date: string;
  icon: IconDefinition; // e.g., faBriefcase
  mode: string; // 'dark' or 'light'
}

function TimelineItem({
  title,
  location,
  description,
  date,
  icon,
  mode,
}: TimelineItemProps) {
  const contentStyle =
    mode === "dark"
      ? { background: "#b5c4e3", color: "white" } // Dark mode colors for content
      : { background: "white", color: "#0d1116" }; // Light mode colors for content

  const contentArrowStyle =
    mode === "dark"
      ? { borderRight: "7px solid  #0c2454" }
      : { borderRight: "7px solid  white" };

  const iconStyle = { background: "#5000ca", color: "rgb(39, 40, 34)" }; // Keep original icon style

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ ...contentStyle, transition: "all 0.5s ease-in-out" }}
      contentArrowStyle={contentArrowStyle}
      date={date}
      iconStyle={iconStyle}
      icon={<FontAwesomeIcon icon={icon} />}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}

export default TimelineItem;
