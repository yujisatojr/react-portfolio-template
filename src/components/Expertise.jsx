import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I've built over 20 web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <p className="flex-chips">Tech stack:
                    {labelsFirst.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients setup DevOps testing, CI/CD pipelines, and deployment automation to support the Go-Live events.</p>
                    <p className="flex-chips">Tech stack: 
                    {labelsSecond.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                    </p>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <p className="flex-chips">Tech stack:
                    {labelsThird.map((label, index) => (
                        <Chip key={index} className='chip' label={label} />
                    ))}
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;