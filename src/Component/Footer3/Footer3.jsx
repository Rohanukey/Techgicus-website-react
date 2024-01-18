import React from 'react'
import Css from './Footer3.module.css'
import { Link } from "react-router-dom";

function Footer3() {
    return (
        <>
            <div className={Css.wrapper}>

                <div className={Css.icons}>
                    <img className={Css.icon} src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    <img className={Css.icon} src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new" />
                    <img className={Css.icon} src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                </div>

                <div className={Css.nav}>
                    <Link className={Css.customlink} to={"/"}><span>Home</span></Link>
                    <Link className={Css.customlink} to={"/page"}><span>About</span></Link>
                    <Link className={Css.customlink} to={"/services"}><span> Services</span></Link>
                    <Link className={Css.customlink} to={"/contactus"}><span>Contact us </span></Link>
                </div>

                <div className={Css.info_f}>
                    <span>Email: Techgicus23@gmail.com</span> <span> Telephone: 712-4010690 </span><span> Mobile number: 9284614144</span>
                </div>


            </div>
        </>
    )
}

export default Footer3