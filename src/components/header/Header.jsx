import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/moi.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, Je suis</h5>
        <h1>Geoffrey Lusitano</h1>
        <h5 className="text-light">Développeur Fullstack</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Défiler vers le bas</a>
      </div>
    </header>
  )
}

export default Header