import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePhoneIphone } from 'react-icons/md';



function Contact() {

  return (
    
    <div class="contactFormOptions">
      <a href="mailto:jessica.stabler@gmail.com"><AiOutlineMail size={35}/><span>jessica.stabler@gmail.com</span></a>
      <p><MdOutlinePhoneIphone size={35}/><span>801-230-4660</span></p>
    </div>
  );
}

export default Contact;