import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Expertise.scss";

const skillGroups = [
  {
    icon: faGears,
    title: "Automatización y Control Industrial",
    description:
      "Diseño e implementación de sistemas de control, programación de PLC y DCS, instrumentación industrial y prototipado con microcontroladores.",
    labels: [
      "PLC",
      "DCS",
      "Control PID",
      "Instrumentación industrial",
      "Sensores industriales",
      "Arduino",
      "IoT industrial",
      "Automatización de procesos",
    ],
  },
  {
    icon: faCode,
    title: "Desarrollo de Software",
    description:
      "Desarrollo de software en C/C++ y Python, aplicaciones web con React y TypeScript, consumo de APIs y gestión de bases de datos.",
    labels: [
      "Python",
      "C / C++",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Flask",
      "SQL",
      "Análisis de datos",
    ],
  },
  {
    icon: faServer,
    title: "Infraestructura, IA y Herramientas",
    description:
      "Despliegue de contenedores, administración de entornos Linux, control de versiones con Git, desarrollo de soluciones con inteligencia artificial e impresión 3D.",
    labels: [
      "Docker",
      "Linux",
      "Git",
      "Detección de objetos",
      "LLM",
      "Streamlit",
      "Impresión 3D",
    ],
  },
];

function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="section__inner">
        <div className="section-heading">
          <p className="eyebrow">01 / Competencias</p>
          <h2>Competencias técnicas</h2>
          <p>
            Automatización, desarrollo de software e infraestructura: las áreas
            donde concentro mi experiencia profesional.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className="skill glass glass--interactive"
              key={group.title}
            >
              <div className="skill__head">
                <span className="skill__icon">
                  <FontAwesomeIcon icon={group.icon} />
                </span>
                <span className="skill__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill__tech">
                <span className="chip-title">Tecnologías</span>
                <div className="chips">
                  {group.labels.map((label) => (
                    <span className="chip" key={label}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
