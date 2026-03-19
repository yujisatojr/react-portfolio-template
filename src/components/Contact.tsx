import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const isNameEmpty = trimmedName === "";
    const isEmailEmpty = trimmedEmail === "";
    const isEmailInvalid = !isValidEmail(trimmedEmail);
    const isMessageEmpty = trimmedMessage === "";

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty || isEmailInvalid);
    setMessageError(isMessageEmpty);
    setStatusMessage("");
    setStatusType("");

    if (isNameEmpty || isEmailEmpty || isEmailInvalid || isMessageEmpty) {
      return;
    }

    const templateParams = {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    };

    setIsSending(true);

    try {
      await emailjs.send(
        "service_fxhvjud",
        "template_vshzco1",
        templateParams,
        "y-1dcmLlMGjZzM29v"
      );

      await emailjs.send(
        "service_fxhvjud",
        "template_uk3ve5x",
        templateParams,
        "y-1dcmLlMGjZzM29v"
      );

      setStatusType("success");
      setStatusMessage("Message sent successfully. I’ll get back to you shortly.");
      setName("");
      setEmail("");
      setMessage("");
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
    } catch (error) {
      console.error("FAILED...", error);
      setStatusType("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="contact_header">
            <h1>Contact Me</h1>
            <p>
              Have a process that can be automated or improved? Let’s build something smarter together.
            </p>
          </div>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="name"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  if (value.trim() !== "") {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
              />

              <TextField
                required
                id="email"
                type="email"
                placeholder="Please enter your email"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);

                  if (value.trim() === "") {
                    setEmailError(false);
                  } else {
                    setEmailError(!isValidEmail(value.trim()));
                  }
                }}
                error={emailError}
                helperText={
                  emailError
                    ? email.trim() === ""
                      ? "Please enter your email"
                      : "Please enter a valid email address"
                    : ""
                }
                fullWidth
              />
            </div>

            <TextField
              required
              id="message"
              placeholder="Tell me a bit about your project, task, or workflow."
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                const value = e.target.value;
                setMessage(value);
                if (value.trim() !== "") {
                  setMessageError(false);
                }
              }}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              fullWidth
            />

            {statusMessage && (
              <div className={`status-alert ${statusType}`}>
                <span className="status-icon">
                  {statusType === "success" ? (
                    <CheckCircleOutlineIcon fontSize="small" />
                  ) : (
                    <ErrorOutlineIcon fontSize="small" />
                  )}
                </span>
                <span>{statusMessage}</span>
              </div>
            )}

            <div className="contact-footer-row">
              <p className="contact-note">
                Usually replies within 24 hours.
              </p>

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;