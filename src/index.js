import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {
  Main,
  Navigation,
  Footer,
} from "./components";
import './index.scss';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/react-portfolio-template" element={<Main />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();