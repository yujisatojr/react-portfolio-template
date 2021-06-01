import React from 'react';
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
 
  return  (
    <div className="contact" id="contact">
      <div className="info">
        <ul>
          <li><a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
          <li><a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
          <li><a href="https://www.kaggle.com/yujisato" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faKaggle} size="2x"/></a></li>
        </ul>

        <p>Follow me on social media!</p>
        <p>Website handcrafted by <a href="https://github.com/yujisatojr">Yuji Sato</a> with ❤️</p>
      </div>
    </div>
  );
}

export default Contact;