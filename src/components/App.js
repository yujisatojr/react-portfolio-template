import React from 'react';

function App() {

  return  (
    <div>
      <div className="nav-bar">
        <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="introduction" id="intro">
        <h1>Yuji Sato</h1>
        <p>Developer / Analyst</p>
      </div>
    </div>
  );
}

export default App;