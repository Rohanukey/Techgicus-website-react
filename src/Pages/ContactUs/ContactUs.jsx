import React, { useEffect, useState } from 'react'
import ContactCss from './ContactUsNew.module.css'
import img from "../../Assets/tech_logof.png"
import { motion } from "framer-motion"

function ContactUs() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        pass: '',
        select: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        pass: '',
        select: '',
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        if (!inputs.username.trim()) {
            newErrors.username = 'Please enter your name';
            valid = false;
        } else {
            newErrors.username = '';
        }

        if (!inputs.email.trim()) {
            newErrors.email = 'Please enter your email';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
            newErrors.email = 'Please enter a valid email';
            valid = false;
        } else {
            newErrors.email = '';
        }

        if (!inputs.pass.trim()) {
            newErrors.pass = 'Please enter your password';
            valid = false;
        } else {
            newErrors.pass = '';
        }

        if (inputs.select === '' || inputs.select === 'Select option') {
            newErrors.select = 'Please select your business type';
            valid = false;
        } else {
            newErrors.select = '';
        }

        setErrors(newErrors);
        return valid;
    };

    const onhandleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const pre = JSON.parse(localStorage.getItem('userInfo')) || [];
            const current = [...pre, inputs];
            localStorage.setItem("userInfo", JSON.stringify(current));
        }
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    };

    return (
        <>
            <div className={ContactCss.Page}>
                <form onSubmit={onhandleSubmit}>
                    <div className={ContactCss.case}>
                        <h1>Contact Us</h1>
                        <p>Start your free trial now and drive more sales and leads for your business from day one. (No risk. No credit card required.)</p>
                        <label htmlFor='Name'>Name: </label>
                        <input type='text' name='username' placeholder='Enter Name' value={inputs.username} onChange={onInputChange} />
                        {errors.username && <p className="error">{errors.username}</p>}
                        <label htmlFor='Email'>Email: </label>
                        <input type='text' name='email' placeholder='Enter Email' value={inputs.email} onChange={onInputChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <label htmlFor='Pass'>Password: </label>
                        <input type='password' name='pass' placeholder='Enter Password' value={inputs.pass} onChange={onInputChange} />
                        {errors.pass && <p className="error">{errors.pass}</p>}
                        <label htmlFor='Busi'>Business Type: </label>
                        <select name='select' value={inputs.select} onChange={onInputChange}>
                            <option>Select option</option>
                            <option value={"Agency"}>Agency</option>
                            <option value={"E-commerce"}>E-commerce</option>
                            <option value={"Software"}>Software</option>
                            <option value={"Services"}>Services</option>
                            <option value={"Others"}>Others</option>
                        </select>
                        {errors.select && <p className="error">{errors.select}</p>}
                        <motion.button type='submit' whileHover={{ scale: 1.05 }}>Submit</motion.button>
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
        </>
    );
}

export default ContactUs;
