import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsAutomation = [
    "PLC",
    "DCS",
    "Control Automático",
    "Instrumentación",
    "Sensores Industrial",
    "Arduino",
    "PID Control",
    "IoT Industrial"
];

const labelsSoftware = [
    "Python",
    "C / C++",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5 / CSS3",
    "Flask",
    "SQL"
];

const labelsInfraAI = [
    "Docker",
    "Linux",
    "Git",
    "object Detection",
    "LLM",
    "Streamlit",
    "Impresión 3D"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Habilidades</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faGears} size="3x" />
                        <h3>Control Automático & Automatización Industrial</h3>
                        <p>Diseño e implementación de sistemas de control, programación de PLC, DCS, instrumentación electrónica y prototipado con microcontroladores.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsAutomation.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Desarrollo de Software & Programación</h3>
                        <p>Desarrollo de software en C/C++ y Python, construcción de aplicaciones web interactivas en React y TypeScript, consumo de APIs y gestión de bases de datos.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSoftware.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <h3>Infraestructura, IA & Herramientas</h3>
                        <p>Despliegue de contenedores, administración en entornos Linux, automatización de flujos CI/CD, desarrollo de soluciones con Inteligencia Artificial e impresión 3D.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
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