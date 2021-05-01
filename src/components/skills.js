import React from "react"
import data from "../yourdata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <FontAwesomeIcon icon={skill.icon} size="3x" />
                <h4>{skill.h5}</h4>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
