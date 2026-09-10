import React from "react";
import avatar from '../assets/images/perfil.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/andres-ici" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-iv%C3%A1n-carrasco-inostroza-53a99a169/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="#contact" title="Ir a Contacto"><EmailIcon /></a>
            <a href="#cv" title="Ver CV"><FontAwesomeIcon icon={faIdCard} /></a>
          </div>
          <h1>Andrés Carrasco Inostroza</h1>
          <p>Ingeniero Civil Eléctronico</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/andres-ici" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-iv%C3%A1n-carrasco-inostroza-53a99a169/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="#contact" title="Ir a Contacto"><EmailIcon /></a>
            <a href="#cv" title="Ver CV"><FontAwesomeIcon icon={faIdCard} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;