import React from 'react';
import '../style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAppStore, faPython } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from '../FadeInSections'

function Skill () {

  return  (
    <div className="container" id="skills">
      <FadeInSection>
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">

            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="4x"/>
              <h3>Full-Stack Web Development</h3>
              <p>Previously, I worked as frontend/backend web developer and built 20+ RESTful web applications. Power user of Ruby on Rails framework and the JavaScript libraries such as React.js, Vue.js, Node.js, Express.js and Handlebars.js.</p>
              <p>Tech stack: JavaScript, HTML, CSS, SASS, LESS, PHP, PostgreSQL, MySQL, MongoDB</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faAppStore} size="4x"/>
              <h3>Software Development</h3>
              <p>I enjoy being part of a team to design, build, and deploy native iOS & Android mobile applications. My experience in mobile app development ranges from creating a real-estate property management app to a exciting 3D racing games.</p>
              <p>Tech stack: Java, C, C++, C#, Swift, Git, Docker, AWS</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Analytics</h3>
              <p>I understand the world through cleaning, transforming, visualizing, and storytelling data. I have experience in analyzing Big Data for a real estate company and higher education industry for better decision making of others.</p>
              <p>Tech stack: Python (NumPy, Pandas, Matplotlib, Seaborn, Sklearn), SQL, R, Snowflake, Domo, Tableau, Tensorflow</p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Skill;