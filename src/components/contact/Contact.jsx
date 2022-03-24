import React from "react";
import { Button } from '@material-ui/core';
import "./style/contact.css"
import { toast } from 'react-toastify';

function Contact() {
  function notYetImplemented(e) {
    e.preventDefault();
      toast.error('Submit button not yet implemented, sorry for the inconvenience 😥, you can contact me through linkedin in the meantime');
  }

  return (
    <div className="contact_form">
      <div className="items_wrapper">
        <h1>Contact Me</h1>
        <form>
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullname" placeholder="Your name.."/>

          <label for="fname">Email/Phone Number</label>
          <input type="text" id="fname" name="contact" placeholder="Your contact information.."/>

          <label for="subject">Inquiry</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <Button variant="contained" size="large" onClick={notYetImplemented}>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;