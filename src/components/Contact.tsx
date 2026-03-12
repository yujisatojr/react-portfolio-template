import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser'; // Ensure this import is active
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null); // Add TypeScript type
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('');

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      if (!serviceId || !templateId || !publicKey) {
        setStatusMessage('Email service is not configured yet.');
        return;
      }

      const templateParams = {
        name,
        email,
        message,
      };

      setIsSending(true);
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Message sent successfully.');
        })
        .catch((error: any) => {
          console.log('FAILED...', error);
          setStatusMessage('Message failed to send. Please try again.');
        })
        .finally(() => {
          setIsSending(false);
        });

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Attach the form submit handler
          >
            <div className="form-flex">
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="contact-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              name="message"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </Button>
            {statusMessage !== '' && (
              <p className="form-status" role="status" aria-live="polite">
                {statusMessage}
              </p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
