import React from 'react';
import './style/skill.css';

import Chip from '@material-ui/core/Chip';

import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaPhp, FaDatabase, FaPython, FaReact, FaBootstrap, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiKotlin, SiSolidity, SiCplusplus, SiSpringboot, SiDjango, SiPostgresql, SiSqlite, SiMongodb, SiHeroku, SiGnubash, SiPostman, SiVirtualbox, SiQt, SiAndroidstudio, SiCisco } from "react-icons/si";
import { GrMysql, GrOracle, } from "react-icons/gr";
import { DiAws } from "react-icons/di";
import { CgShapeCircle } from "react-icons/cg";
import { GiGears } from "react-icons/gi";

function Skill() {
    return (
        <div className="container" id="skills">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <h2>Languages</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaJava />} variant="outlined" label="Java" />
                            <Chip className="zoom" avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                            <Chip className="zoom" avatar={<SiSolidity />} variant="outlined" label="Solidity" />
                            <Chip className="zoom" avatar={<SiCplusplus />} variant="outlined" label="C/C++" />
                            <Chip className="zoom" avatar={<FaJsSquare />} variant="outlined" label="JavaScript" />
                            <Chip className="zoom" avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                            <Chip className="zoom" avatar={<FaCss3 />} variant="outlined" label="CSS" />
                            <Chip className="zoom" avatar={<FaPhp />} variant="outlined" label="PHP" />
                            <Chip className="zoom" avatar={<FaDatabase />} variant="outlined" label="SQL" />
                            <Chip className="zoom" avatar={<FaPython />} variant="outlined" label="Python" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Frameworks</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaReact />} variant="outlined" label="React.js" />
                            <Chip className="zoom" avatar={<FaBootstrap />} variant="outlined" label="Bootstrap" />
                            <Chip className="zoom" avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                            <Chip className="zoom" avatar={<FaLaravel />} variant="outlined" label="Laravel" />
                            <Chip className="zoom" avatar={<SiDjango />} variant="outlined" label="Django" />
                            <Chip className="zoom" avatar={<CgShapeCircle />} variant="outlined" label="Odoo" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Databases</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<GrMysql />} variant="outlined" label="MySQL" />
                            <Chip className="zoom" avatar={<SiPostgresql />} variant="outlined" label="PostgreSql" />
                            <Chip className="zoom" avatar={<SiSqlite />} variant="outlined" label="SQLite" />
                            <Chip className="zoom" avatar={<GrOracle />} variant="outlined" label="Oracle Apex" />
                            <Chip className="zoom" avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Cloud Services</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<SiHeroku />} variant="outlined" label="Heroku" />
                            <Chip className="zoom" avatar={<DiAws />} variant="outlined" label="AWS" />
                        </p>
                    </div>

                    <div className="skill">
                        <h2>Tools</h2>
                        <p className="flex-chips">
                            <Chip className="zoom" avatar={<FaGitAlt />} variant="outlined" label="Git" />
                            <Chip className="zoom" avatar={<SiPostman />} variant="outlined" label="Postman" />
                            <Chip className="zoom" avatar={<SiGnubash />} variant="outlined" label="Bash" />
                            <Chip className="zoom" avatar={<GiGears />} variant="outlined" label="Makefile" />
                            <Chip className="zoom" avatar={<SiVirtualbox />} variant="outlined" label="Virtual Machines" />
                            <Chip className="zoom" avatar={<SiQt />} variant="outlined" label="Qt Creator" />
                            <Chip className="zoom" avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                            <Chip className="zoom" avatar={<SiCisco />} variant="outlined" label="Cisco Packet Tracer" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;