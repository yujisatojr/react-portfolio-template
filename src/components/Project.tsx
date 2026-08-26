import React from "react";
import mock01 from '../assets/images/PremioUFRO.jpg';
import mock02 from '../assets/images/PremioCID.jpg';
import cvPdf from '../assets/images/CV_Andres_Carrasco.pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Extras</h1>
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

                <div className="project cv-project" id="cv">
                    <div className="cv-card">
                        <PictureAsPdfIcon className="cv-icon" />
                        <h2>Curriculum Vitae</h2>
                        <p>Descarga o visualiza mi Curriculum Vitae actualizado en formato PDF.</p>
                        <div className="cv-buttons">
                            <Button
                                variant="contained"
                                color="primary"
                                href={cvPdf}
                                target="_blank"
                                rel="noreferrer"
                                startIcon={<PictureAsPdfIcon />}
                            >
                                Ver CV
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                href={cvPdf}
                                download="CV_Andres_Carrasco.pdf"
                                startIcon={<DownloadIcon />}
                            >
                                Descargar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;