import React from 'react';
import './style/skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons'
import { faJava, faReact, faPython } from '@fortawesome/free-brands-svg-icons';

function Skill () {

  return  (
    <div className="skills" id="skills">
        <div className="boxes">
            <div className="box-1">
              <div className="flip-card">
                <div className="flip-card-inner" id="flip-one">
                  <div className="flip-card-front">
                    <div id="inner-content">
                      <FontAwesomeIcon icon={faJava} size="3x"/>
                      <h4>Software Development</h4>
                    </div>
                  </div>
                  <div className="flip-card-back" id="flip-card-back-one">
                    <div id="inner-content-back">
                      <p>To me, coding is a way to turn ideas into tangible solutions and business values.</p>
                      <p>My experience includes developing an Android application, web-scraping program, and Mendix applications.</p>
                      <br></br>
                      <p>Experience in Python, Java, Ruby, Swift</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-2">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div id="inner-content">
                      <FontAwesomeIcon icon={faReact} size="3x"/>
                      <h4>Web Development</h4>
                    </div>
                  </div>
                  <div className="flip-card-back" id="flip-card-back-two">
                    <div id="inner-content-back">
                      <p>I have worked as a frontend / backend web developer in the higher education industry. Implementing effective designs to improve each user's experience (UX) is my drive.</p>
                      <br></br>
                      <p>Experience in JavaScript, React, HTML, CSS, PHP, Handlebars.js, LESS, PostgreSQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div id="inner-content">
                      <FontAwesomeIcon icon={faPython} size="3x"/>
                      <h4>Data Analytics</h4>
                    </div>
                  </div>
                  <div className="flip-card-back" id="flip-card-back-three">
                    <div id="inner-content-back">
                      <p>Data analysis is how I attempt to interact and understand the world. I have professonal experience of analyzing dataset contains over 800000+ rows for a real estate company in Japan.</p>
                      <br></br>
                      <p>Experience in Pandas, R, SQL, Seaborn, Sklearn, Tensorflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Skill;