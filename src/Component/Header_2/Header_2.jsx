import React, { useRef, useState } from "react";
import HddCss from "./Header2.module.css"
import img1 from "../../Assets/tech_logo.png"
import { Link } from "react-router-dom";
// import About_pg from "../About_pg/page.jsx";

function Header_2() {
    const [count, setCount] = useState(0);
    const ref2 = useRef()
    const ref3 = useRef()
    const ref1 = useRef()

    function open() {
        if (count === 0) {
            ref3.current.style.display = "block";
            setCount(1)

        }
        else {
            ref3.current.style.display = "none"
            setCount(0)
        }

    }
    function cross() {
        
            ref3.current.style.display = "none"
            setCount(0)
    }


    
    return (
        <>
            <header>
                <div className={HddCss.logo}> 
                    <img src={img1} width={"300px"} />
                </div>
                <div className={HddCss.nav}>
                    <Link to={"/"}><span>HOME</span></Link>
                    <Link to={"/page"}><span>About </span></Link>
                    <Link to={"/services"}><span>Services </span></Link>
                    <Link to={"/contactus"}><span> Contact us</span></Link>
                </div>
                <div onClick={open} className={HddCss.hiddenNavBar}><img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/menu.png" alt="menu" /></div>
            </header>
            <div className={HddCss.hiddenNav} ref={ref3}>
                <div className={HddCss.hiddenNavCase} ref={ref1} >
                    <div className={HddCss.hiddenNav_cross} onClick= {cross} ><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png" alt="delete-sign--v1"/></div>
                    <Link to={"/"}><span>Home</span></Link>
                    <Link to={"/page"}><span> About</span></Link>
                    <Link to={"/services"}><span>Services </span></Link>
                    <Link to={"/contactus"}><span> Contact us</span></Link>
                </div>
            </div>

        </>


    );

}

export default Header_2;