import React from 'react'
import Css from "./HorizontalScroll.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';


function HorizontalScroll() {


  const targetRef = useRef(null);


  const { scrollYProgress } = useScroll({
    target: targetRef,

  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-390%"])


  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = (event) => {
      console.log('Page scrolled:', window.pageYOffset);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const spin ={ 
     transform:`rotate(${scrollY * .08}deg)`,
     transition: 'transform 0.3s ease',
  }
  const spin2 ={ 
     transform:`rotate(${scrollY * .05}deg)`,
     transition: 'transform 0.3s ease',
  }
  const spin3 ={ 
     transform:`rotate(${scrollY * .02}deg)`,
     transition: 'transform 0.3s ease',
  }




  //intersection observer//
  const {ref: myref1, inView :cardIsVisible1} = useInView({ threshold: 0.9, triggerOnce:true});
  const {ref: myref2, inView :cardIsVisible2} = useInView({ threshold: 0.9  , triggerOnce:true});
  const {ref: myref3, inView :traIsVisible1} = useInView({ threshold: 0.9  , triggerOnce:true});
  const {ref: myref4, inView :traIsVisible2} = useInView({ threshold: 0.9  , triggerOnce:true});
  const {ref: myref5, inView :traIsVisible3} = useInView({ threshold: 0.9  , triggerOnce:true});
  const {ref: myref6, inView :traIsVisible4} = useInView({ threshold: 0.9  , triggerOnce:true});
  const {ref: myref7, inView :traIsVisible5} = useInView({ threshold: 0.9  , triggerOnce:true});
  const {ref: myref8, inView :traIsVisible6} = useInView({ threshold: 0.9  , triggerOnce:true});

  

  return (
    <>
      <div ref={targetRef} className={Css.case}>
        <div className={Css.Wrapper}>
          <motion.div style={{x}} className={Css.subwrapper}>
            <div className={` ${Css.img1} ${Css.size}`}>
            {<div className={Css.title}>
              <div>
                <h1>About</h1>
                <h1>Techgicus</h1>
              </div>

              <div className={Css.Circle}></div>
              <div className={`${Css.Circle} ${Css.c2}`} ></div>
              <div className={`${Css.Circle} ${Css.c3}`}></div>
              <div className={`${Css.Circle} ${Css.c4}`}></div>
              <div className={`${Css.Circle} ${Css.c5}`}></div>
              <div className={`${Css.Circle} ${Css.c6}`}></div>
              <div className={`${Css.Circle} ${Css.c7}`}></div>
            </div>}
          </div>
          <div className={` ${Css.img2} ${Css.size}`} >
            <div className={Css.Card2} ref={myref1} >
              <div className={Css.t1} ref={myref2}>
                <h2 className={`${Css.title1}  ${cardIsVisible2 ? Css.anim_slideIn : ""}`}  >Welcome to Techgicus</h2>
                <h2 className={`${Css.title2}  ${cardIsVisible2 ? Css.anim_slideup : ""}`} >Where Innovation Meets Excellence!</h2>
              </div>
              <div className={`${Css.minibackground} ${cardIsVisible1 ? Css.trigger1 : ""}`} >
                <div className={`${Css.miniCard} ${cardIsVisible1 ? Css.trigger2 : ""}`} >
                  <p>At Techgicus, we are more than just a software solutions company; we are your digital partners committed to transforming ideas into exceptional digital experiences. With a passion for innovation and a focus on delivering tangible results, we stand out in the crowded landscape of technology companies.</p>
                </div>
              </div>
            </div>
            <div ref={myref3}  class={`${Css.triangle} ${traIsVisible1 ? Css.animTra : ""} ${Css.tra1Pos}`} style={spin}></div>
            <div ref={myref4}  class={`${Css.triangle} ${traIsVisible2 ? Css.animTra : ""} ${Css.tra2Pos}`} style={spin2}></div>
            <div ref={myref5}  class={`${Css.triangle} ${traIsVisible3 ? Css.animTra : ""} ${Css.tra3Pos}`} style={spin3}></div>
            <div ref={myref6}  class={`${Css.triangle} ${traIsVisible4 ? Css.animTra : ""} ${Css.tra4Pos}`} style={spin2}></div>
            <div ref={myref7}  class={`${Css.triangle} ${traIsVisible5 ? Css.animTra : ""} ${Css.tra5Pos}`} style={spin}></div>
            <div ref={myref8}  class={`${Css.triangle} ${traIsVisible6 ? Css.animTra : ""} ${Css.tra6Pos}`} style={spin2}></div>
          </div>
          <div className={` ${Css.img3} ${Css.size}`}><p>page3</p></div>
          <div className={` ${Css.img4} ${Css.size}`}><p>page4</p></div>
          <div className={` ${Css.img5} ${Css.size}`}><p>page5</p></div>
          <div className={` ${Css.img6} ${Css.size}`}><p>page6</p></div>
          </motion.div>
          </div>
      </div>
    </>
  )
}

export default HorizontalScroll