import React from 'react';
import './skill.css';
import './pexels-lukas-574071.jpg';
import './pexels-pixabay-270404.jpg';

function Skill () {

  return  (
    <div class="skills" id="skills">
        <div class="boxes">
            <div class="box-1">
              <div class="flip-card">
                <div class="flip-card-inner" id="flip-one">
                  <div class="flip-card-front">
                    <div id="inner-content">
                      <h4>Software Development</h4>
                    </div>
                  </div>
                  <div class="flip-card-back" id="flip-card-back-one">
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
            <div class="box-2">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div id="inner-content">
                      <h4>Web Development</h4>
                    </div>
                  </div>
                  <div class="flip-card-back" id="flip-card-back-two">
                    <div id="inner-content-back">
                      <p>I have worked as a frontend / backend web developer in the higher education industry. Implementing effective designs to improve each user's experience (UX) is my drive.</p>
                      <br></br>
                      <p>Experience in JavaScript, React, HTML, CSS, PHP, Handlebars.js, LESS, PostgreSQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-3">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div id="inner-content">
                      <h4>Data analytics</h4>
                    </div>
                  </div>
                  <div class="flip-card-back" id="flip-card-back-three">
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