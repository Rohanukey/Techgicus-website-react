import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Para from "./Parallax_1.module.css"
import tr from "/React/myapp/src/Assets/Tree_1.png"
import img1 from "/React/myapp/src/Assets/Main_bg2.png"
import img2 from "/React/myapp/src/Assets/Moon.png"
import img3 from "/React/myapp/src/Assets/Flying_bird_gif.gif"
import Services from '../Services/Services'
import Header2 from '../Header_2/Header_2'
import { useEffect,useState } from 'react'


function Parallax_1() {

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

      const imageStyle = {
        transform: `translateY(${scrollY * .8}px)`, // Adjust the factor based on your preference
        transition: 'transform 0.3s ease',
      };

      const moonStyle = {

        transform: `translateY(${scrollY * -.5}px) `, // Adjust the factor based on your preference
        transition: 'transform 0.3s ease',
      }
      
      

    return (
        <div className={Para.bigwrap}>
            <div className={Para.wrapper}>
                <div className={Para.header}>
                    <img src={img1} className={Para.background_main}  />
                    <img src={img2} className={Para.background_Moon}  style={moonStyle}/>
                    <img src={img3} className={Para.background_birds} />
                    <img src={img3} className={Para.background_birds2} />
                    <img src={img3} className={Para.background_birds3} />
                    <img src={img3} className={Para.background_birds4} />
                    <h1 className={Para.title} style={imageStyle}>Welcome to Techgicus</h1>
                </div>
            </div>
        </div>
    )

}

export default Parallax_1