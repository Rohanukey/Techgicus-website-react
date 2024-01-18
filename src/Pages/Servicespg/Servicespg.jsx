import React, { useState, useEffect, useRef } from 'react';
import ServiceCss from "./Servicespg.module.css"
import { motion, useScroll } from "framer-motion"
import Header3 from '../../Component/Header3/Header3';
import Footer3 from '../../Component/Footer3/Footer3';

function Servicespg() {

    const myref1 = useRef();
    const myref2 = useRef();
    const myref3 = useRef();
    const myref4 = useRef();

    const [cardIsVisible1, setCardIsVisible1] = useState(false)
    const [cardIsVisible2, setCardIsVisible2] = useState(false)
    const [cardIsVisible3, setCardIsVisible3] = useState(false)
    const [cardIsVisible4, setCardIsVisible4] = useState(false)

    useEffect(() => {
        console.log("myref1", myref1.current)
        console.log("myref2", myref2.current)
        console.log("myref3", myref3.current)
        console.log("myref4", myref4.current)

        const observer1 = new IntersectionObserver((entries) => {

            const entry = entries[0];
            if (entry.isIntersecting) {
                setCardIsVisible1(true);
                console.log("b1", entry)
                observer1.unobserve(myref1.current); // Stop observing after intersection
            }
        },
            {
                threshold: 1,
            }

        )
        const observer2 = new IntersectionObserver((entries) => {

            const entry = entries[0];
            if (entry.isIntersecting) {
                setCardIsVisible2(true);
                console.log("b2", entry)
                observer1.unobserve(myref2.current); // Stop observing after intersection
            }

        },
            {
                threshold: 1,
            }

        )
        const observer3 = new IntersectionObserver((entries) => {

            const entry = entries[0];
            if (entry.isIntersecting) {
                setCardIsVisible3(true);
                console.log("b3", entry)
                observer1.unobserve(myref3.current); // Stop observing after intersection
            }
        },
            {
                threshold: 1,
            }

        )
        const observer4 = new IntersectionObserver((entries) => {

            const entry = entries[0];
            if (entry.isIntersecting) {
                setCardIsVisible4(true);
                console.log("b4", entry)
                observer1.unobserve(myref4.current); // Stop observing after intersection
            }

        },
            {
                threshold: 1,
            }

        )

        observer1.observe(myref1.current);
        observer2.observe(myref2.current);
        observer3.observe(myref3.current);
        observer4.observe(myref4.current);
    }, [])

    return (
        <>
           
            <div className={ServiceCss.case}>
                <div className={ServiceCss.cards}>

                    <div className={ServiceCss.card1} >
                        <h1 className={ServiceCss.h1}>
                            COMPLETE MARKETING
                        </h1>
                        <h1 className={ServiceCss.h1}>
                            SOLUTIONS FROM
                        </h1>
                        <h1 className={ServiceCss.h1}>
                            Techgicus
                        </h1>
                        <h3 className={ServiceCss.h3}>
                            Help for Your Business Needs
                        </h3>

                    </div>
                    <div className={ServiceCss.card2} >
                        <div className={ServiceCss.logos}>

                            <div className={ServiceCss.img}>
                                <img width="80" height="80" src="https://img.icons8.com/ios/50/google-drive--v1.png" alt="google-drive--v1" />
                                <p className={ServiceCss.p}>Unique</p>
                                <p className={ServiceCss.p}>Logos</p>
                            </div>
                            <img className={ServiceCss.arrow} width="80" height="80" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right" />
                            <div className={ServiceCss.img}>
                                <img width="80" height="80" src="https://img.icons8.com/pastel-glyph/64/web-design--v2.png" alt="web-design--v2" />
                                <p className={ServiceCss.p}>Websites</p>
                            </div>
                            <img className={ServiceCss.arrow} width="80" height="80" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right" />

                            <div className={ServiceCss.img}>
                                <img width="80" height="80" src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/external-mobile-application-cloud-computing-smashingstocks-mixed-smashing-stocks.png" alt="external-mobile-application-cloud-computing-smashingstocks-mixed-smashing-stocks" />
                                <p className={ServiceCss.p}>Mobile</p>
                                <p className={ServiceCss.p}>Application</p>
                            </div>
                            <img className={ServiceCss.arrow} width="80" height="80" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right" />
                            <div className={ServiceCss.img}>
                                <img width="80" height="80" src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-digital-marketing-digital-marketing-smashingstocks-detailed-outline-smashing-stocks-3.png" alt="external-digital-marketing-digital-marketing-smashingstocks-detailed-outline-smashing-stocks-3" />
                                <p className={ServiceCss.p}>Digital</p>
                                <p className={ServiceCss.p}>Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ServiceCss.Main_body}>

                    <div className={ServiceCss.container} ref={myref1}>
                        <motion.div className={`${ServiceCss.img1}  ${cardIsVisible1 ? ServiceCss.anim1 : ""}`}  >


                        </motion.div>
                        <div className={ServiceCss.container_info}>
                            <h2 className={ServiceCss.Main_h2}>
                                Creating Unique Logos with Techgicus
                            </h2>
                            <h3 className={ServiceCss.Main_h3}>
                                Elevate Your Brand Identity
                            </h3>
                            <p className={ServiceCss.Main_p}>
                                Your logo is the visual cornerstone of your brand, representing the essence of your company in a single, memorable image. At Techgicus, we understand the significance of a unique and impactful logo in today's competitive business landscape.
                            </p>
                        </div>


                    </div>
                    <div className={`${ServiceCss.container} ${ServiceCss.reverse} `} ref={myref2}>

                        <motion.div className={`${ServiceCss.img2}  ${cardIsVisible2 ? ServiceCss.anim2 : ""}`} >


                        </motion.div>

                        <div className={ServiceCss.container_info}>
                            <h2 className={`${ServiceCss.Main_h2} ${ServiceCss.c2}`}>
                                Crafting Exceptional Websites with Techgicus
                            </h2>
                            <h3 className={ServiceCss.Main_h3}>
                                Elevate Your Online Presence
                            </h3>
                            <p className={ServiceCss.Main_p}>
                                In today's digital era, your website is often the first interaction potential customers have with your brand. At Techgicus, we specialize in website development that goes beyond just aesthetics. We focus on creating functional, user-friendly, and impactful websites that leave a lasting impression.
                            </p>
                        </div>



                    </div>
                    <div className={ServiceCss.container} ref={myref3}>
                        <div className={`${ServiceCss.img3}  ${cardIsVisible3 ? ServiceCss.anim1 : ""}`}>


                        </div>
                        <div className={ServiceCss.container_info}>
                            <h2 className={`${ServiceCss.Main_h2} ${ServiceCss.c3}`}>
                                Transforming Ideas into Seamless Mobile Experiences with Techgicus
                            </h2>
                            <h3 className={ServiceCss.Main_h3}>
                                Unleash the Power of Mobile Technology
                            </h3>
                            <p className={ServiceCss.Main_p}>
                                In a world that's always on the move, having a mobile application is essential for reaching and engaging your audience. At Techgicus, we specialize in crafting intuitive and feature-rich mobile applications that bring your ideas to life.
                            </p>
                        </div>


                    </div>
                    <div className={`${ServiceCss.container} ${ServiceCss.reverse} `} ref={myref4}>
                        <div className={`${ServiceCss.img4}  ${cardIsVisible4 ? ServiceCss.anim2 : ""}`}>


                        </div>
                        <div className={ServiceCss.container_info}>
                            <h2 className={`${ServiceCss.Main_h2} ${ServiceCss.c4}`}  >
                                Accelerating Growth Through Strategic Digital Marketing with Techgicus
                            </h2>
                            <h3 className={ServiceCss.Main_h3}>
                                Navigate the Digital Landscape with Confidence
                            </h3>
                            <p className={ServiceCss.Main_p}>
                                In an era driven by digital experiences, an effective digital marketing strategy is paramount to success. At Techgicus, we specialize in navigating the ever-evolving digital landscape to help businesses connect, engage, and thrive online.
                            </p>
                        </div>



                    </div>
                </div>
            </div>
            <Footer3/>
        </>
    );
}

export default Servicespg;
