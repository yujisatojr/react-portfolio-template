import React from 'react';
import '../assets/style/Hero.scss'
import { CodeBlock, monokai } from 'react-code-blocks';

function Hero() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Welcome to my portfolio 👋</h1>
          <p>
            This is where I showcase past projects beyond my work scope. 
            But before we dive in, please let me introduce myself:
          </p>
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
      + ", a " + obj.role + " based in " 
      + obj.city);
  };
  printIntro(person);`
                }
            language={'javascript'}
            showLineNumbers={false}
            theme={monokai}
          />
        </div>
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/home-profile.jpeg" alt="Asset by Oziel Gómez" />
        </div>
      </div>
    </div>
  );
}

export default Hero;