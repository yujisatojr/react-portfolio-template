import React from 'react';
import '../assets/style/Hero.scss'
import Chip from '@material-ui/core/Chip';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
        
          <TypeAnimation
            sequence={[
              "console.log('Hello World');",
              1000,
              "const name = 'Yuji';",
              1000,
              "I'm a full stack engineer.",
              1000,
              "Thanks for visiting!",
              1000
            ]}
            wrapper="h1"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />

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
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/home-profile.jpeg" alt="Asset by Oziel Gómez" />
        </div>
      </div>
    </div>
  );
}

export default Hero;