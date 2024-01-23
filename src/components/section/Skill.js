import React from 'react';
import '../assets/style/Skill.scss';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faSass,
  faLess,
  faNodeJs, 
  faReact, 
  faNpm, 
  faJava, 
  faUnity, 
  faDocker, 
  faGitAlt, 
  faAws, 
  faLinux, 
  faAndroid, 
  faPython, 
  faRProject, 
  faMicrosoft 
} from '@fortawesome/free-brands-svg-icons';
import Chip from '@material-ui/core/Chip';

function Skill () {
  return  (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Specialties</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="4x"/>
            <h3>Full Stack Web Development</h3>
            <p>My experience in web development includes building 10+ scalable web apps 
              and having proficiency in top-tier JavaScript libraries such as React, Vue, 
              Node, Express, and Handlebars, as well as the Ruby on Rails framework.
            </p>
            <p className="flex-chips">Tech stack: 
              <Chip variant="outlined" label="JavaScript" size="small" icon={<FontAwesomeIcon icon={faJsSquare} />} />
              <Chip variant="outlined" label="HTML5" size="small" icon={<FontAwesomeIcon icon={faHtml5} />} />
              <Chip variant="outlined" label="CSS3" size="small" icon={<FontAwesomeIcon icon={faCss3Alt} />} />
              <Chip variant="outlined" label="SASS" size="small" icon={<FontAwesomeIcon icon={faSass} />} />
              <Chip variant="outlined" label="LESS" size="small" icon={<FontAwesomeIcon icon={faLess} />} />
              <Chip variant="outlined" label="NodeJS" size="small" icon={<FontAwesomeIcon icon={faNodeJs} />} />
              <Chip variant="outlined" label="React" size="small" icon={<FontAwesomeIcon icon={faReact} />} />
              <Chip variant="outlined" label="npm" size="small" icon={<FontAwesomeIcon icon={faNpm} />} />
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="4x"/>
            <h3>Software Development</h3>
            <p>I've collaborated with agile teams to design and implement cross-platform solutions. 
              My diverse experience enables me to approach each project with a multifaceted perspective, 
              bringing fresh insights to the table.
            </p>
            <p className="flex-chips">Tech stack: 
              <Chip variant="outlined" label="Java" size="small" icon={<FontAwesomeIcon icon={faJava} />} />
              <Chip variant="outlined" label="SQL" size="small" />
              <Chip variant="outlined" label="C/C++/C#" size="small" />
              <Chip variant="outlined" label="Unity" size="small" icon={<FontAwesomeIcon icon={faUnity} />} />
              <Chip variant="outlined" label="Git" size="small" icon={<FontAwesomeIcon icon={faGitAlt} />} />
              <Chip variant="outlined" label="Docker" size="small" icon={<FontAwesomeIcon icon={faDocker} />} />
              <Chip variant="outlined" label="AWS" size="small" icon={<FontAwesomeIcon icon={faAws} />} />
              <Chip variant="outlined" label="Linux" size="small" icon={<FontAwesomeIcon icon={faLinux} />} />
              <Chip variant="outlined" label="Android Studio" size="small" icon={<FontAwesomeIcon icon={faAndroid} />} />
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="4x"/>
            <h3>Data Analysis & BI</h3>
            <p>I'm driven to help clients by leveraging data governance and process automation. 
              My background in analyzing corporate data helps me to deliver valuable insights that 
              facilitate informed decision-making.
            </p>
            <p className="flex-chips">Tech stack:
              <Chip variant="outlined" label="Python" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="Pandas" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="Matplotlib" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="Sklearn" size="small" icon={<FontAwesomeIcon icon={faPython} />} />
              <Chip variant="outlined" label="R" size="small" icon={<FontAwesomeIcon icon={faRProject} />} />
              <Chip variant="outlined" label="Microsoft Excel" size="small" icon={<FontAwesomeIcon icon={faMicrosoft} />} />
              <Chip variant="outlined" label="Snowflake" size="small" />
              <Chip variant="outlined" label="Domo BI" size="small" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;