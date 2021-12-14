import React from 'react';
import '../style/App.css'
import myProfile from '../assets/img/profile.jpeg';
import FadeInSection from '../FadeInSections'
import { Button } from '@material-ui/core';

function About() {

  return  (
    <div className="container" id="about">
      <FadeInSection>
      <div className="about-section">
        <div className="content">
          <h1>About Me</h1>
          <p>Hi! My name is Yuji. I am currently pursuing a bachelor's degree in computer science at Brigham Young University - Hawaii (Expected graduation April 2022). I also work as a developer/analyst at my university's Enterprise Information Systems department, developing web applications for a diverse population of 3,200 students and faculty members. Throughout my career, I have always found it rewarding to understand the needs of each individual client and solve their problems through the use of emerging technology.</p>
          <p>Specialties: software development, full-stack web development, REST API, iOS/Android mobile applications development, data analysis, statistical modelling, and machine learning.</p>
          <p>If I am not coding, you can find me hiking, surfing, traveling, playing the guitar, taking photographs, or hanging out with my wife.</p>
          <a href="#contact"><Button variant="outlined">Contact</Button></a>
        </div>
        <div className="image-wrapper">
          <img src={myProfile} alt="myProfile" />
        </div>
      </div>
      </FadeInSection>
    </div>
  );
}

export default About;