import React from "react";
import {
    App,
    Skill,
    Project,
    Contact,
  } from "./top";

function Home() {
  return (
    <React.StrictMode>
        <App />
        <Skill />
        <Project />
        <Contact />
    </React.StrictMode>
  );
}
export default Home;