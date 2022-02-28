import React from 'react';
import './style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAppStore, faPython } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from './FadeInSections'
import Chip from '@material-ui/core/Chip';

function Skill () {
  return  (
    <div className="container" id="skills">
      <FadeInSection>
        <div className="skills-container">
          <h1>Specialties</h1>
          <div className="skills-grid">

            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="4x"/>
              <h3>Full-Stack Web Development</h3>
              <p>Previously, I worked as a DevOps engineer and built 5+ RESTful web applications. Power user of Ruby on Rails framework and the JavaScript libraries such as React, Vue, Node, Express and Handlebars.</p>
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
              <p>I enjoy being part of an agile team to design, build, and deploy cross-platform software. My experience in software development ranges from building mobile applications to 2D/3D video games.</p>
              <p className="flex-chips">Tech stack: 
                <Chip variant="outlined" label="Java" />
                <Chip variant="outlined" label="C" />
                <Chip variant="outlined" label="C++" />
                <Chip variant="outlined" label="C#" />
                <Chip variant="outlined" label="Swift" />
                <Chip variant="outlined" label="Git" />
                <Chip variant="outlined" label="Docker" />
                <Chip variant="outlined" label="AWS" />
              </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Analysis & BI</h3>
              <p>I love to empower business through the utilization of ELT, data visualization, data warehousing, and automation. I have experience in analyzing corporate data for better decision making.</p>
              <p className="flex-chips">Tech stack: 
                <Chip variant="outlined" label="SQL" />
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="Pandas" />
                <Chip variant="outlined" label="Matplotlib" />
                <Chip variant="outlined" label="Seaborn" />
                <Chip variant="outlined" label="Sklearn" />
                <Chip variant="outlined" label="R" />
                <Chip variant="outlined" label="Snowflake" />
                <Chip variant="outlined" label="Domo" />
                <Chip variant="outlined" label="Tableau" />
                <Chip variant="outlined" label="Tensorflow" />
              </p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Skill;