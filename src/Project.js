import React from 'react';
import './style/App.css'
import mockup from './assets/img/mockup.png';
import mockup2 from './assets/img/mockup2.png';
import mockup3 from './assets/img/mockup3.png';
import mockup4 from './assets/img/mockup4.png';
import './assets/img/pexels-cameron-casey-1722183.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faLess, faYarn, faNodeJs, faNpm, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from './FadeInSections'

function Project() {

  return  (
    <div className="experience" id="project">

        <div className="content-0">
          <FadeInSection>
            <h2>Things I Created Before</h2>
            <h3>Web Application: datum.com
              (August 2020 - )</h3>
          </FadeInSection>

          <FadeInSection>
            <p>datum.com is my personal project to provide data science information and community to perspective data analyst/engineers in Japan. I used Ruby on Rails to create this unique website and implemented RESTful API and database-rich web application.</p>
            <p>Experience the website <a href="https://course--hub.herokuapp.com/" target="_blank" rel="noopener">HERE</a></p>
          </FadeInSection>

          <FadeInSection>
            <img src={mockup4} alt="preview4" />
          </FadeInSection>

          <FadeInSection>
            <ul>
              <li>Used:</li>
              <li>Ruby on Rails</li>
            </ul>
          </FadeInSection>
        </div>

        <div className="content-1">

          <FadeInSection>
            <h3>Brigham Young University - Hawaii
              (January 2020 - )</h3>
          </FadeInSection>

          <FadeInSection>
            <p>As a front-end web developer, I implemented the Brightspot CMS to improve the overall design of the school website of Brigham Young University - Hawaii by using Handlebars, LESS, JSON, JavaScript, and HTML. One of the highlights of this project was to reinvent the "Holokai Program of Study Module", which loads the CSV file of various areas of studies and lists all the majors available at the university. By implementing a more modern user interface (UX) and design, we achieved 13% higher website traffic.</p>
            <p>Experience the Hoʻokele Admissions module <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noopener">HERE</a></p>
            <p>Also experience the Holokai Programs of Study module <a href="https://holokai.prod.brigham-young.psdops.com/programs-of-study" target="_blank" rel="noopener">HERE</a></p>
          </FadeInSection>

          <FadeInSection>
            <img src={mockup} alt="preview" />
          </FadeInSection>

          <FadeInSection>
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
          </FadeInSection>
        </div>
        
        <div className="content-2">

          <FadeInSection>
            <h3>Real Estate Multi-Regression Analysis. (January - May 2020)</h3>
          </FadeInSection>

          <FadeInSection>
            <p>I worked as a Python developer for a real estate company in Japan. To help those who struggle to find housing in Japan, I used a multi-regression analysis to find a coefficient correlation from over 8000000 housing listings on Japan's No. 1 real estate website. Based on the data, I was able to provide specific housing recommendations according to clients’ unique needs accurately through statistical analysis.</p>
            <p>Read the sample storytelling of data <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noopener">HERE</a></p>
          </FadeInSection>

          <FadeInSection>
            <img src={mockup2} alt="preview2" />
          </FadeInSection>

          <FadeInSection>
            <ul>
              <li>Used:</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Sklearn</li>
              <li>Seaborn</li>
              <li>SQL</li>
              <li>Jupyter</li>
            </ul>
          </FadeInSection>
        </div>

        <div className="content-3">
          <FadeInSection>
            <h3>Android Application: Cat's Warzone. (September - December 2019)</h3>
          </FadeInSection>

          <FadeInSection>
            <p>This application is handcrafted on Android Studio using Java programming language. The program implements several GOF design patterns to accomplish more efficient performance to focus on the game without any interruption. The used Java design patterns are factory, strategy, observer, builder, singleton, template method, and facade.</p>
          </FadeInSection>

          <FadeInSection>
            <a href="https://play.google.com/store/apps/details?id=com.catswarzone" target="_blank" rel="noopener"><img id="content-3-img" src={mockup3} alt="preview3" /></a>
          </FadeInSection>
        </div>

    </div>
  );
}

export default Project;