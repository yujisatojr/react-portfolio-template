import React from "react";

function About() {
  return (
    <div class="items_wrapper">
      <div className="about">
        <h1>About Me</h1>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://yuji-aws-bucket.s3.us-east-2.amazonaws.com/about_image.jpg"
              alt=""
              width="100%"
            />
          </div>
          <div class="col-lg-5">
            <p>
              I am a self-motivated developer and passionate about utilizing technology to turn creative ideas into tangible business value. I believe that using the right digital tools can maximize our ability to serve others and enhance each user’s experience. I am also a committed life-long learner and eager to implement more efficient algorithms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;