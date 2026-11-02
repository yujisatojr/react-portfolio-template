import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsAutomation = [
    "PLC",
    "DCS",
    "Control PID",
    "Instrumentación industrial",
    "Sensores industriales",
    "Arduino",
    "IoT industrial",
    "Automatización de procesos"
];

const labelsSoftware = [
    "Python",
    "C / C++",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5 / CSS3",
    "Flask",
    "SQL",
    "Análisis de datos"
];

const labelsInfraAI = [
    "Docker",
    "Linux",
    "Git",
    "Detección de objetos",
    "LLM",
    "Streamlit",
    "Impresión 3D"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Competencias Técnicas</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faGears} size="3x" />
                        <h3>Automatización y Control Industrial</h3>
                        <p>Diseño e implementación de sistemas de control, programación de PLC y DCS, instrumentación industrial y prototipado con microcontroladores.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tecnologías:</span>
                            {labelsAutomation.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Desarrollo de Software</h3>
                        <p>Desarrollo de software en C/C++ y Python, aplicaciones web con React y TypeScript, consumo de APIs y gestión de bases de datos.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tecnologías:</span>
                            {labelsSoftware.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <h3>Infraestructura, IA y Herramientas</h3>
                        <p>Despliegue de contenedores, administración de entornos Linux, control de versiones con Git, desarrollo de soluciones con inteligencia artificial e impresión 3D.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tecnologías:</span>
                            {labelsInfraAI.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
