import React from 'react'
import Css from "./Learnig.module.css"
import img1 from "../../Assets/Books.jpg"


function Learnig() {

    return (
        <>

            <div className={Css.maincontainer}>
                <div className={Css.container} >

                    <h1>Become a web development </h1>
                    <h2>choose your plan</h2>
                </div>

                <div className={Css.container1}>
                    <div className={Css.section1}>
                        <div className={Css.text}>
                            <h1>MERN Stack</h1>

                        </div>

                        <div className={`${Css.maintext} ${Css.anim1}`}>
                            <h3><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/html-5--v1.png" alt="html-5--v1" /> HTML</h3>
                            <h3><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/css3.png" alt="css3" />Css</h3>
                            <h3> <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/javascript-logo.png" alt="javascript-logo" />Javascript</h3>
                            <h3><img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/FFFFFF/external-react-a-javascript-library-for-building-user-interfaces-logo-bold-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-bold-tal-revivo" />React</h3>
                            <h3><img width="50" height="50" src="https://img.icons8.com/windows/64/FFFFFF/node-js.png" alt="node-js" />node.Js</h3>
                            <h3><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/express-js.png" alt="express-js" />Express.Js </h3>
                            <h3> <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/ms-access.png" alt="ms-access" />MongoDB</h3>


                        </div>
                    </div>

                    <hr className={Css.line}/>


                    <div className={Css.section1}>
                        <div className={Css.text}>

                            <h1>Full Stack</h1>
                        </div>
                        <div className={`${Css.maintext} ${Css.anim2}`}>
                            <h3><img width="50" height="50" src="https://img.icons8.com/external-inkubators-glyph-inkubators/50/FFFFFF/external-dart-sport-inkubators-glyph-inkubators.png" alt="external-dart-sport-inkubators-glyph-inkubators" />Dart</h3>
                            <h3> <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/figma--v1.png" alt="figma--v1" />Figma</h3>
                            <h3> <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="github" /> Github</h3>
                            <h3><img width="50" height="50" src="https://img.icons8.com/windows/64/FFFFFF/node-js.png" alt="node-js" />node Js</h3>

                        </div>

                    </div>

                </div>


            </div>


        </>
    )
}

export default Learnig
