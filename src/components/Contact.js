import React from 'react';
import '../style/contact.css';
import FadeInSection from '../FadeInSections'
import github from '../assets/img/github.svg';

function Contact() {
 
  return  (
    <div className="contact" id="contact">
      <div className="info">
        <FadeInSection>
        <ul>
          <li><a href="#" target="_blank" rel="noopener" className="fa fa-linkedin"></a></li>
          <li><a href="#" target="_blank" rel="noopener"><img src={github}/></a></li>
        </ul>
        </FadeInSection>

        <FadeInSection>
        <p>Follow me on social media!</p>
        <p>Website handcrafted by <a href="https://github.com/yujisatojr">Yuji Sato</a> with ❤️</p>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Contact;