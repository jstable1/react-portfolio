import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
    }
  };

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
      <form class="contact-form" onSubmit={handleSubmit} action="contactform.php" method="post">
        <div class="inputBoxes">
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name"></input>
          <input type="text" name="email" defaultValue={email} onBlur={handleChange} placeholder="Your Email"></input>
          <textarea type="text" name="message" defaultValue={message} onBlur={handleChange} placeholder="Message"></textarea>
        </div>
        <button type="submit" class="contactButton" name="submit">Submit</button>
      </form>
      {/* <form id="contact-form" onSubmit={handleSubmit}>
        <div class="inputBoxes">
          <label htmlFor="name">Name:</label><br></br>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div class="inputBoxes">
          <label htmlFor="email">Email Address:</label><br></br>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div class="inputBoxes">
          <label htmlFor="message">Message:</label><br></br>
          <textarea name="message" rows="8" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" class="contactButton">Submit</button>
      </form> */}
      <h3>My email is jessica.stabler@gmail.com in case you prefer to email me later</h3>
    </section>
  );
}

export default Contact;