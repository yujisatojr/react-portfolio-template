import React from "react";
import avatar from "../assets/images/perfil.webp";
import cvPdf from "../assets/images/CV_Andres_Carrasco.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner section__inner">
        <div className="hero__portrait">
          <div className="hero__portrait-frame glass">
            <img src={avatar} alt="Retrato de Andrés Carrasco Inostroza" />
          </div>
          <span className="hero__badge">Titulado 2025 · UFRO</span>
        </div>

        <div className="hero__content">
          <p className="eyebrow">Ingeniero Civil Electrónico</p>
          <h1>Andrés Carrasco Inostroza</h1>
          <p className="hero__headline">
            Automatización Industrial · Control de Procesos · Desarrollo de Software
          </p>

          <div className="hero__actions">
            <a
              className="glass-button glass-button--accent"
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
            >
              <DescriptionIcon fontSize="small" />
              Ver CV
            </a>
            <a className="glass-button" href="#contact">
              <EmailIcon fontSize="small" />
              Contacto
            </a>
          </div>

          <div className="hero__socials">
            <a
              className="hero__social"
              href="https://github.com/andres-ici"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Andrés Carrasco"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              className="hero__social"
              href="https://www.linkedin.com/in/andr%C3%A9s-iv%C3%A1n-carrasco-inostroza-53a99a169/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Andrés Carrasco"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              className="hero__social"
              href="#contact"
              aria-label="Ir a contacto"
              title="Contacto"
            >
              <EmailIcon />
            </a>
            <a
              className="hero__social"
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver currículum vitae"
              title="Currículum Vitae"
            >
              <DescriptionIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
