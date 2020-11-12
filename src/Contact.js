import React from 'react';
import './style/contact.css';
// import './email_form.php';
import github from './assets/img/github.svg';
import cat from './assets/img/cat.png';

const comments = ["Hi, my name is momo.", "Yuji's favorite programming languages are Python and JavaScript", "Yuji's favorite food is ramen.", "Yuji's favorite animal is a cat. Can you tell?", "Yuji likes playing the guitar.", "I'm so sleepy...", "Feed me.", "Stop clickin me! It tickles."];

function Contact() {
  function shoot () {
    var tmp = '';
    const random = Math.floor(Math.random() * comments.length);
    tmp += comments[random]
    var bubble = document.getElementsByClassName('bubble bubble-bottom-left');

    bubble[0].innerHTML = tmp;

    var displaySetting = bubble[0].style.display;
    if (displaySetting == 'block') { 
      bubble[0].style.display = 'none';
    }
    else { 
      bubble[0].style.display = 'block';
    }
  }
  
  return  (
    <div className="contact" id="contact">
      <div className="bubble bubble-bottom-left"></div>
      <div className="momo"><img src={cat} onClick={shoot}/></div>
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