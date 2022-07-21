import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>Que puis-je faire pour vous</h5>
      <h2>Mes Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Developpement Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Création de site web</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Ajout de fonctionnalités</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Création de site e-commerce</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Dynamisation des pages web</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Responsive design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Interface utilisateur</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Création de contenu</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Création de logo</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Ajout de contenu pour vos sites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Réseaux sociaux</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Référencement</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Référencement naturel</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p> Optimisation du SEO</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services