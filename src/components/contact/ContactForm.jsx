// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@material-ui/core';
import "./style/contact.css"

function ContactForm() {
    const [state, handleSubmit] = useForm("mnqwbajb");
    if (state.succeeded) {
        return (
            <div className="contact_form">
                <div className="items_wrapper">
                    <h1 className="response">Thanks for contacting me!</h1>
                </div>
            </div>
        );
    }
    return (
        <div className="contact_form">
            <div className="items_wrapper">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <label for="subject">Subject</label>
                    <input id="subject" type="text" name="subject" placeholder="Subject.." required />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />

                    <label for="fname">Full Name</label>
                    <input id="fname" type="text" name="fullname" placeholder="Your name.." required/>
                    <ValidationError prefix="Fullname" field="fname" errors={state.errors} />

                    <label for="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Your contact information.." required/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label for="message">Inquiry</label>
                    <textarea id="message" name="message" placeholder="Write something.." required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <Button type="submit" variant="contained" size="large" disabled={state.submitting}>Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;