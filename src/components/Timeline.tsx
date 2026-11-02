import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiencia Profesional y Académica</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Ene 2025 – Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingeniero Civil Electrónico – Memoria de Título</h3>
            <h4 className="vertical-timeline-element-subtitle">Compañía Minera Doña Inés de Collahuasi SCM</h4>
            <p>
              Optimización de la automatización en la planta de molibdeno, identificando y definiendo puntos de operación óptimos para mejorar la eficiencia operativa.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 – Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Representante Estudiantil</h3>
            <h4 className="vertical-timeline-element-subtitle">Centro de Estudiantes de Ingeniería Civil Electrónica – UFRO</h4>
            <p>
              Representación de los intereses estudiantiles ante la dirección de carrera y organización de actividades académicas y extracurriculares.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Ago 2023 – Dic 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingeniero de Proyectos – Control Automático</h3>
            <h4 className="vertical-timeline-element-subtitle">Proyecto de Seguimiento Solar – Universidad de La Frontera</h4>
            <p>
              Diseño e implementación del control automático de seguimiento solar y programación de actuadores.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2023 – Dic 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingeniero de Proyectos – Automatización y TI</h3>
            <h4 className="vertical-timeline-element-subtitle">Línea Integradora de Formación en Ingeniería y Ciencias (LIFIC) – UFRO</h4>
            <p>
              Desarrollo de software de control de inventario, automatización del sistema de asistencia y mantenimiento informático.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Ago 2021 – Dic 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ayudante de Laboratorio – Sensores y Arduino</h3>
            <h4 className="vertical-timeline-element-subtitle">Línea Integradora de Formación en Ingeniería y Ciencias (LIFIC) – UFRO</h4>
            <p>
              Ayudantías en sensores y Arduino; control de inventario y diseño en impresión 3D.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Ago 2020 – Ago 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ayudante de Cátedra – Programación de Computadores</h3>
            <h4 className="vertical-timeline-element-subtitle">Facultad de Ingeniería y Ciencias – Universidad de La Frontera</h4>
            <p>
              Ayudantías para la asignatura de Programación de Computadores (C/C++).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2021 – Ago 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Desarrollador de Software (Chatbot IA)</h3>
            <h4 className="vertical-timeline-element-subtitle">Instituto iDEAUFRO – Universidad de La Frontera</h4>
            <p>
              Desarrollo de un chatbot con inteligencia artificial para la página web institucional.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div >
  );
}

export default Timeline;
