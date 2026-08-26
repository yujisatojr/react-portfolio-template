import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/andres-ici" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/andr%C3%A9s-iv%C3%A1n-carrasco-inostroza-53a99a169/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="#contact" title="Ir a Contacto"><EmailIcon /></a>
        <a href="#cv" title="Ver CV"><FontAwesomeIcon icon={faIdCard} /></a>
      </div>
      <p>Plantilla diseñada por <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> con 💜</p>
      <p>© {new Date().getFullYear()} Andrés Carrasco Inostroza. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;