import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from 'react-fade-in';
import './index.scss';

ReactDOM.render(
  <>
    <Navigation />
    <FadeIn transitionDuration={700}>
      <Main/>
      <Expertise/>
      <Timeline/>
      <Project/>
      <Contact/>
    </FadeIn>
    <Footer />
  </>,

  document.getElementById("root")
);

serviceWorker.unregister();