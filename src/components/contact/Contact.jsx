import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ji2dbce', 'template_lmsijde', form.current, 'RQhn-2Z-u5eLJzgMZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Un coin pour échanger</h5>
      <h2> Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>contact@geoffrey-lusitano.fr</h5>
            <a href="mailto:contact@geoffrey-lusitano.fr" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+33665103478</h5>
            <a href="https://api.whatsapp.com/send?phone=33665103478" target="_blank">Envoyer un sms</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Prénom' required />
          <input type="text" name='last_name' placeholder='Nom' required />
          <input type="text" name='email' placeholder='Email' required />
          <textarea name="message" rows="10" placeholder='A votre écoute' required></textarea>
          <button type='submit' className="btn btn-primary">Envoyer le message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact