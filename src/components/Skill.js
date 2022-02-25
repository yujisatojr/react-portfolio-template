import React from 'react';
import '../style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAppStore, faPython } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from '../FadeInSections'
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
              <h3>Full-Stack Development</h3>
              <p>Previously, I worked as a frontend/backend web developer and built 20+ RESTful web applications. Power user of Ruby on Rails framework and the JavaScript libraries such as React.js, Vue.js, Node.js, Express.js and Handlebars.js.</p>
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
              <p>I enjoy being part of an agile team to design, build, and deploy desktop & mobile applications. My experience in software development ranges from building an Android mobile application to exciting 2D/3D video games.</p>
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
              <h3>Data Analytics & BI</h3>
              <p>I understand the world through cleaning, transforming, visualizing, and storytelling data. I have experience in analyzing corporate data for a real estate company and higher education industry for better decision making.</p>
              <p className="flex-chips">Tech stack: 
                <Chip variant="outlined" label="SQL" />
                <Chip variant="outlined" label="Python" />
                <Chip variant="outlined" label="NumPy" />
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