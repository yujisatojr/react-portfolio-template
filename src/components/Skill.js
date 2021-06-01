import React from 'react';
import '../style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import faDomo from '../assets/img/faDomo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faReact, faVuejs, faAppStore, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faLess, faYarn, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
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
              <p>Worked as both frontend/backend web developer to build from simple websites to RESTful API. Power user of Ruby on Rails framework and the JavaScript libraries such as React.js, Vue.js, Node.js, Express.js and Handlebars.js.</p>
              <p>Tech stack: JavaScript, HTML, CSS, SASS, LESS, PHP, Django, MongoDB, MySQL, and PostgreSQL.</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faAppStore} size="4x"/>
              <h3>Mobile App Development</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="4x"/>
              <h3>Software Development</h3>
              <p>My experience in software development & mobile/web applications development includes building iOS/Android applications, an automated web-scraping program, and Mendix applications.</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="4x"/>
              <h3>Data Analytics</h3>
              <p>Data analysis is how I attempt to interact and understand the world. I have professonal experience of analyzing dataset contains over 800000+ rows for a real estate company in Japan. Experience in Python libralies (NumPy, Pandas, Matplotlib, Seaborn, and Sklearn), R, MySQL, PostgreSQL, Tensorflow</p>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faBrain} size="4x"/>
              <h3>Machine Learning</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

            <div className="skill">
              <img src={faDomo} alt="domo" width="54px"/>
              <h3>BI Intelligence</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Skill;