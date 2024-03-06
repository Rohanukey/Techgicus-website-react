import React from 'react'
import Css from "./Index.module.css"
import img1 from "../../Assets/woman3d 1.png"
import img2 from "../../Assets/laptop.avif"
import img3 from "../../Assets/photo-1601933470096-0e34634ffcde.avif"
import img4 from "../../Assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
// import img5 from "../../Assets/home bg techgicus.avif"
// import img7 from "../../Assets/tech bg figma 1.png"
import { useInView } from 'react-intersection-observer'


function Demo() {

    const { ref: myref, inView: imginView } = useInView({
        triggerOnce: true, threshold: 0.9
    })

    const { ref: newref, inView: newinView } = useInView({
        triggerOnce: true, threshold: 0.9
    })


    return (
        <>
            <div className={Css.parent}>
                <div className={Css.FixedImg}>
                </div>
                <div className={Css.container}>
                    <div className={Css.image}>
                        <div className={Css.imgDiv}><img src={img1}></img></div>
                        <div className={Css.container3}>
                            <div className={`${Css.conatiner2} ${Css.anim2}`}>
                                <div className={Css.Info}>
                                    <h3 > Within </h3>
                                    <h1>24 Hour responsive Website</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={Css.mainsection}>
                        <div className={`${Css.section1} ${imginView ? Css.anim3 : ""}`} ref={myref}>
                            <img src={img2}></img>
                        </div>
                        <div className={Css.section2}>

                            <h3>Within </h3>
                            <h1>24-Hour responsive Website</h1>
                            <h2>A 24-Hour Website by TECHGICUS is your new marketing superpower.
                            </h2>
                            <h4>It’s a fully functional, gorgeously and responsively designed designed to elevate your company and expand your reach. It’s a single page designed to look and perform like a multi-page expansive site. It’s a web masterpiece fully developed and functional in 24 Hours.
                            </h4>
                            <h5> In fact, this site you’re on right now is a 24-Hour Website from TECHGICUS.</h5>


                        </div>

                    </div>
                    <div className={Css.mainsection1}>
                        <div className={Css.section4}>

                            <h3>Who needs a </h3>
                            <h1>24-Hour Website?</h1>
                            <h2>TECHGICUS 24-Hour Website plan was created just for you.
                            </h2>
                            <h4>A 24-Hour Website is perfect for serial entrepreneurs, new businesses just starting out, small businesses, older businesses with an outdated web presence and a small budget to fix it, business spin-offs, events, communities, and basically anyone who wants to be found on the web and impress customers in short order.
                            </h4>
                        </div>
                        <div className={`${Css.section5} ${newinView ? Css.anim4 : ""}`} ref={newref}>


                            <img src={img3}></img>

                        </div>

                    </div>


                    <div className={Css.CardWrapper2}>


                        <div className={Css.mainsection3}>

                            <div className={Css.CardWrapper3}>
                                <div className={Css.section6}>

                                    <h1>Why do you need a 24-Hour Website?

                                    </h1>
                                    <h2>GROW’s 24-Hour Website plan was created just for you.
                                    </h2>
                                </div>

                                <div className={Css.section7}>
                                    <p>
                                        Your customers expect your company to be online. Google receives over 60,000 searches per SECOND. EVERY. SINGLE. DAY. If you’re not on the web, there’s almost zero chance your customers will find you if they don’t know you, and there is a 100% chance they’ll find an alternative – likely your competition. </p>
                                    <p>Additionally, a great website is like having a knowledgeable salesperson available to answer questions 24/7. You can’t “hire” that type of help!

                                    </p>
                                    <h3>Finally, a website is the single most cost-effective marketing investment you can make.
                                    </h3>
                                    <p>Any ad you run is temporary – it’s there for your contracted amount of time. Any literature you create is limited. You have it until you use it all – then you have to pay to print more. A website is there. 24/7. Forever. And a 24-Hour Website from GROW is easy to maintain and update far into the future.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className={Css.CardWrapper}>
                        <div className={Css.mainsection4}>

                            <div className={Css.section8}>
                                <h3>How does a 24-Hour Website work?</h3>
                                <p>It’s so incredibly easy.</p>
                            </div>
                            <div className={Css.section9}>

                                <div className={Css.section10}>
                                    <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/chat.png" alt="chat" />
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1.png" alt="1" />
                                    <h5>You answer some questions.</h5>
                                </div>
                                <div className={Css.section10}>
                                    <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/chat.png" alt="chat" />
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1.png" alt="1" />
                                    <h5>You answer some questions.</h5>
                                </div>
                                <div className={Css.section10}>
                                    <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/chat.png" alt="chat" />
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1.png" alt="1" />
                                    <h5>You answer some questions.</h5>
                                </div>
                            </div>

                        </div>

                        <div className={Css.mainsection6}>

                            <div className={Css.mainsection5}>

                                <div className={Css.section11}>
                                    <img src={img4}></img>

                                </div>
                                <div className={Css.section12}>
                                    <h2>What is included in a 24-Hour Website?</h2>
                                    <li>Your New Custom Domain</li>
                                    <li>Your New Custom Domain</li>
                                    <li>Your New Custom Domain</li>
                                    <li>Your New Custom Domain</li>
                                    <li>Your New Custom Domain</li>
                                    <li>Your New Custom Domain</li>
                                </div>
                                <div className={Css.mainsection8}>

                                    <div className={Css.section14}>
                                        <h2>How Much Does a 24-Hour Website from GROW cost?</h2>
                                        <h3><img width="80" height="80" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/fb4d26/external-right-arrow-arrows-kmg-design-glyph-kmg-design.png" alt="external-right-arrow-arrows-kmg-design-glyph-kmg-design" />$1500.<span> Plus your domain and host</span> </h3>
                                        <p>Domain and hosting is not paid to GROW, but it can be secured by GROW on your behalf.  (Domain and hosting is usually under $200 per year).

                                        </p>
                                        <h4>Yes, really. That’s it. No hidden costs.</h4>

                                    </div>
                                    <div className={Css.section15}>
                                        <p>Think of the investment like an employee. You’re paying the website to work 24 hours a day. Which means, if you average the cost per hour for a year – you’ve paid 17 CENTS per hour for your website to be ready to answer your customer’s questions and to report leads to you. If you use it for 2 years, that’s 9 CENTS per hour. Three years about 6 CENTS per hour. You get it. The longer you have it and maintain it, the cheaper it becomes and the harder it works! </p>
                                        <h3>You NEED a website.</h3>
                                        <h2>You NEED a website.</h2>
                                        <button >See Reviews<img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/fb4d26/more-than.png" alt="more-than" /></button>
                                    </div>




                                </div>

                            </div>

                        </div>
                        <div className={Css.bottomdiv}>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Demo;
