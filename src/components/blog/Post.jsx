import React from "react";
//import React, { useEffect } from "react";
import { useParams } from "react-router";
import data from './data'

function Post() {
  let { postSlug } = useParams();

  /*
  useEffect(() => {
    // Fetch post using the postSlug
    title,
    description
  }, data[caseSlug]);
  */

  const fetched = data[postSlug];
  const { heading, description, body } = fetched;

  return (
    <div className="post_show">
        <h2 className="mt-5">{ heading }</h2>
        <h3>{ description }</h3>
        <p>
          { body }
        </p>
    </div>
  );
}

export default Post;