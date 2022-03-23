import React from "react";
import {
    Introduction,
    Specialty,
    Project,
} from ".";

function Home() {
  return (
    <React.StrictMode>
        <Introduction />
        <Specialty />
        <Project />
    </React.StrictMode>
  );
}
export default Home;