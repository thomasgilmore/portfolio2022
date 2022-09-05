import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import './contact.css';

export default function Contact() {
  const { theme, handeContactNameChange, handeContactEmailChange, handeContactPhoneNumberChange, handeContactMessageChange } = useContext(PortfolioContext);
  return (
    <form className='contactForm' id="contact">
      <h2>Contact</h2>
      <label>Name
        <input type="text" name="Name" placeholder='Name' onChange={handeContactNameChange} required />
      </label>
      <label>Email Address
        <input type="email" name="Email" placeholder='Email Address' onChange={handeContactEmailChange} pattern = "^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$" required />
      </label>
      <label>Phone Number
        <input type="text" name="Phone Number" placeholder='Phone Number' onChange={handeContactPhoneNumberChange} />
      </label>
      <label>Message
        <textarea onChange={handeContactMessageChange} required />
      </label>
      <button className={`${theme}ContactSubmitButton`}>Submit</button>
    </form>
  )
}