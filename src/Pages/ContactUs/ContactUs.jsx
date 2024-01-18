import React, { useEffect, useState } from 'react'
import ContactCss from './ContactUs.module.css'
import img from "/React/myapp/src/Assets/tech_logof.png"
import { motion } from "framer-motion"
import Header3 from '../../Component/Header3/Header3'
import Footer3 from '../../Component/Footer3/Footer3'

function ContactUs() {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        pass: '',
        select: '',
    })

    const onhandleSubmit = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const ondatasumbit = (event) => {
        event.preventDefault();
        const pre = JSON.parse(localStorage.getItem('userInfo')) || []
        const current = [...pre,inputs]


        console.log(current)
        localStorage.setItem("userInfo",JSON.stringify(current))
    }

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [pass, setPass] = useState("")
    // const [busi, setBusi] = useState("")
    // const [select, setSelect] = useState("")
    // const [data, setData] = useState([])

    // useEffect(()=>{







    // },[name,email,pass,busi,select])





    return (

        <>
      
            <div className={ContactCss.Page}>
                <form onSubmit={ondatasumbit}>
                    <div className={ContactCss.case}>
                        <div className={ContactCss.logo}><img src={img} /></div>
                        <h1>Contact Us</h1>
                        <p>Start your free trial now and drive more sales and leads for your business from day one. (No risk. No credit card required.)</p>
                        <label htmlFor='Name'>Name: </label>
                        <input type='text' name='username' placeholder='Enter Name' value={inputs.username} onChange={onhandleSubmit} />
                        <label htmlFor='Email'>Email: </label>
                        <input type='text' name='email' placeholder='Enter Email' value={inputs.email} onChange={onhandleSubmit}></input>
                        <label htmlFor='Pass'>Password: </label>
                        <input type='text' name='pass' placeholder='Enter Password' value={inputs.pass} onChange={onhandleSubmit}></input>
                        <label htmlFor='Busi' >Business Type: </label>
                        <select name='select' value={inputs.select} onChange={onhandleSubmit}>
                            <option>Select option</option>
                            <option name="opt" value={"Agency"}>Agency</option>
                            <option name="opt" value={"E-commerce"}>E-commerce</option>
                            <option name="opt" value={"Software"}>Software</option>
                            <option name="opt" value={"Services"}>Services</option>
                            <option name="opt" value={"Others"}>Others</option>
                        </select>
                        <motion.button type='submit' whileHover={{ scale: 1.05 }} >Submit</motion.button>

                    </div>

                </form>
                <div className={ContactCss.Details}>
                    <div className={ContactCss.sub_details}>
                        <h3>What You Get During Your 7-Day Trial</h3>
                        <h4>Introduction to Front-End Development:</h4>
                        <h4>HTML (Hypertext Markup Language)</h4>
                        <h4>CSS (Cascading Style Sheets)</h4>
                        <h4>JavaScript</h4>
                        <h4>Version Control</h4>
                        <h4>Responsive Web Design</h4>
                        <h4>JavaScript Frameworks/Libraries</h4>
                        <h4>AJAX (Asynchronous JavaScript and XML)</h4>
                        <h4>Web Performance Optimization</h4>
                    </div>


                </div>
            </div>
        <Footer3/>  
        </>
    )
}

export default ContactUs