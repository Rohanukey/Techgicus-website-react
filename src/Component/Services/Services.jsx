import React from "react";
import SerCss from "./Services.module.css"
import { motion } from "framer-motion";
import mb1 from "/React/myapp/src/Assets/mobile_2.png"
import wb1 from "/React/myapp/src/Assets/web_2.png"
import dm1 from "/React/myapp/src/Assets/dm.png"
import lo1 from "/React/myapp/src/Assets/logo.png"

function Services() {


    return (
        <div className={SerCss.BD}>
            <div className={SerCss.Ser}>
                <motion.h1>Services</motion.h1>
            </div>
            <div className={SerCss.container}>
                <div className={`${SerCss.Sub_BD} ${SerCss.page_1_H}`}>
                    <div className={SerCss.data}>
                        <h3><span className={SerCss.sp}>Mobile  Application</span></h3>
                        <h3>Development</h3>
                        <p>Bring your imagination to to the reality in the form of mobile Application
                            We have a great experience in delivering high Quality mobile apps</p>
                    </div>
                    <div className={`${SerCss.cd_1}`}>
                        <img src={mb1} ></img>
                        {/*<div className={`${SerCss.pop} ${SerCss.b1}`}>
                            <p>Message</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b2}`}>
                            <p>Notes</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b3}`}>
                            <p>Tasks</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b4}`}>
                            <p>Images</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b5}`}>
                            <p>Pay</p>
                            </div>*/}
                    </div>
                </div>
                <div className={`${SerCss.Sub_BD} ${SerCss.page_2_H}`}>
                    <div className={SerCss.data}>
                        <h3><span className={SerCss.sp2}>Website for</span></h3>
                        <h3>Your business</h3>
                        <p>In web Development we provide an intuitive design to the user based on its interaction
                            Experience is the key point which determines the popularity of the brand.
                            From UI design to the deployment & maintainance is handled by our experts.</p>
                    </div>
                    <div className={`${SerCss.cd_1} ${SerCss.page_2}`}>
                        <img src={wb1} ></img>
                        {/*<div className={`${SerCss.pop} ${SerCss.b1}`}>
                            <p>Message</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b2}`}>
                            <p>Notes</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b3}`}>
                            <p>Tasks</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b4}`}>
                            <p>Images</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b5}`}>
                            <p>Pay</p>
                        </div>*/}
                    </div>
                </div>
                <div className={`${SerCss.Sub_BD} ${SerCss.page_3_H}`}>
                    <div className={SerCss.data}>
                        <h3><span className={SerCss.sp3}>Digital</span></h3>
                        <h3> Marketing</h3>
                        <p>SEO plays an important role in ggrowing your business digitally & that comes under Digital marketing
                            Digital marketing will attract more people to your business and help it grow gradually.</p>
                    </div>
                    <div className={`${SerCss.cd_1} ${SerCss.page_3}`}>
                        <img src={dm1} ></img>
                        {/*<div className={`${SerCss.pop} ${SerCss.b1}`}>
                            <p>Message</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b2}`}>
                            <p>Notes</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b3}`}>
                            <p>Tasks</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b4}`}>
                            <p>Images</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b5}`}>
                            <p>Pay</p>
                    </div>*/}
                    </div>
                </div>
                <div className={`${SerCss.Sub_BD} ${SerCss.page_4_H}`}>
                    <div className={SerCss.data}>
                        <h3><span className={SerCss.sp4}>Unique</span></h3>
                        <h3>Logos</h3>
                        <p>We make creative logo design and motion design
                            Prefect logo for you company.</p>
                    </div>
                    <div className={`${SerCss.cd_1} ${SerCss.page_4}`}>
                        <img src={lo1}></img>
                        {/*<div className={`${SerCss.pop} ${SerCss.b1}`}>
                            <p>Message</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b2}`}>
                            <p>Notes</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b3}`}>
                            <p>Tasks</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b4}`}>
                            <p>Images</p>
                        </div>
                        <div className={`${SerCss.pop} ${SerCss.b5}`}>
                            <p>Pay</p>
                </div>*/}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Services;