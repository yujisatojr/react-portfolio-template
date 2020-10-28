import React from 'react';
import mypic from './assets/img/mypic.png';
import './assets/img/pexels-jakub-novacek-924824.jpg';

function App() {

  return  (
    <div className="introduction" id="intro">
      <p>Yuji Sato</p>
      <p>Developer / Data Analyst</p>
      <img src={mypic} alt="mypic"/>
    </div>
  );
}

export default App;