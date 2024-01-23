import React from "react";
import {
    Hero,
    Skill,
    Project,
    Contact,
} from "./section";

function Home() {
  return (
    <React.StrictMode>
      <Hero />
      <Skill />
      <Project />
      <Contact />
    </React.StrictMode>
  );
}
export default Home;