import React from 'react';
import mypic from '../assets/img/mypic.png';
import '../assets/img/pexels-jakub-novacek-924824.jpg';

function App() {

  return  (
    <div className="introduction" id="intro">
      <p>John Doe</p>
      <p>Mobile Application Developer</p>
      <img src={mypic} alt="mypic"/>
    </div>
  );
}

export default App;