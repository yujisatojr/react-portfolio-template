import React from "react";
import { Outlet } from "react-router-dom";

function CaseStudies() {
  return (
    <div className="home">
      <div className="items_wrapper">
        <h1>Case Studies</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default CaseStudies;