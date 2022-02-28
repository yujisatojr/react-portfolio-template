import React from "react";
import { Link } from "react-router-dom";
import data from './data'

function Cases() {
  return (
    <div className="home">
        <ul>
        {Object.entries(data).map(([caseSlug, { title }]) => (
            <li key={caseSlug}>
            <Link to={`/cases/${caseSlug}`}>
                <h3>{title}</h3>
            </Link>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default Cases;