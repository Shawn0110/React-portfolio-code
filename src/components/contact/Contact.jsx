import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g115ld9', 'template_00g6ocg', form.current, 'E977-3O28ogy7i9Eg')
  
    e.target.reset()
  };


  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail/>
        <h4>Email</h4>
        <h5>limsami0110@gmail.com</h5>
        <a href="mailto:limsami0110@gmail.com" target="_blank">Send a message</a>
      </article>
      <article className="contact__option">
        <RiMessengerLine/>
        <h4>Messenger</h4>
        <h5>tutorials</h5>
        <a href="https://m.me/" target="_blank">Send a message</a>
      </article>
      <article className="contact__option">
        <MdOutlineEmail/>
        <h4>WhatsApp</h4>
        <h5>+123456789</h5>
        <a href="https://api.whatsapp.com">Send a message</a>
      </article>
  
      </div>
      {/*End Of Contact Options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" row="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact 