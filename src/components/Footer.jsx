import React from "react";
import Contact from "./top/Contact";

function Footer() {
  return (
    <footer class="py-5 bg-dark fixed-bottom">
      <div className="contact">
        <Contact />
      </div>
    </footer>
  );
}

export default Footer;