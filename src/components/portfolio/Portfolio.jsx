import React from 'react'
import './portfolio.css'
import pilates from '../../assets/portfolio/pilates.png'
import ohmyfood from '../../assets/portfolio/ohmyfood.png'
import kanap from '../../assets/portfolio/Kanap.png'
import piiquante from '../../assets/portfolio/piiquante.png'
import groupomania from '../../assets/portfolio/groupomania.png'

const data = [
  {
    id: 1,
    image: pilates,
    title: 'Site vitrine de Pilates',
    github: 'https://github.com/Geoffrey-lusitano/le-corps-pilates',
    demo: 'http://lecorpspilates.fr/',
  },
  {
    id: 2,
    image: ohmyfood,
    title: 'Site restaurant demo',
    github: 'https://github.com/Geoffrey-lusitano/BarbosaLusitanoGeoffrey_3_09112021',
    demo: 'https://geoffrey-lusitano.github.io/BarbosaLusitanoGeoffrey_3_09112021/',
  },
  {
    id: 3,
    image: kanap,
    title: 'Site e-commerce en JavaScript',
    github: 'https://github.com/Geoffrey-lusitano/P5',
    demo: 'https://geoffrey-lusitano.github.io/P5/',
  },
  {
    id: 4,
    image: piiquante,
    title: 'API REST pour restaurant',
    github: 'https://github.com/Geoffrey-lusitano/API-REST-piiquante',
    demo: 'https://github.com/Geoffrey-lusitano/API-REST-piiquante/tree/main/backend',
  },
  {
    id: 5,
    image: groupomania,
    title: "Réseau social d'entreprise groupomania",
    github: 'https://github.com/Geoffrey-lusitano/P7_social_network',
    demo: 'https://geoffrey-lusitano.github.io/P7_social_network/',
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes derniers projets</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Demo</a>
              </div>
            </article>
            )
          })
        }


      </div>
    </section>
  )
}

export default Portfolio