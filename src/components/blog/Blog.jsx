import React from "react";
import '../../assets/styles/Blog.scss'
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div>
      <div className="header-image">
        <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/about-image.jpg" alt="Asset by Oziel Gómez" />
      </div>
      <div className="items-container">
        <h1>Blog</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;