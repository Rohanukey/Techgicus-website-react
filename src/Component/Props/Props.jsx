import React from 'react'
import Child from './Child/Child'
import img1 from "./Child/Rohan.jpeg"
import img2 from "./Child/tushar.jpeg"
import img3 from "./Child/vaibhav.jpeg"
import html from "./html 5.png"
import css from "./css 3.png"
import js from "./js icon.png"


function Props(props) {
  return (

    <div>
      <div className='props' style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Child name="Rohan" age="23" img={img1} about="I am a software developer intern My age is" />
        <Child name="Tushar" age="22" img={img2} about="I am a software developer intern My age is" />
        <Child name="Vaibhav" age="22" img={img3} about="I am a software developer intern My age is"/>
      </div>
    
      <div className='courses' style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Child name="HTML"  img={html} about="Html stands for HyperText MarkUP Language"/>
        <Child name="CSS"  img={css} about="Css stands for Cascading Style Sheets"/>
        <Child name="JAVA" img={js} about="Javascript is a programming language used for making single page application"/>
      </div>

    </div>

  )
}

export default Props