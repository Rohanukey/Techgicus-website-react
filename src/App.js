"use client"
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes , } from 'react-router-dom'
import Main from './Pages/main/Main';
import ServicePage from './Component/ServicePage/ServicePage';
import Header3 from './Component/Header3/Header3';
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutPage from './Pages/AboutPage/AboutPage';
import DmMain from './Component/DigitalM/DigitalM';
import UiMain from './Component/Uidesign/Uidesign';
import WebDevMain from './Component/WebsiteDev/WebsiteDev';
import LandingDigitM from "./Component/LandingDigitM/LandingDigitM"
import LandingUIdesign from "./Component/LandingUIdesign/LandingUIdesign"
import LandingWebsiteDev from "./Component/LandingWebsiteDev/LandingWebsiteDev"
import LandingLearning from "./Component/LandingLearning/LandingLearning"
import LandingMobileDev from "./Component/LandingMobileDev/LandingMobileDev"
import LearningM from "./Component/Learnig/Learnig"
import MobAppMain from "./Component/MobileApplication/MobileApplication"
import Footer from './Component/Footerr/Footerr'



function App() {



  return (

    <>
      <BrowserRouter>
        <Header3 />
        <Routes>
          <Route element={<Main />} path='/' />
          <Route element={<ServicePage/>} path='/services' />
          <Route element={<AboutPage/>} path='/page' />
          <Route element={<ContactUs />} path='/Contactus' />
          <Route element={<WebDevMain/>} path='/WebDevMain' />
          <Route element={<DmMain />} path='/DmMain' />
          <Route element={<UiMain />} path='/UiMain' />
          <Route element={<LearningM/>} path='/LearningM' />
          <Route element={<MobAppMain/>} path='/MobAppMain' />
          <Route element={<LandingDigitM/>} path='/LandingDigitM' />
          <Route element={<LandingUIdesign/>} path='/LandingUIdesign'/>
          <Route element={<LandingWebsiteDev/>} path='/LandingWebsiteDev' />
          <Route element={<LandingLearning/>} path='/LandingLearning' />
          <Route element={<LandingMobileDev/>} path='/LandingMobileDev' />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
