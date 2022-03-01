import React from "react";
//import React, { useEffect } from "react";
import { useParams } from "react-router";
import data from './data'

function Case() {
  let { caseSlug } = useParams();

  /*
  useEffect(() => {
    // Fetch post using the postSlug
    title,
    description
  }, data[caseSlug]);
  */

  const fetched = data[caseSlug];
  const { title, description, problem, solution, results, image } = fetched;

  return (
    <div className="home">
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src={ image }
          alt=""
          width="100%"
        />
        <h1 className="mt-5">{ title }</h1>
        <p className="mb-5">{ description }</p>
        <h2>Problem</h2>
        <p>
          { problem }
        </p>
        <h2>Solution</h2>
        <p>
          { solution }
        </p>
        <h2>Results</h2>
        <p>
          { results }
        </p>
    </div>
  );
}

export default Case;