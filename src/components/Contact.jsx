import React from "react";
import { Button } from '@material-ui/core';

function Contact() {
  return (
    <div className="contact_form">
      <div className="items_wrapper">
        <h1>Contact Me</h1>
        <form>
          <label for="fname">Full Name</label>
          <input type="text" id="fname" name="fullname" placeholder="Your name.."/>

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Inquiry</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

          <Button variant="contained" size="large">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;