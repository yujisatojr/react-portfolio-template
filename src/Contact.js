import React from 'react';
import './style/contact.css';
import FadeInSection from './FadeInSections'
import github from './assets/img/github.svg';

function Contact() {
 
  return  (
    <div className="contact" id="contact">
      <div className="info">
        <FadeInSection>
        <ul>
          <li><a href="https://www.facebook.com/yujisatojr" target="_blank" rel="noopener" className="fa fa-facebook"></a></li>
          <li><a href="https://twitter.com/yujisatojr"  target="_blank" rel="noopener" className="fa fa-twitter"></a></li>
          <li><a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noopener" className="fa fa-linkedin"></a></li>
          <li><a href="https://github.com/yujisatojr" target="_blank" rel="noopener"><img src={github}/></a></li>
        </ul>
        </FadeInSection>

        <FadeInSection>
        <p>Follow me on social media!</p>
        <p>&copy;2020 Yuji Sato. Website handcrafted by me.</p>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Contact;