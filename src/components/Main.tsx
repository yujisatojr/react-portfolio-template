import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/avatar.jpg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sixela11" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://ph.linkedin.com/in/alexis-earvin-sanosa" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Alexis Sañosa</h1>
          <p>Automation & AI Workflow Specialist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sixela11" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://ph.linkedin.com/in/alexis-earvin-sanosa" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

