import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import "../assets/styles/Navigation.scss";

const navItems: Array<[string, string]> = [
  ["Competencias", "expertise"],
  ["Experiencia", "history"],
  ["Reconocimientos", "projects"],
  ["Contacto", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  const prefersReducedMotion = () =>
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    setMobileOpen(false);
    setActive(section);

    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    setActive("");
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 220) setActive("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const drawer = (
    <div className="nav-drawer__content">
      <div className="nav-drawer__head">
        <span className="nav-drawer__title">Navegación</span>
        <IconButton
          className="nav-drawer__close"
          aria-label="Cerrar menú"
          onClick={() => setMobileOpen(false)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>

      <nav className="nav-drawer__nav" aria-label="Secciones">
        {navItems.map(([label, id], index) => (
          <button
            key={id}
            className={`nav-drawer__link ${active === id ? "is-active" : ""}`}
            onClick={() => scrollToSection(id)}
            aria-current={active === id ? "true" : undefined}
          >
            <span className="nav-drawer__index">0{index + 1}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="nav-drawer__foot">
        <span className="nav-drawer__foot-label">
          {mode === "dark" ? "Modo oscuro" : "Modo claro"}
        </span>
        <IconButton
          className="navbar__icon"
          onClick={modeChange}
          aria-label={mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {mode === "dark" ? (
            <LightModeIcon fontSize="small" />
          ) : (
            <DarkModeIcon fontSize="small" />
          )}
        </IconButton>
      </div>
    </div>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        id="navigation"
        className={`navbar ${scrolled ? "is-scrolled" : ""}`}
      >
        <Toolbar disableGutters className="navbar__inner glass glass--pill">
          <button
            className="navbar__brand"
            onClick={scrollToTop}
            aria-label="Ir al inicio"
          >
            <span className="navbar__mark">AC</span>
            <span className="navbar__name">Andrés Carrasco</span>
          </button>

          <nav className="navbar__links" aria-label="Secciones">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                className={`navbar__link ${active === id ? "is-active" : ""}`}
                onClick={() => scrollToSection(id)}
                aria-current={active === id ? "true" : undefined}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <IconButton
              className="navbar__icon navbar__theme"
              onClick={modeChange}
              aria-label={mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={mode === "dark" ? "Modo claro" : "Modo oscuro"}
            >
              {mode === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton
              className="navbar__icon navbar__menu"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ className: "nav-drawer__paper" }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navigation;
