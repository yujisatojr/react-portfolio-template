import React from 'react';
import './style/App.css'
import FadeInSection from './FadeInSections'

function About() {

  return  (

    <div className="about" id="about">
      <FadeInSection>
        <h2>Who am I?</h2>
      </FadeInSection>
      <FadeInSection>
      <p>Hi! My name is Yuji. I am a self-driven developer and passionate about utilizing technology to turn creative ideas into tangible business values. I believe that using the right digital tools can maximize our ability to serve others and enhance each user’s experience. I am also a committed life-long learner and eager to build new skills.</p>
      </FadeInSection>
    </div>
  );
}

export default About;