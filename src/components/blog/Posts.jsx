import React from "react";
import { Link } from "react-router-dom";
import data from './data'

function Posts() {
  return (
    <div className="home">
      <ul className="case_list">
      {Object.entries(data).map(([postSlug, {heading, description}]) => (
        <li key={postSlug}>
        <Link to={`/blog/${postSlug}`}>
          <h2>{heading}</h2>
          <p>{description}</p>
          <p><span>Read More {">>"}</span></p>
        </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Posts;