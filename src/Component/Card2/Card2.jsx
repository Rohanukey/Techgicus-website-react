import React from 'react'
import Css from './Card2.module.css'
import img1 from "../../Assets/Dm2.png"
import { useInView } from 'react-intersection-observer'

function Card2() {

  const cards = [
    { id: 1, className: Css.card, title: "Page1" },
    { id: 2, className: Css.card, title: "Page2" },
    { id: 3, className: Css.card, title: "Page3" },
  ]
  const { ref: ref1, inView: ser1 } = useInView({ threshold: .9, triggerOnce: true })

  return (
    <div className={`${Css.cardWrapper} ${ser1 ? Css.anim1 : ""}`} ref={ref1}>
      {cards.map((card) => (
        <div key={1} className={Css.cover}>
          <div key={card.id} className={card.className} style={{ background: `url(${img1})` }}>
          </div>
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Card2