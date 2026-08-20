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
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Ene 2025 - Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Alumno Memorista</h3>
            <h4 className="vertical-timeline-element-subtitle">Compañia Minera Doña Ines de Collahuasi</h4>
            <p>
              Optimización de automatización en planta de molibdeno, identificación de puntos de operación óptimos
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Jun 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Centro de Estudiantes Ing. Civil Electrónica</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad de La Frontera</h4>
            <p>
              Representante estudiantil
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Ago 2023 - Dic 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Proyecto Seguimiento Solar UFRO — Asistente de Investigación</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad de La Frontera</h4>
            <p>
              Control automático de seguimiento solar, programación de actuadores
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2023 – Dic 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">LIFIC UFRO — Laborante</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad de La Frontera</h4>
            <p>
              Software control inventario, automatización sistema de asistencia
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2021 – Ago 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Instituto iDEAUFRO — Asistente de Investigación</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad de La Frontera</h4>
            <p>
              Chatbot con IA para página web
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Ago 2020 – Ago 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Facultad de Ingeniería y Ciencias UFRO — Ayudante</h3>
            <h4 className="vertical-timeline-element-subtitle">Universidad de La Frontera</h4>
            <p>
              Desarrollo de ayudantías C++/C
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div >
  );
}

export default Timeline;