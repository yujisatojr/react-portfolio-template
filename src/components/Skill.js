import React from 'react';
import '../style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import faDomo from '../assets/img/faDomo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAppStore, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
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
              <p>Worked as both frontend/backend web developer to build from a single-page application (SPA) to advanced RESTful web applications. Power user of Ruby on Rails framework and the JavaScript libraries such as React.js, Vue.js, Node.js, Express.js and Handlebars.js.</p>
              <p>Tech stack: JavaScript, HTML5, CSS3, SASS, LESS, PHP, PostgreSQL, MySQL, MongoDB, Postman, pgAdmin4</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faAppStore} size="4x"/>
              <h3>Software Development</h3>
              <p>Design, build, and deploy native iOS & Android mobile applications. My experience in mobile app development ranges from creating a real-estate property management app to a fun shooting video games.</p>
              <p>Tech stack: Java, C, C++, C#, Git, Docker, AWS, Swift5 </p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Science</h3>
              <p>Cleaning, transforming, visualizing, and storytelling data is how I attempt to understand the world. Experience in extracting/analyzing Big Data for a real estate company and higher education industry for better decision making. </p>
              <p>Tech stack: Python (NumPy, Pandas, Matplotlib, Seaborn, Sklearn), R, SQL, Snowflake, Domo, Tableau, Tensorflow</p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Skill;