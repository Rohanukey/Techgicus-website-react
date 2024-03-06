import React from 'react'
import Css from "./AboutPage.module.css"
import img1 from "../../Assets/about_img1.png"
import img2 from "../../Assets/about_img2.png"
import img3 from "../../Assets/about_img3.png"
import { useInView } from 'react-intersection-observer';

function AboutPage() {

    const { ref: myref1, inView: card1inView } = useInView({
        threshold: .9,
        triggerOnce: true
    })
    const { ref: myref2, inView: card2inView } = useInView({
        threshold: .9,
        triggerOnce: true
    })

    const cards = [
        { id: 1, className: Css.card, num: 1, title: "Standardization", p: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... Read More" },
        { id: 2, className: Css.card, num: 2, title: "Reduced Costs", p: "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... Read More" },
        { id: 3, className: Css.card, num: 3, title: "More Customization", p: "Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ... Read More" },
        { id: 4, className: Css.card, num: 4, title: "Affordable Pricing", p: "With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ... Read More" },
        { id: 5, className: Css.card, num: 5, title: "Learner Satisfaction", p: "If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... Read More" },
        { id: 6, className: Css.card, num: 6, title: "Multimedia Materials", p: "One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ... Read More" },
    ]


    return (

        <>
            <div className={Css.MainWrapper}>
                <div className={Css.cardWrapper}>
                    <div className={Css.cardContent}>
                        <h1>About Techgicus</h1>
                        <h2>Welcome to Techgicus Where Innovation Meets Excellence!</h2>
                        <p>At Techgicus, we are more than just a software solutions company; we are your digital partners committed to transforming ideas into exceptional digital experiences. With a passion for innovation and a focus on delivering tangible results, we stand out in the crowded landscape of technology companies.</p>
                    </div>
                    <div className={Css.cardImg} ref={myref2}>
                        <div className={`${Css.imgCase1} ${card2inView ? Css.anim1 : ""}`}><img src={img1}></img></div>
                        <div className={`${Css.imgCase2} ${card2inView ? Css.anim2 : ""}`}><img src={img2}></img></div>
                    </div>
                </div>
                <div className={Css.cardWrapper2} >
                    <div className={Css.card2Img} ref={myref1}>
                        <div className={`${Css.imgCase3} ${card1inView ? Css.anim3 : ""}`}><img src={img3}></img></div>
                    </div>
                    <div className={Css.cardContent}>
                        <h1>Features</h1>
                        <h2>Key about the techgicus</h2>
                        <p>At WEEKENDUX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.</p>
                        <p>You will find every little thing on the internet in just a click of hand, but here we admire that without knowledge and practice the internet may even also fail you in your life.
                        </p>
                    </div>
                </div>
                <div className={Css.cardWrapper2}>
                    <div className={Css.card2Content}>
                        <h1>Client-centric Approach</h1>
                        <h2>Why Choose Us</h2>
                        <p>At Techgicus, your success is our success. We pride ourselves on understanding your business objectives, collaborating closely with you, and delivering solutions that exceed expectations. Our client-centric approach is not just a strategy; it's ingrained in our culture.</p>
                    </div>
                </div>

                <div className={Css.cards}>
                    {cards.map((card) => (
                        <div key={card.key} className={card.className}>
                            <h3>{card.num}</h3>
                            <h4>{card.title}</h4>
                            <p>{card.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutPage