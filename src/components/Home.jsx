import React from "react";
import {
    Header,
    Skill,
    Project,
    Contact,
} from "./section";

function Home() {
  return (
    <React.StrictMode>
      <Header />
      <Skill />
      <Project />
      <Contact />
    </React.StrictMode>
  );
}
export default Home;