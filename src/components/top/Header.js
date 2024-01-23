import React from 'react';
import './style/Header.scss'
import Chip from '@material-ui/core/Chip';
import profile from './assets/img/profile.png';

function Header() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I'm Yuji <span class="emoji wave" role="img" aria-label="hand wave"></span></h1>
          <p>I recently graduated with my bachelor’s degree in computer science from Brigham Young University - Hawaii. Previously, I worked as a developer & analyst at my university's Enterprise Information Systems department, building enterprise-grade software for a diverse population of 3,200 customers. Throughout my career, I have always found it rewarding to understand the needs of each client and solve their problems through the use of emerging technology.</p>
          <p className='flex-chips'>If I am not coding, you can find me: <br/>
            <Chip variant="outlined" label="⛰️ hiking" />
            <Chip variant="outlined" label="🏄‍♂️ surfing" />
            <Chip variant="outlined" label="🛩️ traveling" />
            <Chip variant="outlined" label="🎸 playing the guitar" />
            <Chip variant="outlined" label="🎬 filmmaking" />
            <Chip variant="outlined" label="📸 taking photographs" />
            <Chip variant="outlined" label="🏠 hanging out with my wife" />
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