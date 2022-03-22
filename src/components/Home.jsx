import React from "react";
import {
    App,
    Skill,
    Project,
} from "./top";

function Home() {
  return (
    <React.StrictMode>
        <App />
        <Skill />
        <Project />
    </React.StrictMode>
  );
}
export default Home;