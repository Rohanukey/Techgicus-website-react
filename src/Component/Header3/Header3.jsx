import React, { useEffect } from 'react'
import Css from "./Header3.module.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/tech_logof.png"
import { useState, useRef } from 'react'

function Header3() {
    const [count, setCount] = useState(0);
    const ref1 = useRef()
    const ref2 = useRef()
    const [scrolllY,setScrollY] = useState(0)
    const [scr , setScr] = useState(false)
    
    useEffect(() =>{

        const handleScroll = () =>{
            console.log("page srcolled :" + window.pageYOffset)
            setScrollY(window.scrollY)

            if(scrolllY < 100 )
            {
                setScr(false)
                
            }
            else{
                setScr(true)
                console.log("src Loading")
            }
        }

        window.addEventListener("scroll", handleScroll)

    })
   

    function open() {
        if (count === 0) {
            ref2.current.style.display = "block";
            setCount(1)

        }
        else {
            ref2.current.style.display = "none"
            setCount(0)
        }

    }
    function cross() {

        ref2.current.style.display = "none"
        setCount(0)
    }
 
    return (
        <>
            <div className={`${Css.header} ${scr ? Css.change :""}`}>
                <div className={Css.logo}>
                    <img src={logo} />
                </div>
                <div className={Css.nav}>
                    <Link to={"/"}><span>Home</span></Link>
                    <Link to={"/page"}><span>About </span></Link>
                    <Link to={"/services"}><span>Services </span></Link>
                    <Link to={"/contactus"}><span> Contact us</span></Link>
                </div>
                <div onClick={open} className={Css.hiddenNavBar}><img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/menu.png" alt="menu" /></div>

                <div className={Css.hiddenNav} ref={ref2}>
                    <div className={Css.hiddenNavCase} ref={ref1}>
                        <div className={Css.hiddenNav_cross} onClick={cross} ><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png" alt="delete-sign--v1" /></div>
                        <Link to={"/"}><span>Home</span></Link>
                        <Link to={"/page"}><span> About</span></Link>
                        <Link to={"/services"}><span>Services </span></Link>
                        <Link to={"/contactus"}><span> Contact us</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header3