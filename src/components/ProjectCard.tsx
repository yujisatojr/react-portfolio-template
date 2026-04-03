import React, { useState } from "react";
import "../components/ProjectCard.scss"; // Import component-specific SCSS

interface ProjectCardProps {
  imageSrc: string;
  projectUrl: string;
  title: string;
  description: string;
  mode: string; // 'dark' or 'light'
}

function ProjectCard({
  imageSrc,
  projectUrl,
  title,
  description,
  mode,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`project-card-wrapper ${mode} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={projectUrl} target="_blank" rel="noreferrer" className="project-image-link">
        <img src={imageSrc} className="project-thumbnail" alt="thumbnail" />
      </a>
      <div className="project-content">
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <h2 className="project-title">{title}</h2>
        </a>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
