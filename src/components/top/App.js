import React from 'react';
import './style/App.css'
import Chip from '@material-ui/core/Chip';

function App() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I'm Yuji 👋</h1>
          <p>I recently graduated with my bachelor’s degree in computer science from Brigham Young University - Hawaii. Previously, I worked as a developer & analyst at my university's Enterprise Information Systems department, building enterprise-grade software for a diverse population of 3,200 customers. Throughout my career, I have always found it rewarding to understand the needs of each client and solve their problems through the use of emerging technology.</p>
          <p className='flex-chips'>If I am not coding, you can find me: <br/>
            <Chip variant="outlined" label="⛰️ hiking" />
            <Chip variant="outlined" label="🏄‍♂️ surfing" />
            <Chip variant="outlined" label="🛩️ traveling" />
            <Chip variant="outlined" label="🎸 playing the guitar" />
            <Chip variant="outlined" label="🎬 watching movies" />
            <Chip variant="outlined" label="📸 taking photographs" />
            <Chip variant="outlined" label="🏠 hanging out with my wife" />
          </p>
        </div>
        <div className="image-wrapper">
          <img src="https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/home_image.jpeg" alt="myProfile" />
        </div>
      </div>
    </div>
  );
}

export default App;