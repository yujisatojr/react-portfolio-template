import React from 'react';
import '../assets/img/pexels-jakub-novacek-924824.jpg';

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
        <h1>Made in Hawaiʻi</h1>
      </div>
    </div>
  );
}

export default App;