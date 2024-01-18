import React from 'react'
import Css from "./Services3.module.css"
import Services from '../Services/Services'
import img1 from "/React/myapp/src/Assets/wolf.png"
import img2 from "/React/myapp/src/Assets/website2.png"
import img3 from "/React/myapp/src/Assets/mobile_2.png"
import img4 from "/React/myapp/src/Assets/DGM.png"
import {useInView} from "react-intersection-observer"

function Services3() {
    const services = [
        { id: 1, className: Css.Circle, Image: img1, nam: "Logos" },
        { id: 2, className: Css.Circle, Image: img2, nam: "Website Development" },
        { id: 3, className: Css.Circle, Image: img3, nam: "Mobile App Development" },
        { id: 4, className: Css.Circle, Image: img4, nam: "Digital marketing" },
    ]

    const {ref: ref1 , inView: ser1} = useInView({threshold:.9,triggerOnce:true})

    return (
        <>
            <div className={`${Css.ServicesWrapper} ${ser1 ? Css.anim1 : ""}`} ref={ref1}>
                {services.map((service) => (
                    <div key={1} className={Css.contentWrapper}>
                        <div key={service.id} className={`${service.className}`} style={{ background: service.backgroundColor }}>
                            <img src={service.Image}></img>
                        </div>
                        <h3 className={Css.h3}>{service.nam}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services3