import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Photograph from '../assets/images/Photograph.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Photograph} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Dhruv-NNT" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aradhya-dhruv/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aradhya Dhruv</h1>
          <p>Research Associate at ATMRI (NTU) | MSc Artificial Intelligence | AI Researcher in Aviation Systems, Speech AI & LLM-driven Decision Support | Former Trainee Decision Scientist at Mu Sigma | Enabled Data-driven strategy for a leading Fortune 500 company</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Dhruv-NNT" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aradhya-dhruv/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
