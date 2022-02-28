import React from "react";
import { Link } from "react-router-dom";

function Cases() {
  return (
    <div className="home">
      <div>
        <Link to="/cases/Test">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
                width="100"
              />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">Datum LMS: Online Learning Platform</h2>
              <p>
                Oct 2020 - Present
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">On Boarding Students Success, Data Analytics and Visualization</h2>
              <p>
                Apr 2021 - Jul 2021
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">COVID-19 Case Management Dashboard</h2>
              <p>
                Feb 2021 - Mar 2021
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">Real-Estate Multiple Regression Analysis</h2>
              <p>
                Jan 2020 - May 2020
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cases;