import React from "react";
import { Outlet } from "react-router-dom";

const BlogPosts = {
  '1': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  '2': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

function CaseStudies() {
  return (
    <div className="home">
      <div class="items_wrapper">
        <h1>Case Studies</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default CaseStudies;