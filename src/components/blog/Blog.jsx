import React from "react";
import '../assets/style/Blog.scss'
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div className="items_wrapper">
        <h1>Blog</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;