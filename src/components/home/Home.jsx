import React from "react";
import {
    Introduction,
    Skill,
    Project,
} from ".";

function Home() {
  return (
    <React.StrictMode>
        <Introduction />
        <Skill />
        <Project />
    </React.StrictMode>
  );
}
export default Home;