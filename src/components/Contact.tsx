import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "../assets/styles/Contact.scss";

function Contact() {
  const email = "andres.carrasco@ingenieros.cl";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <div className="contact-panel glass">
          <div className="contact-panel__intro">
            <p className="eyebrow">04 / Contacto</p>
            <h2>Hablemos</h2>
            <p>
              ¿Buscas colaborar o tienes alguna consulta? Escríbeme
              directamente:
            </p>
          </div>

          <div className="email-container glass glass--pill">
            <a href={`mailto:${email}`} className="email-link">
              <EmailIcon className="email-icon" />
              <span>{email}</span>
            </a>

            <span className="email-container__divider" aria-hidden="true" />

            <Tooltip title={copied ? "¡Copiado!" : "Copiar correo"}>
              <IconButton
                onClick={handleCopy}
                className="copy-btn"
                aria-label="Copiar correo"
              >
                {copied ? (
                  <CheckIcon fontSize="small" color="success" />
                ) : (
                  <ContentCopyIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </div>

          <span className="sr-only" role="status" aria-live="polite">
            {copied ? "Correo copiado al portapapeles" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
