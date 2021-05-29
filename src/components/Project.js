import React from 'react';
import '../style/App.css'
import '../style/project.css';
import mock1 from '../assets/img/mock1.png';
import mock2 from '../assets/img/mock2.png';
import mock3 from '../assets/img/mock3.png';
import mock4 from '../assets/img/mock4.png';
import mock5 from '../assets/img/mock5.png';
import mock6 from '../assets/img/mock6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faLess, faYarn, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from '../FadeInSections'

function Project() {

  return  (
    <div className="projects-container" id="project">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.datumlearn.com/"><img src={mock1} className="zoom" alt="domo" width="100%"/></a>
          <h2>Integrated Learning Platform: Datum</h2>
          <p>Datum is an online educational platform that provides high-quality, data science focused learning resources in the Japanese language</p>
          <p>Used: Ruby on Rails, ReactJS, HTML, SCSS, PostgreSQL</p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.co.jp/"><img src={mock2} className="zoom" alt="domo" width="100%"/></a>
          <h2>Real Estate Asset Management App</h2>
          <p>This mobile application allows realtors in Japan to securely manage their accounts and accompanying property information.</p>
          <p>Used: Ruby on Rails</p>
        </div>
        <div className="project">
          <a href="https://www.byuh.edu/covid-19-case-management"><img src={mock3} className="zoom" alt="domo" width="100%"/></a>
          <h2>COVID-19 Case Management</h2>
          <p>Developed online charts for COVID number tracking at Brigham Young University - Hawaii using JavaScript.</p>
          <p>Used: JavaScript, HTML, CSS</p>
        </div>
        <div className="project">
          <a href="https://holokai.byuh.edu/programs-of-study"><img src={mock4} className="zoom" alt="domo" width="100%"/></a>
          <h2>Holokai Programs of Study</h2>
          <p>hello</p>
          <p>Used: Java, Handlebars, LESS, JSON</p>
        </div>
        <div className="project">
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"><img src={mock5} className="zoom" alt="domo" width="100%"/></a>
          <h2>Hoʻokele Admissions</h2>
          <p>hello</p>
          <p>Used: Java, Handlebars, LESS, JSON</p>
        </div>
        <div className="project">
          <a href="https://play.google.com/store/apps/details?id=com.catswarzone"><img src={mock6} className="zoom" alt="domo" width="100%"/></a>
          <h2>Cat's Warzone</h2>
          <p>This is a simple, family-friendly, and above all, the cutest shooting game on the Google Play store. All you have to do is simply tap your screen and catch some yummy fishes. Compete with your friend to get a high score!</p>
          <p>Used: Java, Android Studio</p>
        </div>
      </div>
    </div>
  );
}

export default Project;