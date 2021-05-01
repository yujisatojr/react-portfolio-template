import React from "react"
//import Fade from "react-reveal/Fade"
//import data from "../yourdata"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <Jumbotron>
          <h1>Made in Hawaii</h1>
          <p>My name is Yuji</p>
        </Jumbotron>
      </div>
    </div>
  )
}

export default Header
