import React, { useEffect } from "react";
import { CodeBlock, monokai } from 'react-code-blocks';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Home.scss';

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
  "Rails",
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
  "Selenium",
];

const labelsThird = [
  "OpenAI",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
  "Pandas",
  "Sklearn",
];

function Home() {

  useEffect(() => {
    document.title = "Yuji Sato";
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
  <div>
    <div className="container">
      <div className="about-section">
        <div className="content">
          <h1>Welcome to my portfolio 👋</h1>
          <p>
            This is where I showcase past projects beyond my work scope. 
            Before we dive in, please let me introduce myself:
          </p>
          <div className="desktop-codeblock">
            <CodeBlock
              text={
  `const person = {
    firstName: 'Yuji',
    lastName: 'Sato',
    role: 'Full Stack Engineer',
    city: 'Dallas, TX',
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  function printIntro(obj) {
    console.log("Hi! I'm " + obj.fullName() 
      + ", a " + obj.role + " based in " + obj.city);
  };
  printIntro(person);`
                }
              language={'javascript'}
              showLineNumbers={false}
              theme={monokai}
            />
          </div>

          <div className="mobile-responsive-codeblock">
            <CodeBlock
              text={
  `const person = {
    firstName: 'Yuji',
    lastName: 'Sato',
    role: 'Full Stack Engineer',
    city: 'Dallas, TX',
    fullName: function () {
      return this.firstName 
        + ' ' + this.lastName;
    }
  };
  
  function printIntro(obj) {
    console.log("Hi! I'm " 
      + obj.fullName() 
      + ", a " + obj.role 
      + " based in " 
      + obj.city);
  };
  printIntro(person);`
                }
              language={'javascript'}
              showLineNumbers={false}
              theme={monokai}
            />
          </div>
        </div>
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/home-profile.jpeg" alt="Asset by Oziel Gómez" />
        </div>
      </div>
    </div>

    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Specialties</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <h3>Full-Stack Web Development</h3>
            <p>
              I built over 20 web applications from scratch using emerging technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.
            </p>
            <p className="flex-chips">Tech stack:
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <h3>DevOps & Automation</h3>
            <p>
              Building a solution is just the beginning; I help clients establish DevOps testing, CI/CD pipelines, and deployment automation.
            </p>
            <p className="flex-chips">Tech stack: 
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x"/>
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest frameworks. I have professional experience building enterprise grade GenAI enabled solutions to facilitate informed decision making.
            </p>
            <p className="flex-chips">Tech stack:
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="projects-container" id="project">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock10.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
          <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
        </div>
        <div className="project">
          <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock9.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
          <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
        </div>
        <div className="project">
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock1.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
          <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock2.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
          <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
        </div>
        <div className="project">
          <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock3.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
          <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
        </div>
        <div className="project">
          <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock7.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
          <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
        </div>
        <div className="project">
          <a href="https://github.com/yujisatojr/py-scraper" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock8.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/yujisatojr/py-scraper" target="_blank" rel="noreferrer"><h2>PyScraper</h2></a>
          <p>Developed web scraping programs to extract over 800,000+ data for analysis purposes. The program further automates the data cleaning and normalization processes. This tool is built with Python, Pandas, Selenium, Requests, and Beautiful Soup.</p>
        </div>
        <div className="project">
          <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock4.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
          <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
        </div>
        <div className="project">
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock5.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
          <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
        </div>
        <div className="project">
          <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/mock6.png" className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
          <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;