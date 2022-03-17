import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e3rk346', 'template_bc50u59', form.current, 'Rhdm-8w_nAkV2Y0wm')

    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contac Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>babubgowtham@gmail.com</h5>
            <a href="mailto:babubgowtham@gmail.com" target="_blank">Sent a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Gowtham B</h5>
            <a href="https://m.me/gowtham.babu.733" target="_blank">Sent a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>8072183611</h5>
            <a href="https://api.whatsapp.com/sent?phone+918072183611" target="_blank">Sent a Message</a>
          </article>
        </div>
        {/*END OF CONTACT*/}
        <form ref={form} onsubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' reauired />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Sent Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact