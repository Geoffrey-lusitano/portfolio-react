import React from 'react'
import './about.css'
import ME from '../../assets/moi.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Ce qu'il faut savoir</h5>
      <h1>À propos de moi</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>+1 ans</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>+6 en france</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projets</h5>
              <small>+10 réalisés</small>
            </article>
          </div>
          <p>
          J’accompagne les entreprises à la mise en place de leur site ou de leur application pour optimiser la visibilité de leur activité.
          J’utilise des technologies modernes comme Vuejs/Reactjs qui permettent des créations fluides, facilitent le référencement et améliorent les performances. <br/><br/>
          </p>
          <p>Je prends en compte leurs souhaits pour en dégager l’objectif principal afin de bien cerner la demande et créer l’application qui correspond à leurs valeurs.</p>
          <p>J’aime organiser mon travail, étapes par étapes, à l’image de la méthode AGILES, ce qui permet de suivre l’avancement du projet et de vérifier qu’il correspond toujours à leurs attentes.</p>
          <p>J’ai développé un esprit d’analyse qui me permet de détecter les bugs et de les résoudre mais aussi de définir des procédures qui vont permettre une optimisation, de la conception à la production, en passant par la résolution des erreurs. 
          Une prise de recul sur le problème rencontré permet dans un premier temps de dégager une solution rapide de contournement. Puis j’analyse la source de l’erreur pour une résolution complète. Enfin j’établi une procédure dans l’éventualité où on serait de nouveau confronté au même type d’erreur. </p>
          <p>Lorsque que l’informatique ne répond pas à nos attentes, cela risque de nous bloquer dans notre activité, nous faire prendre du retard ou avoir des conséquences financières non négligeables, et dans tous les cas, générer beaucoup de stress. C’est pourquoi je veille à apporter, dans un premier temps, une solution rapide qui permet de relancer immédiatement l’activité. Dans un second temps je m’attaque au problème en profondeur pour une résolution complète et durable.</p>
          <p>J’aspire à faire la meilleure utilisation de mon énergie, c’est là l’un des principes fondamental au judo.
          « L’utilisation la plus efficace possible du potentiel psychique et physique est le principe qui relie tous les cas d’attaque et de défense en judo, et on peut même dire que c’est là son enseignement.  Cette meilleure exploitation de l’énergie est l’enseignement le plus important sur le plan de la pratique du judo mais l’est également pour tous les buts de quelque domaine que ce soit de la vie quotidienne » selon SEIRYOKU ZENYO.</p>
          <p>Enfin mon expérience d’assistant manager à EDF m’a aidé à développer mes capacités de communication, à veiller à une bonne collaboration avec les équipes, à réellement prendre en compte les besoins du client grâce à une écoute active et à une bonne organisation, afin de respecter les engagements pris.</p>
          <a href="#contact" className="btn btn-primary">Discutons de votre projet !</a>
        </div>
      </div>
    </section>
  )
}

export default About