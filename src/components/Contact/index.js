import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePhoneIphone } from 'react-icons/md';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, subject, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section class="contact">
      <h1 data-testid="h1tag">Contact Me</h1>
      <form class="contact-form" action="contactform.php" method="post">
        <div class="inputBoxes">
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name"></input>
          <input type="text" name="subject" defaultValue={subject} onBlur={handleChange} placeholder="Subject"></input>
          <input type="text" name="email" defaultValue={email} onBlur={handleChange} placeholder="Your Email"></input>
          <textarea type="text" name="message" defaultValue={message} onBlur={handleChange} placeholder="Message"></textarea>
        </div>
        <button type="submit" class="contactButton" name="submit">Submit</button>
      </form>
      <div class="contactFormOptions">
        <a href="mailto:jessica.stabler@gmail.com"><AiOutlineMail size={35}/><span>jessica.stabler@gmail.com</span></a>
        <p><MdOutlinePhoneIphone size={35}/><span>801-230-4660</span></p>
      </div>
    </section>
  );
}

export default Contact;