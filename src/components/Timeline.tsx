import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Timeline.scss";

const experience = [
  {
    date: "Ene 2025 – Jun 2025",
    title: "Ingeniero Civil Electrónico – Memoria de Título",
    organization: "Compañía Minera Doña Inés de Collahuasi SCM",
    description:
      "Optimización de la automatización en la planta de molibdeno, identificando y definiendo puntos de operación óptimos para mejorar la eficiencia operativa.",
  },
  {
    date: "Jun 2024 – Jun 2025",
    title: "Representante Estudiantil",
    organization:
      "Centro de Estudiantes de Ingeniería Civil Electrónica – UFRO",
    description:
      "Representación de los intereses estudiantiles ante la dirección de carrera y organización de actividades académicas y extracurriculares.",
  },
  {
    date: "Ago 2023 – Dic 2024",
    title: "Ingeniero de Proyectos – Control Automático",
    organization: "Proyecto de Seguimiento Solar – Universidad de La Frontera",
    description:
      "Diseño e implementación del control automático de seguimiento solar y programación de actuadores.",
  },
  {
    date: "Mar 2023 – Dic 2024",
    title: "Ingeniero de Proyectos – Automatización y TI",
    organization:
      "Línea Integradora de Formación en Ingeniería y Ciencias (LIFIC) – UFRO",
    description:
      "Desarrollo de software de control de inventario, automatización del sistema de asistencia y mantenimiento informático.",
  },
  {
    date: "Ago 2021 – Dic 2022",
    title: "Ayudante de Laboratorio – Sensores y Arduino",
    organization:
      "Línea Integradora de Formación en Ingeniería y Ciencias (LIFIC) – UFRO",
    description:
      "Ayudantías en sensores y Arduino; control de inventario y diseño en impresión 3D.",
  },
  {
    date: "Ago 2020 – Ago 2022",
    title: "Ayudante de Cátedra – Programación de Computadores",
    organization:
      "Facultad de Ingeniería y Ciencias – Universidad de La Frontera",
    description:
      "Ayudantías para la asignatura de Programación de Computadores (C/C++).",
  },
  {
    date: "Mar 2021 – Ago 2021",
    title: "Desarrollador de Software (Chatbot IA)",
    organization: "Instituto iDEAUFRO – Universidad de La Frontera",
    description:
      "Desarrollo de un chatbot con inteligencia artificial para la página web institucional.",
  },
];

function Timeline() {
  return (
    <section className="section" id="history">
      <div className="section__inner">
        <div className="section-heading">
          <p className="eyebrow">02 / Trayectoria</p>
          <h2>Experiencia profesional y académica</h2>
          <p>
            Proyectos de automatización, control, docencia y desarrollo de
            software desarrollados en la industria y en la Universidad de La
            Frontera.
          </p>
        </div>

        <ol className="timeline">
          {experience.map((item, index) => (
            <li
              className="timeline__item"
              key={`${item.date}-${item.title}`}
            >
              <span className="timeline__marker" aria-hidden="true">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>

              <article className="timeline__card glass glass--interactive">
                <div className="timeline__meta">
                  <span className="timeline__date">{item.date}</span>
                  <span className="timeline__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p className="timeline__organization">{item.organization}</p>
                <p className="timeline__description">{item.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
