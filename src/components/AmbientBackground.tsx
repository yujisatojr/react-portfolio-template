import React from "react";
import "../assets/styles/AmbientBackground.scss";

function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__base" />
      <div className="ambient__orb ambient__orb--one" />
      <div className="ambient__orb ambient__orb--two" />
      <div className="ambient__orb ambient__orb--three" />
      <div className="ambient__grid" />
      <div className="ambient__sweep" />
      <div className="ambient__sweep ambient__sweep--reverse" />
      <div className="ambient__grain" />
    </div>
  );
}

export default AmbientBackground;
