import React from "react";
import { Button } from '@material-ui/core';

function Contact() {
  return (
    <div className="items_wrapper">
      <h1>Contact Me</h1>
      <form>
        <label for="fname">Full Name</label>
        <input type="text" id="fname" name="fullname" placeholder="Your name.."/>

        <label for="fname">Email/Phone Number</label>
        <input type="text" id="fname" name="contact" placeholder="Your contact information.."/>

        <label for="subject">Inquiry</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

        <Button variant="contained" size="large">Submit</Button>
      </form>
    </div>
  );
}

export default Contact;