import React from 'react';
import '../assets/style/Hero.scss'
import { TypeAnimation } from 'react-type-animation';
import { CodeBlock, dracula } from 'react-code-blocks';

function Hero({ code, language, showLineNumbers }) {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Welcome to my portfolio!</h1>
          <p>
            This is where I showcase my past projects outside of work. 
            But first, please let me introduce myself.
          </p>
          <CodeBlock
            text={`
  const person = {
    firstName: 'Yuji',
    lastName: 'Sato',
    role: 'Full Stack Engineer',
    city: 'Dallas, TX',
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  function printIntro(obj) {
    console.log("Hi👋 I'm " + obj.fullName() 
      + ", a " + obj.role + " based in " 
      + obj.city);
  }
  
  printIntro(person);            
                `}
            language={'javascript'}
            showLineNumbers={false}
            theme={dracula}
          />

          <TypeAnimation
            sequence={[
              "If I am not coding, you can find me: hiking",
              1000,
              "If I am not coding, you can find me: surfing",
              1000,
              "If I am not coding, you can find me: traveling",
              1000,
              "If I am not coding, you can find me: filming",
              1000,
              "If I am not coding, you can find me: jamming",
              1000
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
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