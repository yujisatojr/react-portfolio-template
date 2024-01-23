import React from 'react';
import './style/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return  (
    <div className="getintouch" id="contact">
      <div className="section">
        <h2>... got an idea?</h2>
        <h1>Let's create awesome things together!</h1>
        <div className="line"></div>
        <p>Feel free to reach out to me on social media.</p>
        <div className="info">
          <ul>
            <li><a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
            <li><a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;