import React from "react";
import { Link } from "react-router-dom";
import data from './data'

function Cases() {
  return (
    <div className="home">
        <ul className="case_list">
        {Object.entries(data).map(([caseSlug, {title, description}]) => (
            <li key={caseSlug}>
            <Link to={`/cases/${caseSlug}`}>
                <h2>{title}</h2>
                <p><span>Read More {">>"}</span></p>
            </Link>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default Cases;