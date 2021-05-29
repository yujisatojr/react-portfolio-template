import React from 'react';
import '../style/App.css'
import '../style/project.css';
import mockup from '../assets/img/mockup.jpg';
import '../assets/img/pexels-cameron-casey-1722183.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faLess, faYarn, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from '../FadeInSections'

function Project() {

  return  (
    <div className="experience" id="project">
      <h1>Projects</h1>
      <div class="tiles">
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/1.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
      </div>
      <div class="tiles">
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/1.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/2.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/3.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
        <a class="tile" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/216995/4.jpg"/>
          <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
        </a>
      </div>
    </div>
  );
}

export default Project;