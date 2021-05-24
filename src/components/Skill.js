import React from 'react';
import '../style/skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-regular-svg-icons'
import { faJava, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from '../FadeInSections'

function Skill () {

  return  (
    <div className="skills" id="skills">
        <div className="boxes">
          <FadeInSection>
            <div className="box-1">
              <div className="flip-card">
                <div className="flip-card-inner" id="flip-one">
                  <div className="flip-card-front">
                    <div id="inner-content">
                      <FontAwesomeIcon icon={faJava} size="3x"/>
                      <h4>Software Development</h4>
                    </div>
                  </div>
                  <div className="flip-card-back" id="flip-card-back-one">
                    <div id="inner-content-back">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="box-2">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div id="inner-content">
                      <FontAwesomeIcon icon={faReact} size="3x"/>
                      <h4>Web Development</h4>
                    </div>
                  </div>
                  <div className="flip-card-back" id="flip-card-back-two">
                    <div id="inner-content-back">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="box-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div id="inner-content">
                      <FontAwesomeIcon icon={faPython} size="3x"/>
                      <h4>Data Analytics</h4>
                    </div>
                  </div>
                  <div className="flip-card-back" id="flip-card-back-three">
                    <div id="inner-content-back">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
          </div>
    </div>
  );
}

export default Skill;