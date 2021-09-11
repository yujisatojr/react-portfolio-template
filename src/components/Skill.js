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
              <p>Tech stack: JavaScript, HTML5, CSS3, SASS, LESS, PHP, PostgreSQL, MySQL, SQL Developer, MongoDB, Postman, pgAdmin4</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faAppStore} size="4x"/>
              <h3>Mobile App Development</h3>
              <p>Design, build, and deploy native iOS & Android mobile applications. My experience in mobile app development ranges from creating a real-estate property management app to a fun shooting video games.</p>
              <p>Tech stack: Java, Swift5, SwiftUI, Xcode, Android Studio, Mendix Studio Pro</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="4x"/>
              <h3>Software Development</h3>
              <p>My experience in software development includes building an automated web-scraping program, an interactive chatting program, and implementing algorithms to solve various problems.</p>
              <p>Tech stack: C, C++, C#, Git, Docker, AWS (RDS, S3, EC2, Beanstalk, Cloud9), Firebase</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Science</h3>
              <p>Cleaning, transforming, visualizing, and storytelling data is how I attempt to understand the world. Experience in extracting/analyzing Big Data for a real estate company and higher education industry for better decision making. </p>
              <p>Tech stack: Python (NumPy, Pandas, Matplotlib, Seaborn, Sklearn), R, SQL, Snowflake, Domo, Tableau, Tensorflow</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faComments} size="4x"/>
              <h3>Leadership + Teamwork</h3>
              <p>Effective communicator and critical thinker with a background in communications and marketing. I love working in a collaborative setting, and my leadership skill is demonstrated in working as a scrum master at Enterprise Information Systems department at BYU-Hawaii.</p>
            </div>

            <div className="skill">
              <img src={faDomo} alt="domo" width="54px"/>
              <h3>Certifications</h3>
              <p>Proud member of Upsilon Pi Epsilon, a national honor society for computing sciences. Officially certified Data Specialist by Domo BI. Kaggle Expert. Professional background in business analysis using various business intelligence (BI) tools such as Domo, Tableau, and Microsoft Excel.</p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Skill;