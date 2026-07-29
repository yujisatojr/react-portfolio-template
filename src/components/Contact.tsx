import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name !== "" && email !== "" && message !== "") {
      var templateParams = {
        name: name,
        email: email,
        message: message,
      };

      const serviceId =
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_hh7es0t";
      const templateId =
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_im1bms6";
      const publicKey =
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "rrvcf1sHUgT5ehkl8";

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully! I will get back to you soon.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        },
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>You can reach me at shripadkhandare2020@gmail.com.</p>
          <form
            ref={form}
            noValidate={true}
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={nameError}
                />
                {nameError && (
                  <span className="error-text">Please enter your name</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={emailError}
                />
                {emailError && (
                  <span className="error-text">Please enter your email</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Send me any inquiries or questions"
                rows={4}
                className="body-form"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={messageError}
              />
              {messageError && (
                <span className="error-text">Please enter the message</span>
              )}
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
