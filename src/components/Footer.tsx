import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__mark">AC</span>
            <div>
              <p className="footer__name">Andrés Carrasco Inostroza</p>
              <p className="footer__role">Ingeniero Civil Electrónico</p>
            </div>
          </div>

          <div className="footer__socials">
            <a
              href="https://github.com/andres-ici"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Andrés Carrasco"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/andr%C3%A9s-iv%C3%A1n-carrasco-inostroza-53a99a169/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Andrés Carrasco"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="#contact" aria-label="Ir a contacto" title="Contacto">
              <EmailIcon />
            </a>
            <a
              href="#cv"
              aria-label="Ver currículum vitae"
              title="Currículum Vitae"
            >
              <DescriptionIcon />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Andrés Carrasco Inostroza. Todos los
            derechos reservados.
          </p>
          <p className="footer__credit">
            Plantilla base de{" "}
            <a
              href="https://github.com/yujisatojr/react-portfolio-template"
              target="_blank"
              rel="noreferrer"
            >
              Yuji Sato
            </a>
            .
          </p>
          <a className="footer__top-link" href="#top">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
