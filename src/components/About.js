import React from 'react';
import '../style/App.css'
import myProfile from '../assets/img/profile.jpg';
import FadeInSection from '../FadeInSections'
import { Button } from '@material-ui/core';

function About() {

  return  (
    <div className="container" id="about">
      <FadeInSection>
      <div className="about-section">
        <div className="content">
          <h1>About Me</h1>
          <p>Hi! My name is Yuji. I am a self-motivated developer and passionate about utilizing technology to turn creative ideas into tangible business values. I believe that using the right digital tools can maximize our ability to serve others and enhance each user’s experience. I am also a committed life-long learner and eager to implement more efficient algorithms.</p>
          <p>Specialties: software development, mobile & web applications development, RESTful API, data analysis, data visualization, machine learning.</p>
          <p>If I am not coding, you can find me hiking, surfing, traveling, playing the guitar, taking photographs, or hanging out with my wife.</p>
          <Button variant="outlined">CV 2021</Button>
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