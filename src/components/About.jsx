import React from "react";
import './assets/style/Hero.scss'

function About() {
  return (
    <div className="items_wrapper">
      <h1>About Me</h1>
      <div className="about-page">
        <div className="align-items-center">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/about-image.jpg" alt="Asset by Oziel Gómez" />
          <p>
            I graduated with a bachelor's degree in computer science 
            from Brigham Young University - Hawaii. As a former full stack engineer, 
            I collaborated with agile teams to deliver 5+ RESTful web applications for a 
            diverse population of 3,200 customers. My expertise includes full stack development, 
            DevOps, data governance, and project management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;