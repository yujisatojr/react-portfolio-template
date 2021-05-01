import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="nav-bar">
          <nav>
            <div className="nav-left"><a href="https://www.yujisatojr.com"></a></div>
            <div className="nav-right">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
