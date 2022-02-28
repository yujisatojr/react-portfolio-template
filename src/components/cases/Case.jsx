import React, { useEffect } from "react";
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
  const { title, description } = fetched;

  return (
    <div className="home">
      <div className="items_wrapper">
        <h1 className="mt-5">{ title }</h1>
        <h2 className="mb-5">{ description }</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Case;