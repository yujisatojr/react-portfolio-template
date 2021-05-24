import React from 'react';
import '../style/App.css'
import FadeInSection from '../FadeInSections'

function About() {

  return  (

    <div className="about" id="about">
      <FadeInSection>
        <h2>About</h2>
      </FadeInSection>
      <FadeInSection>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum risus, fermentum eu blandit quis, bibendum nec odio. Aliquam vulputate ipsum vel diam sagittis semper. Donec ullamcorper orci nec massa mattis, eget tempus nisl facilisis. Suspendisse sit amet lacus varius, placerat leo vestibulum, bibendum lorem. Vivamus vehicula metus felis, vitae dignissim nunc maximus a. Etiam sit amet ligula vitae ex pharetra imperdiet sed ut ante. Sed pharetra magna ac libero volutpat, vitae interdum mauris blandit. Vestibulum quis diam ac eros maximus aliquam. Fusce ut leo nisl. Nunc vel mollis nulla. Etiam sed nisl sit amet erat hendrerit auctor ac vitae ante. Mauris id bibendum elit. Vestibulum finibus nibh sit amet tincidunt efficitur.</p>
      </FadeInSection>
    </div>
  );
}

export default About;