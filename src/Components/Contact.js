import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import './contact.css';

export default function Contact() {
  const { theme } = useContext(PortfolioContext);
  return (
    <form className='contactForm' id="contact">
      <h2>Contact</h2>
      <label>Name
        <input type="text" name="Name" placeholder='Name' />
      </label>
      <label>Email Address
        <input type="email" name="Email" placeholder='Email Address' />
      </label>
      <label>Phone Number
        <input type="text" name="Phone Number" placeholder='Phone Number' />
      </label>
      <label>Message
        <textarea />
      </label>
      <button className={`${theme}ContactSubmitButton`}>Submit</button>
    </form>
  )
}