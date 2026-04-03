import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import { useState } from "react";

interface ExpertiseCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  labels: string[];
  mode: string; // 'dark' or 'light'
}

function ExpertiseCard({
  icon,
  title,
  description,
  labels,
  mode,
}: ExpertiseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const cardStyle = {
    transition: "all 0.3s ease-in-out",
    padding: "20px",
    transform: isHovered ? "scale(1.03)" : "scale(1)",
    boxShadow: isHovered ? "0 8px 16px rgba(0,0,0,0.2)" : "none",
    // add border radius and background color based on the mode
    borderRadius: "15px",
    border: "2px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: mode === "dark" ? "#111827" : "white", // Background for the card
    color: mode === "dark" ? "white" : "#0d1116", // Text color for the card
  };

  const chipClassName = mode === "dark" ? "chip-dark" : "chip-light"; // Assuming you'll define chip-light in SCSS

  return (
    <div
      className="skill"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        color={mode === "dark" ? "white" : "#0d1116"}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="flex-chips">
        <span className="chip-title">Tech stack: </span>
        {labels.map((label, index) => (
          <Chip key={index} className={chipClassName} label={label} />
        ))}
      </div>
    </div>
  );
}

export default ExpertiseCard;
