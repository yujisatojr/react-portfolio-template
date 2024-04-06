import React from "react";
import { useParams } from "react-router";
import data from './data'

function Post() {
  let {postSlug} = useParams();

  const fetched = data[postSlug];
  const {heading, body} = fetched;

  // Split the body text by newline to apply indentation
  const lines = body.split('\n');

  return (
    <div className="post_show">
      <h2 className="mt-5">{heading}</h2>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default Post;