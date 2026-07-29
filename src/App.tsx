import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import {
  Blogs,
  Certifications,
  Contact,
  Expertise,
  Footer,
  Main,
  Project,
  ReadingJourney,
  Timeline,
} from "./components";
import Navigation from "./components/Navigation";
import "./index.scss";

function Page({ children }: { children: React.ReactNode }) {
  return <main className="page-content">{children}</main>;
}

function NotFound() {
  return (
    <main className="page-content not-found">
      <p className="page-eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="text-link" to="/">
        Return home
      </Link>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Page><Main /></Page>} />
          <Route path="/about" element={<Page><Main /></Page>} />
          <Route path="/expertise" element={<Page><Expertise /></Page>} />
          <Route path="/experience" element={<Page><Timeline /><Certifications /></Page>} />
          <Route path="/projects" element={<Page><Project /></Page>} />
          <Route path="/certifications" element={<Navigate to="/experience" replace />} />
          <Route path="/articles" element={<Page><Blogs /></Page>} />
          <Route path="/reading" element={<Page><ReadingJourney /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
