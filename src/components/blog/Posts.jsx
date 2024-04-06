import React from "react";
import { Link } from "react-router-dom";
import data from './data'

function Posts() {
  return (
    <div className="home">
      <ul className="case_list">
      {Object.entries(data).map(([postSlug, {heading, body}]) => (
        <li key={postSlug}>
        <Link to={`/react-portfolio-template/blog/${postSlug}`}>
          <h2>{heading}</h2>
          <p>{body.length > 100 ? body.slice(0, 280) + '...' : body}</p>
          <p><span>Read More {">>"}</span></p>
        </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Posts;