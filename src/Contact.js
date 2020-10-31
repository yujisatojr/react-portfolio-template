import React from 'react';
import './style/contact.css'
import github from './assets/img/github.svg'

function Contact() {
  
  return  (
    <div className="contact" id="contact">
        <div className="info">
        <ul>
            <li><a href="https://www.facebook.com/yujisatojr" target="_blank" className="fa fa-facebook"></a></li>
            <li><a href="https://twitter.com/yujisatojr"  target="_blank" className="fa fa-twitter"></a></li>
            <li><a href="https://www.linkedin.com/in/yujisato/" target="_blank" className="fa fa-linkedin"></a></li>
            <li><a href="https://github.com/yujisatojr" target="_blank"><img src={github}/></a></li>
        </ul>
        <p>Follow me on social media!</p>
        <p>&copy;2020 Yuji Sato. Website handcrafted by me.</p>
        </div>
    </div>
  );
}

export default Contact;