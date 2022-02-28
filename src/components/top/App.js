import React from 'react';
import './style/App.css'
import myProfile from './assets/img/profile.jpeg';
//import FadeInSection from './FadeInSections'
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';

function App() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I'm Yuji 👋</h1>
          <p>I am currently pursuing a bachelor's degree in computer science at Brigham Young University - Hawaii (Expected graduation April 2022). I also work as a developer/analyst at my university's Enterprise Information Systems department, developing enterprise-grade software for a diverse population of 3,200 customers. Throughout my career, I have always found it rewarding to understand the needs of each individual client and solve their problems through the use of emerging technology.</p>
          <p className='flex-chips'>If I am not coding, you can find me: <br/>
            <Chip variant="outlined" label="⛰️ hiking" />
            <Chip variant="outlined" label="🏄‍♂️ surfing" />
            <Chip variant="outlined" label="🛩️ traveling" />
            <Chip variant="outlined" label="🎸 playing the guitar" />
            <Chip variant="outlined" label="📸 taking photographs" />
            <Chip variant="outlined" label="🏠 hanging out with my wife" />
          </p>
          <a href="https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/Resume_2022.pdf" target="_blank" rel="noreferrer"><Button variant="contained" size="large">Resume 2022</Button></a>
        </div>
        <div className="image-wrapper">
          <img src={myProfile} alt="myProfile" />
        </div>
      </div>
    </div>
  );
}

export default App;