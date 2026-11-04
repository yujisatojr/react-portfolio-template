import React from "react";
import premioUFRO from "../assets/images/PremioUFRO.webp";
import premioCID from "../assets/images/PremioCID.webp";
import cvPdf from "../assets/images/CV_Andres_Carrasco.pdf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../assets/styles/Project.scss";

const awards = [
  {
    image: premioCID,
    alt: "Premio Colegio de Ingenieros de Chile",
    title: "Premio Colegio de Ingenieros de Chile",
    description:
      "Mejor Titulado de la Promoción 2025 de Ingeniería Civil Electrónica, reconocido por el Colegio de Ingenieros de Chile A.G. Nota final de titulación: 6,7.",
    href: "https://www.ingenieros.cl/mejores-titulados/colegio-de-ingenieros-reconocio-a-los-mejores-titulados-y-al-alumno-integral-2026/",
  },
  {
    image: premioUFRO,
    alt: "Premio Universidad de La Frontera",
    title: "Premio Universidad de La Frontera",
    description:
      "Mejor Titulado de la Promoción 2025 de Ingeniería Civil Electrónica, con nota final de titulación 6,7 y aprobación con distinción máxima.",
    href: "https://i.imgur.com/YuvRTv1.jpeg",
  },
];

function Project() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <div className="section-heading">
          <p className="eyebrow">03 / Reconocimientos</p>
          <h2>Reconocimientos y CV</h2>
          <p>
            Distinciones académicas y trayectoria de titulación, junto al
            currículum vitae actualizado.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => (
            <article className="award glass glass--interactive" key={award.title}>
              <a
                className="award__frame"
                href={award.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ${award.title}`}
              >
                <img src={award.image} alt={award.alt} loading="lazy" decoding="async" />
                <span className="award__open" aria-hidden="true">
                  <ArrowOutwardIcon fontSize="small" />
                </span>
              </a>

              <div className="award__body">
                <h3>
                  <a href={award.href} target="_blank" rel="noreferrer">
                    {award.title}
                    <ArrowOutwardIcon fontSize="small" />
                  </a>
                </h3>
                <p>{award.description}</p>
              </div>
            </article>
          ))}

          <article className="cv-card glass glass--interactive" id="cv">
            <span className="cv-card__icon">
              <PictureAsPdfIcon />
            </span>

            <div className="cv-card__body">
              <p className="eyebrow">Documento</p>
              <h3>Currículum Vitae</h3>
              <p>
                Descarga o visualiza mi Currículum Vitae actualizado en formato
                PDF.
              </p>

              <div className="cv-card__actions">
                <a
                  className="glass-button glass-button--accent"
                  href={cvPdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PictureAsPdfIcon fontSize="small" />
                  Ver CV
                </a>
                <a
                  className="glass-button"
                  href={cvPdf}
                  download="CV_Andres_Carrasco.pdf"
                >
                  <DownloadIcon fontSize="small" />
                  Descargar
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Project;
