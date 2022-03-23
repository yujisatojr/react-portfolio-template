import React from "react";
import "./style/about.css"

function About() {
  return (
    <div className="about">
      <div class="items_wrapper">
        <div>
          <img
            className="image-wrapper"
            src="https://alahyaoui-website-bucket.s3.eu-west-3.amazonaws.com/about_page.jpeg"
            alt="about_picture"
            width="100%"
          />
        </div>
        <div>
          <h1>About Me</h1>
          <p className="about_text">
            Hello, my name is Ayoub Lahyaoui, and I'm a 20-year-old Belgian computer science student in my third year.<br />
            I enjoy socializing, meeting new people, and learning about different cultures, which leads me to enjoy traveling.<br />
            I have been fortunate to visit a few countries and hope to visit more in the future.<br />
            As a computer and technology enthusiast, I've developed a wide range of skills in a variety of computer-related fields, making me a highly adaptable individual. <br />
            I strive to make use of all of my abilities but also to acquire new ones in order to help me complete my work as efficiently as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;