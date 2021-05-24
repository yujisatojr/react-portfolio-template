import React from 'react';
import '../style/App.css'
import mockup from '../assets/img/mockup.jpg';
import '../assets/img/pexels-cameron-casey-1722183.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faLess, faYarn, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from '../FadeInSections'

function Project() {

  return  (
    <div className="experience" id="project">

        <div className="content-0">
          <FadeInSection>
            <h2>Projects & Experiences</h2>
            <h3><a href="#" target="_blank" rel="noreferrer">Project #1</a></h3>
          </FadeInSection>

          <FadeInSection>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem.</p>
          </FadeInSection>

          <FadeInSection>
            <ul>
              <li>Used:</li>
              <li>Ruby on Rails</li>
            </ul>
          </FadeInSection>
        </div>

        <div className="content-1">

          <FadeInSection>
            <h3><a href="#" target="_blank" rel="noreferrer">Project #2</a></h3>
          </FadeInSection>

          <FadeInSection>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem.</p>
          </FadeInSection>

          <FadeInSection>
            <img src={mockup} alt="preview" />
          </FadeInSection>

          <FadeInSection>
            <ul>
              <li>Used:</li>
              <li><FontAwesomeIcon icon={faHtml5} size="lg"/></li>
              <li><FontAwesomeIcon icon={faCss3Alt} size="lg"/></li>
              <li><FontAwesomeIcon icon={faJs} size="lg"/></li>
              <li><FontAwesomeIcon icon={faLess} size="lg"/></li>
              <li><FontAwesomeIcon icon={faYarn} size="lg"/></li>
              <li><FontAwesomeIcon icon={faNodeJs} size="lg"/></li>
              <li><FontAwesomeIcon icon={faNpm} size="lg"/></li>
            </ul>
          </FadeInSection>
        </div>
        
        <div className="content-2">

          <FadeInSection>
            <h3><a href="#" target="_blank" rel="noreferrer">Project #3</a></h3>
          </FadeInSection>

          <FadeInSection>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem.</p>
          </FadeInSection>

          <FadeInSection>
            <img src={mockup} alt="preview2" />
          </FadeInSection>

          <FadeInSection>
            <ul>
              <li>Used:</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Sklearn</li>
              <li>Seaborn</li>
              <li>SQL</li>
              <li>Jupyter</li>
            </ul>
          </FadeInSection>
        </div>

    </div>
  );
}

export default Project;