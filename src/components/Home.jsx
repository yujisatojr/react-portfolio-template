import React from "react";
import {
    Header,
    Skill,
    Project,
    Contact,
} from "./top";

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