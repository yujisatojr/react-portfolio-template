import React from 'react';
import './contact.css'
import github from './github.svg'

function Contact() {

  return  (
    <div class="contact" id="contact">
        <div class="info">
        <ul>
            <li><a href="https://www.facebook.com/yujisatojr" target="_blank" class="fa fa-facebook"></a></li>
            <li><a href="https://twitter.com/yujisatojr"  target="_blank" class="fa fa-twitter"></a></li>
            <li><a href="https://www.linkedin.com/in/yujisato/" target="_blank" class="fa fa-linkedin"></a></li>
            <li><a href="https://github.com/yujisatojr" target="_blank"><img src={github}/></a></li>
        </ul>
        <p>Follow me on social media!</p>
        <p>&copy;2020 Yuji Sato. Website handcrafted by ME.</p>
        </div>
    </div>
  );
}

export default Contact;