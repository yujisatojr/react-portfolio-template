import React from 'react';
import './style/skill.css';

import FadeInSection from '../top/FadeInSections'
import Chip from '@material-ui/core/Chip';

import { FaJava, FaJsSquare, FaHtml5, FaCss3, FaPhp, FaDatabase, FaPython, FaReact, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiKotlin, SiSolidity, SiCplusplus, SiSpringboot, SiDjango, SiPostgresql, SiMongodb, SiHeroku, SiGnubash, SiPostman, SiVirtualbox, SiAndroidstudio, SiCisco } from "react-icons/si";
import { GrMysql, GrOracle, } from "react-icons/gr";
import { DiAws } from "react-icons/di";
import { CgShapeCircle } from "react-icons/cg";
import { GiGears } from "react-icons/gi";

function Skill() {
    return (
        <div className="container" id="skills">
            <FadeInSection>
                <div className="skills-container">
                    <h1>Skills</h1>
                    <div className="skills-grid">
                        <div className="skill">
                            <h2>Languages</h2>
                            <p className="flex-chips">
                                <Chip avatar={<FaJava />} variant="outlined" label="Java" />
                                <Chip avatar={<SiKotlin />} variant="outlined" label="Kotlin" />
                                <Chip avatar={<SiSolidity />} variant="outlined" label="Solidity" />
                                <Chip avatar={<SiCplusplus />} variant="outlined" label="C/C++" />
                                <Chip avatar={<FaJsSquare />} variant="outlined" label="JavaScript" />
                                <Chip avatar={<FaHtml5 />} variant="outlined" label="HTML" />
                                <Chip avatar={<FaCss3 />} variant="outlined" label="CSS" />
                                <Chip avatar={<FaPhp />} variant="outlined" label="PHP" />
                                <Chip avatar={<FaDatabase />} variant="outlined" label="SQL" />
                                <Chip avatar={<FaPython />} variant="outlined" label="Python" />

                            </p>
                        </div>

                        <div className="skill">
                            <h2>Frameworks</h2>
                            <p className="flex-chips">
                                <Chip avatar={<FaReact />} variant="outlined" label="React.js" />
                                <Chip avatar={<SiSpringboot />} variant="outlined" label="Spring Boot" />
                                <Chip avatar={<FaLaravel />} variant="outlined" label="Laravel" />
                                <Chip avatar={<SiDjango />} variant="outlined" label="Django" />
                                <Chip avatar={<CgShapeCircle />} variant="outlined" label="Odoo" />
                            </p>
                        </div>

                        <div className="skill">
                            <h2>Databases</h2>
                            <p className="flex-chips">
                                <Chip avatar={<GrMysql />} variant="outlined" label="MySQL" />
                                <Chip avatar={<SiPostgresql />} variant="outlined" label="PostgreSql" />
                                <Chip avatar={<GrOracle />} variant="outlined" label="Oracle Apex" />
                                <Chip avatar={<SiMongodb />} variant="outlined" label="MongoDB" />
                            </p>
                        </div>

                        <div className="skill">
                            <h2>Cloud Services</h2>
                            <p className="flex-chips">
                                <Chip avatar={<SiHeroku />} variant="outlined" label="Heroku" />
                                <Chip avatar={<DiAws />} variant="outlined" label="AWS" />
                            </p>
                        </div>

                        <div className="skill">
                            <h2>Tools</h2>
                            <p className="flex-chips">
                                <Chip avatar={<FaGitAlt />} variant="outlined" label="Git" />
                                <Chip avatar={<SiPostman />} variant="outlined" label="Postman" />
                                <Chip avatar={<SiGnubash />} variant="outlined" label="Bash" />
                                <Chip avatar={<GiGears />} variant="outlined" label="Makefile" />
                                <Chip avatar={<SiVirtualbox />} variant="outlined" label="Virtual Machines" />
                                <Chip avatar={<SiAndroidstudio />} variant="outlined" label="Android Studio" />
                                <Chip avatar={<SiCisco />} variant="outlined" label="Cisco Packet Tracer" />
                            </p>
                        </div>

                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}

export default Skill;