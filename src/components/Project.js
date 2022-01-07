import React from 'react';
import '../style/App.css'
import '../style/project.css';
import mock1 from '../assets/img/mock1.png';
import mock2 from '../assets/img/mock2.png';
import mock3 from '../assets/img/mock3.png';
import mock4 from '../assets/img/mock4.png';
import mock5 from '../assets/img/mock5.png';
import mock6 from '../assets/img/mock6.png';
import mock7 from '../assets/img/mock7.png';
import mock8 from '../assets/img/mock8.png';
import mock9 from '../assets/img/mock9.png';
import mock10 from '../assets/img/mock10.png';
import FadeInSection from '../FadeInSections'

function Project() {

  return  (
    <div className="projects-container" id="project">
    <FadeInSection>
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://yujisatojr.itch.io/battlechase" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://yujisatojr.itch.io/battlechase" target="_blank" rel="noreferrer"><h2>Battle Chase</h2></a>
          <p>Developed and released a 3D multi-player racing game. This project is hosted on the Itch.io public marketplace.</p>
          <p>Used: C#, Unity</p>
        </div>
        <div className="project">
          <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock9} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Space Craft</h2></a>
          <p>Developed and released a 2D shooting game with Unity. This project is hosted on the Itch.io public marketplace.</p>
          <p>Used: C#, Unity</p>
        </div>
        <div className="project">
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock1} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
          <p>Datum is an online educational platform with 300+ users that provides high-quality, data science focused learning resources in the Japanese language. Created an entire platform from scratch.</p>
          <p>Used: Ruby on Rails, HTML5, SCSS, PostgreSQL</p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock2} className="zoom" alt="domo" width="100%"/></a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
          <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. Participated in this project as a freelance software developer.</p>
          <p>Used: Ruby on Rails, JavaScript</p>
        </div>
        <div className="project">
          <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock3} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
          <p>Built online charts for COVID/vaccination tracking at Brigham Young University - Hawaii. The dashboard served the president of university in his decision making processes.</p>
          <p>Used: JavaScript, Google Sheets API v4</p>
        </div>
        <div className="project">
          <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock7} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
          <p>Analyzed the real estate market in Japan and predicted the property price by implementing statistical methods such as OLS and multi-regression analysis.</p>
          <p>Used: Python, Pandas, NumPy, Matplotlib, Scikit-Learn, Seaborn</p>
        </div>
        <div className="project">
          <a href="https://github.com/yujisatojr/py-scraper" target="_blank" rel="noreferrer"><img src={mock8} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://github.com/yujisatojr/py-scraper" target="_blank" rel="noreferrer"><h2>PyScraper</h2></a>
          <p>Developed web scraping programs to extract over 800000+ data for analysis purposes. The program further automates the data cleaning and normalization processes.</p>
          <p>Used: Python, Pandas, Selenium, Requests, Beautiful Soup</p>
        </div>
        <div className="project">
          <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock4} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
          <p>Designed and developed a custom component for CMS-based platform (i.e. “Brightspot”) at Brigham Young University - Hawaii. University students can find their majors of interests through this module.</p>
          <p>Used: Java, Handlebars, LESS, JSON</p>
        </div>
        <div className="project">
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock5} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
          <p>Created a filterable/searchable CSV table generator. Improved the university’s program sorting time by replacing jQuery with vanilla JavaScript.</p>
          <p>Used: Java, Handlebars, LESS, JSON</p>
        </div>
        <div className="project">
          <a href="https://play.google.com/store/apps/details?id=com.catswarzone" target="_blank" rel="noreferrer"><img src={mock6} className="zoom" alt="domo" width="100%"/></a>
          <a href="https://play.google.com/store/apps/details?id=com.catswarzone" target="_blank" rel="noreferrer"><h2>Cat's Warzone</h2></a>
          <p>Developed and released an Android mobile application with Java and Android Studio that runs the 2D shooting game.</p>
          <p>Used: Java, Android Studio</p>
        </div>
      </div>
    </FadeInSection>
    </div>
  );
}

export default Project;