import React from "react";
import mock01 from '../assets/images/PremioUFRO.jpg';
import mock02 from '../assets/images/PremioCID.jpeg';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Extra</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.ingenieros.cl/mejores-titulados/colegio-de-ingenieros-reconocio-a-los-mejores-titulados-y-al-alumno-integral-2026/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="80%" /></a>
                    <a href="https://www.ingenieros.cl/mejores-titulados/colegio-de-ingenieros-reconocio-a-los-mejores-titulados-y-al-alumno-integral-2026/" target="_blank" rel="noreferrer"><h2>Premio Colegio de Ingenieros de Chile</h2></a>
                    <p>Distinguido por el Colegio de Ingenieros de Chile A.G. como el Mejor Titulado de la Promoción 2025 de la carrera de Ingeniería Civil Electrónica (UFRO), alcanzando una nota final de titulación de 6,7.</p>
                </div>
                <div className="project">
                    <a href="https://i.imgur.com/YuvRTv1.jpeg" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://i.imgur.com/YuvRTv1.jpeg" target="_blank" rel="noreferrer"><h2>Premio Universidad de la Frontera</h2></a>
                    <p>Reconocimiento al Mejor Alumno de la Promoción Año 2025 de la carrera de Ingeniería Civil Electrónica, con una nota de titulación de seis coma siete (6,7).</p>
                </div>
            </div>
        </div>
    );
}

export default Project;