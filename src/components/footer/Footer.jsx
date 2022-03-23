import React from "react";
import {Contact} from ".";

function Footer() {
  return (
    <footer>
      <div className="contact">
        <Contact />
      </div>
      <p>Portfolio made with React.js</p>
      <p>developed by <a href="https://github.com/alahyaoui" target="_blank" rel="noreferrer">Lahyaoui Ayoub</a> forked from <a href="https://github.com/yujisatojr/portfolio" target="_blank" rel="noreferrer">Yuji Sato</a> with his consent</p>
    </footer>
  );
}

export default Footer;