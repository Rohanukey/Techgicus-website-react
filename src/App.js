"use client"
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Pages/main/Main';
import Aboutpg from './Pages/About_pg/page';
import Servicespg from "./Pages/Servicespg/Servicespg"
import Header3 from './Component/Header3/Header3';
import ContactUs from "./Pages/ContactUs/ContactUs"


function App() {



  return (

    <>
      <BrowserRouter>
        <Header3 />
        <Routes>
          <Route element={<Main />} path='/' />
          <Route element={<Servicespg/>} path='/services' />
          <Route element={<Aboutpg />} path='/page' />
          <Route element={<ContactUs />} path='/Contactus' />
        </Routes>
      </BrowserRouter>

      {/*<div style={{ height: "1000px", width: "100%", backgroundColor: "green" }}>
        <div style={{ height: "80px", width: "100%", backgroundColor: "red",  position:"-webkit-sticky", position:"sticky", top:"0", zIndex:"999 "}} ></div>
        <div style={{ height: "80px", width: "100%", backgroundColor: "yellow",  position:"-webkit-sticky", position:"sticky", top:"0"}} ></div>
        <div style={{ height: "80px", width: "100%", backgroundColor: "orange",  position:"-webkit-sticky", position:"sticky", top:"0"}} ></div>
  </div>*/}
    </>
  );
}

export default App;
