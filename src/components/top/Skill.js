import React from 'react';
import './style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAppStore, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@material-ui/core/Chip';

function Skill () {
  return  (
    <div className="container" id="skills">
        <div className="skills-container">
          <h1>Specialties</h1>
          <div className="skills-grid">

            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="4x"/>
              <h3>Full Stack Web Development</h3>
              <p>My experience in web development includes building 10+ scalable web apps and having proficiency in top-tier JavaScript libraries such as React, Vue, Node, Express, and Handlebars, as well as the Ruby on Rails framework.</p>
              <p className="flex-chips">Tech stack: 
                <Chip variant="outlined" label="JavaScript" />
                <Chip variant="outlined" label="HTML" />
                <Chip variant="outlined" label="CSS" />
                <Chip variant="outlined" label="SASS" />
                <Chip variant="outlined" label="LESS" />
                <Chip variant="outlined" label="PHP" />
                <Chip variant="outlined" label="PostgreSQL" />
                <Chip variant="outlined" label="MySQL" />
                <Chip variant="outlined" label="MongoDB" />
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faAppStore} size="4x"/>
              <h3>Software Development</h3>
              <p>I've collaborated with agile teams to design and implement cross-platform solutions. My diverse experience enables me to approach each project with a multifaceted perspective, bringing fresh insights to the table.</p>
              <p className="flex-chips">Tech stack: 
                <Chip variant="outlined" label="Java" />
                <Chip variant="outlined" label="C" />
                <Chip variant="outlined" label="C++" />
                <Chip variant="outlined" label="C#" />
                <Chip variant="outlined" label="Swift" />
                <Chip variant="outlined" label="Unity" />
                <Chip variant="outlined" label="Git" />
                <Chip variant="outlined" label="Docker" />
                <Chip variant="outlined" label="AWS" />
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Analysis & BI</h3>
              <p>I'm driven to help clients by leveraging data governance and process automation. My background in analyzing corporate data helps me to deliver valuable insights that facilitate informed decision-making.</p>
              <p className="flex-chips">Tech stack: 
                <Chip variant="outlined" label="SQL" />
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="Pandas" />
                <Chip variant="outlined" label="Matplotlib" />
                <Chip variant="outlined" label="Sklearn" />
                <Chip variant="outlined" label="R" />
                <Chip variant="outlined" label="Excel" />
                <Chip variant="outlined" label="Snowflake" />
                <Chip variant="outlined" label="Domo BI" />
                <Chip variant="outlined" label="Tableau" />
              </p>
            </div>

          </div>
        </div>
    </div>
  );
}

export default Skill;