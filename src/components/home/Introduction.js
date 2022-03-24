import React from 'react';
import './style/introduction.css'
import Chip from '@material-ui/core/Chip';

function Introduction() {
  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Hi, I'm Ayoub 🖖</h1>
          <p>I am a Belgian third-year student in the Computer Science Program at HE2B ESI college - Brussels (Expected graduation December 2022).
            I am currently looking for an end-of-study internship.
            I'm always eager to learn more and have a strong sense of curiosity, which is why I’m constantly trying to keep up with new computer technologies.
          </p>
          <p className='flex-chips'>If I am not coding, you can find me: <br />
              <Chip className="zoom" variant="outlined" label="👨‍🎓 learning" />
              <Chip className="zoom" variant="outlined" label="👨‍👩‍👧‍👧 socializing" />
              <Chip className="zoom" variant="outlined" label="🛫 traveling" />
              <Chip className="zoom" variant="outlined" label="🖥 building and tweaking computers" />
              <Chip className="zoom" variant="outlined" label="📰 following tech news" />
              <Chip className="zoom" variant="outlined" label="🤟 hanging out with friends" />
          </p>
        </div>
        <div className="image-wrapper">
          <img src="https://alahyaoui-website-bucket.s3.eu-west-3.amazonaws.com/home_page.jpeg" alt="profile_picture" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;