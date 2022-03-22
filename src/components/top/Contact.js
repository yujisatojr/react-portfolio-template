import React from 'react';
import './style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


function Contact() {
  function copyToClipboard(e) {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('ayoubino#8988');
      toast.success('Discord ID copied to clipboard', { icon: <FontAwesomeIcon icon={faDiscord} size="2x" /> });
    }
  }

  return (
    <div className="getintouch" id="contact">
      <div className="section">
        <h2>... got an idea?</h2>
        <h1>Let's create awesome things together!</h1>
        <div className="line"></div>
        <p>Feel free to reach out to me on social media.</p>
        <div className="info">
          <ul>
            <li><a href="https://www.linkedin.com/in/ayoub-lahyaoui-890029223/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
            <li><a href="https://github.com/alahyaoui" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
            <li><a href="https://stackoverflow.com/users/18534641/ayoub-lahyaoui" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStackOverflow} size="2x" /></a></li>
            <li><a href="" title="Discord - ayoubino#8988" onClick={copyToClipboard} target="_self"><FontAwesomeIcon icon={faDiscord} size="2x" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;