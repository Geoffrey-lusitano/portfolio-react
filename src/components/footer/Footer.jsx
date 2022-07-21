import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Geoffrey LUSITANO</a>

      <ul className="permalinks">
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#experience">Compétences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        
      </div>

      <div className="footer__copyright">
        <small>&copy; Geoffrey LUSITANO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer