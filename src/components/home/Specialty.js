import React from 'react';
import './style/specialty.css';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaPhp, FaPython, FaReact, FaBootstrap, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiKotlin, SiCplusplus, SiSpringboot, SiDjango, SiPostgresql, SiSqlite, SiHeroku, SiPostman, SiQt, SiAndroidstudio } from "react-icons/si";
import { GrMysql, } from "react-icons/gr";
import { CgShapeCircle } from "react-icons/cg";
import FadeInSection from '../fade/FadeInSections'
import Chip from '@material-ui/core/Chip';
import { faAppStore, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

function Specialty() {
  return (
    <div className="container" id="specialties">
      <FadeInSection>
        <div className="specialties-container">
          <h1>Specialties</h1>
          <div className="specialties-grid">

            <div className="specialty">
              <FontAwesomeIcon icon={faReact} size="4x" />
              <h3>Full-Stack Web Development</h3>
              <p>Previously, I worked as a DevOps engineer and built 5+ RESTful web applications. I am a power user of Ruby on Rails framework and the JavaScript libraries such as React, Vue, Node, Express and Handlebars.</p>
              <p className="flex-chips">Tech stack:
                <Chip className="zoom" avatar={<FaReact />} variant="outlined" label="React.js" />
                <Chip className="zoom" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                <Chip className="zoom" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                <Chip className="zoom" avatar={<FaLaravel />} variant="outlined" label="Laravel" />
                <Chip className="zoom" avatar={<SiDjango />} variant="outlined" label="Django" />
                <Chip className="zoom" avatar={<FaJsSquare />} variant="outlined" label="JavaScript" />
                <Chip className="zoom" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                <Chip className="zoom" avatar={<FaCss3 />} variant="outlined" label="CSS" />
                <Chip className="zoom" avatar={<FaPhp />} variant="outlined" label="PHP" />
                <Chip className="zoom" avatar={<SiHeroku />} variant="outlined" label="Heroku" />
                <Chip className="zoom" avatar={<SiPostgresql />} variant="outlined" label="PostgreSql" />
                <Chip className="zoom" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                <Chip className="zoom" avatar={<SiPostman />} variant="outlined" label="Postman" />
              </p>
            </div>

            <div className="specialty">
              <FontAwesomeIcon icon={faAppStore} size="4x" />
              <h3>Software Development</h3>
              <p>I enjoy being part of an agile team to design, build, and deploy cross-platform software. My experience in software development ranges from building mobile applications to 2D/3D video games.</p>
              <p className="flex-chips">Tech stack:
                <Chip className="zoom" avatar={<FaJava />} variant="outlined" label="Java" />
                <Chip className="zoom" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                <Chip className="zoom" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                <Chip className="zoom" avatar={<SiCplusplus />} variant="outlined" label="C/C++" />
                <Chip className="zoom" avatar={<SiQt />} variant="outlined" label="Qt Creator" />
                <Chip className="zoom" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                <Chip className="zoom" avatar={<SiSqlite />} variant="outlined" label="SQLite" />
              </p>
            </div>

            <div className="specialty">
              <FontAwesomeIcon icon={faBuilding} size="4x" />
              <h3>Enterprise Resource Planning (ERP) Development</h3>
              <p>I love to empower business through the utilization of ELT, data visualization, data warehousing, and automation. I have experience in analyzing corporate data for better decision making.</p>
              <p className="flex-chips">Tech stack:
                <Chip className="zoom" avatar={<CgShapeCircle />} variant="outlined" label="Odoo" />
                <Chip className="zoom" avatar={<FaPython />} variant="outlined" label="Python" />
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Specialty;