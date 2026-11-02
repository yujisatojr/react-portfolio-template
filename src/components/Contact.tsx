import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import '../assets/styles/Contact.scss';

function Contact() {
  const email = "andres.carrasco@ingenieros.cl";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contacto</h1>
          <p>¿Buscas colaborar o tienes alguna consulta? Escríbeme directamente:</p>

          <div className="email-container">
            <a href={`mailto:${email}`} className="email-link">
              <EmailIcon className="email-icon" />
              <span>{email}</span>
            </a>
            <Tooltip title={copied ? "¡Copiado!" : "Copiar correo"}>
              <IconButton onClick={handleCopy} className="copy-btn" aria-label="copiar correo">
                {copied ? <CheckIcon fontSize="small" color="success" /> : <ContentCopyIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;