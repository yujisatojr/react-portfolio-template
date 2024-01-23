import React from 'react';
import './style/Header.scss'
import Chip from '@material-ui/core/Chip';
import profile from './assets/img/profile.png';

function Header() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I'm Yuji 👋</h1>
          <p>
            I graduated with a bachelor's degree in computer science from Brigham Young University - Hawaii. 
            As a former full stack engineer, I collaborated with agile teams to deliver 5+ RESTful web applications 
            for a diverse population of 3,200 customers. My expertise includes full stack development, 
            DevOps, data governance, and project management.
          </p>
          <p className='flex-chips'>If I am not coding, you can find me: <br/>
            <Chip variant="outlined" label="⛰️ hiking" />
            <Chip variant="outlined" label="🏄‍♂️ surfing" />
            <Chip variant="outlined" label="🛩️ traveling" />
            <Chip variant="outlined" label="🎸 playing the guitar" />
            <Chip variant="outlined" label="🎬 filmmaking" />
            <Chip variant="outlined" label="📸 taking photographs" />
          </p>
        </div>
        <div className="image-wrapper">
          <img src={profile} alt="myProfile" />
        </div>
      </div>
    </div>
  );
}

export default Header;