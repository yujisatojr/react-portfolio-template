import React from 'react';
import './style/project.css';
import screenshot_rainbow_attack from './assets/img/rainbow-attack.jpeg';
import screenshot_curriculum_simulator from './assets/img/curriculum-simulator.jpeg';
import screenshot_stibride from './assets/img/stibride.jpeg';
import screenshot_esi_reading from './assets/img/esi_reading.jpeg';
import screenshot_abalone from './assets/img/abalone.jpeg';
import screenshot_2048 from './assets/img/2048.jpeg';
import FadeInSection from '../fade/FadeInSections'

function Project() {
  return  (
    <div className="projects-container" id="project">
    <FadeInSection>
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/alahyaoui/curriculum-simulator" target="_blank" rel="noreferrer"><img src={screenshot_curriculum_simulator} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/alahyaoui/curriculum-simulator" target="_blank" rel="noreferrer"><h2>Curriculum Simulator</h2></a>
          <p>Java Spring web application for students of my school to see which subjects are accessible to them according to the subjects they have passed.</p>
          <p>Used: Java, Spring Boot, Thymeleaf, Lombok, H2</p>
          <p>Patterns: MVC, Observer, Repository, Singleton</p>
        </div>
        <div className="project">
          <a href="https://github.com/alahyaoui/StibRide" target="_blank" rel="noreferrer"><img src={screenshot_stibride} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/alahyaoui/StibRide" target="_blank" rel="noreferrer"><h2>Stib Ride</h2></a>
          <p>JavaFX application that allows users to get the shortest path between two metro station in the public transport network of Brussels.</p>
          <p>Used: Java, JavaFx, Scene Builder, SQLite</p>
          <p>Patterns: MVP, Observer, Repository, Dao, Dto</p>
        </div>
        <div className="project">
          <a href="https://github.com/alahyaoui/RainbowAttack" target="_blank" rel="noreferrer"><img src={screenshot_rainbow_attack} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/alahyaoui/RainbowAttack" target="_blank" rel="noreferrer"><h2>Rainbow Attack</h2></a>
          <p>Developed in the context of my cyber security course. This TUI C++ application allows you to generate a rainbow table and crack sha256 hashed passwords using the previously generated rainbow table.</p>
          <p>Used: C++, Makefile, Bash script</p>
        </div>
        <div className="project">
          <a href="https://github.com/alahyaoui/esi_reading-odoo" target="_blank" rel="noreferrer"><img src={screenshot_esi_reading} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/alahyaoui/esi_reading-odoo" target="_blank" rel="noreferrer"><h2>Reading Esi</h2></a>
          <p>Reading Esi is an odoo module helping bookstore organizations to store, rent, buy and sell books</p>
          <p>Used: Odoo, Python</p>
          <p>Patterns: MVC</p>
        </div>
        <div className="project">
          <a href="https://github.com/alahyaoui/Abalone" target="_blank" rel="noreferrer"><img src={screenshot_abalone} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/alahyaoui/Abalone" target="_blank" rel="noreferrer"><h2>Abalone</h2></a>
          <p>Developed the Abalone game using C++ and QT Designer while following the OOP principles.</p>
          <p>Used: C++, QT Designer</p>
          <p>Patterns: MVC</p>
        </div>
        <div className="project">
          <a href="https://github.com/alahyaoui/2048" target="_blank" rel="noreferrer"><img src={screenshot_2048} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/alahyaoui/2048" target="_blank" rel="noreferrer"><h2>2048</h2></a>
          <p>My JavaFX implementation of the 2048 game following the OOP principles</p>
          <p>Used: Java, JavaFx</p>
          <p>Patterns: MVC</p>
        </div>
      </div>
    </FadeInSection>
    </div>
  );
}

export default Project;