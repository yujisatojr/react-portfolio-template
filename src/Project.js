import React from 'react';
import './App.css'
import mockup from './mockup.png';
import './pexels-cameron-casey-1722183.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faLess, faYarn, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faPython,  } from '@fortawesome/free-brands-svg-icons';

function Project() {

  return  (
    <div class="experience" id="project">
        <div class="content-1">
            <h2>Projects & Case Studies</h2>
            <h3>Brigham Young University - Hawaii
              (January 2020 - Current)</h3>
            <p>As a front-end web developer, I implemented the Brightspot CMS to improve the overall design of the school website of Brigham Young University - Hawaii by using Handlebars, LESS, JSON, JavaScript, and HTML. One of the highlights of this project was to reinvent the "Holokai Program of Study Module", which loads the CSV file of various areas of studies and lists all the majors available at the university. By implementing a more modern user interface (UX) and design, we achieved 13% higher website traffic.</p>
            <img src={mockup} alt="preview" />
            <ul>
              <li>Used:</li>
              <li><FontAwesomeIcon icon={faHtml5} size="lg"/></li>
              <li><FontAwesomeIcon icon={faCss3Alt} size="lg"/></li>
              <li><FontAwesomeIcon icon={faJs} size="lg"/></li>
              <li><FontAwesomeIcon icon={faLess} size="lg"/></li>
              <li><FontAwesomeIcon icon={faYarn} size="lg"/></li>
              <li><FontAwesomeIcon icon={faNodeJs} size="lg"/></li>
              <li><FontAwesomeIcon icon={faNpm} size="lg"/></li>
            </ul>
        </div>
        <div class="content-2">
            <h3>Espalhar LLC. (January - May 2020)</h3>
            <p>I worked as a Python developer for a real estate company in Japan. To help those who struggle to find housing in Japan, I used a multi-regression analysis to find a coefficient correlation from over 8000000 housing listings on Japan's No. 1 real estate website. Based on the data, I was able to provide specific housing recommendations according to clients’ unique needs accurately through statistical analysis.</p><br></br>
            <ul>
              <li>Used:</li>
              <li><FontAwesomeIcon icon={faPython} size="lg"/></li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Sklearn</li>
              <li>Seaborn</li>
              <li>SQL</li>
              <li>Jupyter</li>
            </ul>
        </div>
    </div>
  );
}

export default Project;