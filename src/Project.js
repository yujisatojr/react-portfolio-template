import React from 'react';
import './App.css'
import mockup from './mockup.png';
import './pexels-cameron-casey-1722183.jpg';

function Project() {

  return  (
    <div class="experience" id="project">
        <div class="content-1">
            <h2>Projects Case Studies</h2>
            <h3>Brigham Young University - Hawaii
              (January 2020 - Current)</h3>
            <p>As a front-end web developer, I implemented the Brightspot CMS to improve the overall design of the school website of Brigham Young University - Hawaii by using Handlebars, LESS, JSON, JavaScript, and HTML. One of the highlights of this project was to reinvent the "Holokai Program of Study Module", which loads the CSV file of various areas of studies and lists all the majors available at the university. By implementing a more modern user interface (UX) and design, we achieved 13% higher website traffic.</p>
            <img src={mockup} alt="preview" />
        </div>
        <div class="content-2">
            <h3>Espalhar LLC. (January - May 2020)</h3>
            <p>I worked as a Python developer for a real estate company in Japan. To help those who struggle to find housing in Japan, I used a multi-regression analysis to find a coefficient correlation from over 8000000 housing listings on Japan's No. 1 real estate website. Based on the data, I was able to provide specific housing recommendations according to clients’ unique needs accurately through statistical analysis.</p><br></br>
        </div>
    </div>
  );
}

export default Project;