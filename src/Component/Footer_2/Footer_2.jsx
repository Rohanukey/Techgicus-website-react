import React from "react";
import "./Footer_2.css";
import { Link } from "react-router-dom";


function Footer_2() {




    return (
        <div className="head">
            <div className="wave">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            <footer className="footer">
                <div className="icons">
                    <img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    <img src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new" />
                    <img src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                </div>

                <div className="nav_f">
                <Link to={"/"}><span>Home</span></Link>
                <Link to={"/page"}>About<span> </span></Link>
                <Link to={"/services"}>Services<span> </span></Link>
                <Link to={"/contactus"}>Contact us<span> </span></Link>
                </div>

                <div className="info_f">
                    <span>Email: Techgicus23@gmail.com</span><span> Telephone: 712-4010690</span><span>Mobile number: 9284614144</span>
                </div>
            </footer>
        </div>


    )


}

export default Footer_2