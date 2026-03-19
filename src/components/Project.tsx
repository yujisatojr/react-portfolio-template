import React from "react";
// import mock01 from '../assets/images/mock01.png';
// import mock02 from '../assets/images/mock02.png';
// import mock03 from '../assets/images/mock03.png';
// import mock04 from '../assets/images/mock04.png';
// import mock05 from '../assets/images/mock05.png';
// import mock06 from '../assets/images/mock06.png';
// import mock07 from '../assets/images/mock07.png';
// import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/sixela11/python-data-pipeline-automation" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sixela11/python-data-pipeline-automation" target="_blank" rel="noreferrer"><h2>Python Data Pipeline Automation</h2></a>
                <p>Developed a Python-based data processing pipeline that automates ingestion, transformation, validation, and export of structured datasets. The system replaces manual spreadsheet consolidation by standardizing CSV data, applying validation rules, and generating clean outputs for reporting. The pipeline is modular, logged for traceability, and designed to support repeatable data workflows with minimal manual intervention.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Lead Intake & CRM Automation</h2></a>
                <p>Designed an end-to-end lead intake automation that captures form submissions, cleans and standardizes incoming data, and routes leads into a structured CRM workflow. The system integrates Google Forms, Google Sheets, Zapier, and Notion to automatically classify leads, update CRM records, and notify the appropriate team via Slack and email. This workflow removes manual lead triage and significantly improves response time.</p>
            </div>
            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>aaNotion Recurring Task Automation (Python API)</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Gmail Attachment → Google Drive Automation</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;