import React from 'react';
import '../style/App.css'
import myProfile from '../assets/img/profile.jpeg';
import FadeInSection from '../FadeInSections'
import Chip from '@material-ui/core/Chip';

function About() {

  return  (
    <div className="container" id="about">
      <FadeInSection>
      <div className="about-section">
        <div className="content">
          <h1>About Me</h1>
          <p>Hi! My name is Yuji. I am currently pursuing a bachelor's degree in computer science at Brigham Young University - Hawaii (Expected graduation April 2022). I also work as a developer/analyst at my university's Enterprise Information Systems department, developing web applications for a diverse population of 3,200 students and faculty members. Throughout my career, I have always found it rewarding to understand the needs of each individual client and solve their problems through the use of emerging technology.</p>
          <p className="flex-chips">Specialties: 
            <Chip variant="outlined" color="primary" label="software development" />
            <Chip variant="outlined" color="primary" label="full stack web development" />
            <Chip variant="outlined" color="primary" label="REST API" />
            <Chip variant="outlined" color="primary" label="data analysis" />
            <Chip variant="outlined" color="primary" label="statistical modelling" />
            <Chip variant="outlined" color="primary" label="automation" />
            <Chip variant="outlined" color="primary" label="machine learning" />
          </p>
          <p className='flex-chips'>If I am not coding, you can find me: 
            <Chip variant="outlined" label="⛰️ hiking" />
            <Chip variant="outlined" label="🏄‍♂️ surfing" />
            <Chip variant="outlined" label="🛩️ traveling" />
            <Chip variant="outlined" label="🎸 playing the guitar" />
            <Chip variant="outlined" label="📸 taking photographs" />
            <Chip variant="outlined" label="🏠 hanging out with my wife" />
          </p>
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