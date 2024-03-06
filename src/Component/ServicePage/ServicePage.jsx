

import React, { useState } from "react";
import Css from "./ServicePage.module.css";
import img1 from "../../Assets/DigiB.png";
import { useNavigate } from "react-router-dom";
import ser1 from "../../Assets/Service1.png"
import ser2 from "../../Assets/Service2.png"
import ser3 from "../../Assets/Service3.png"
import ser4 from "../../Assets/Service4.png"
import ser5 from "../../Assets/Service5.png"
import Bg1 from "../../Assets/Ser1Bg.png"
import Bg2 from "../../Assets/Ser2Bg.png"
import Bg3 from "../../Assets/Mob_bg.png"
import Bg4 from "../../Assets/Newlearning.png"
import Bg5 from "../../Assets/Web_bg.png"
import WebI1 from "../../Assets/state.png"
import WebI2 from "../../Assets/education.png"
import WebI3 from "../../Assets/care.png"
import WebI4 from "../../Assets/travel.png"


function ServicePage() {
  const navigate = useNavigate();

  const handleClick = (route) => {

    navigate(route);
  };

  const [i, setI] = useState(0)
  const [j, setJ] = useState(0)
  const [display, setDisplay] = useState("none")
  const [value, setValue] = useState(0)
  const [dotvalue, setDotvalue] = useState(0)


  const Dots = [
    { id: 1, classname: Css.Dot, SetValue: "0", Dotstate: dotvalue },
    { id: 2, classname: Css.Dot, SetValue: "100", Dotstate: dotvalue },
    { id: 3, classname: Css.Dot, SetValue: "200", Dotstate: dotvalue },
    { id: 4, classname: Css.Dot, SetValue: "300", Dotstate: dotvalue },
    { id: 5, classname: Css.Dot, SetValue: "400", Dotstate: dotvalue },
  ]

  const cards = [
    {
      id: 1,
      className: Css.card,
      h3: "Web Development",
      p: "Website development encompasses the process of creating and maintaining websites. It involves various aspects, including web design, web content development, client-side/server-side scripting, network security configuration, and more.",
      img: img1,
      route: "/LandingWebsiteDev",
    },
    {
      id: 2,
      className: Css.card,
      h3: "Digital Marketing",
      p: " Digital marketing is a dynamic and evolving field that requires continuous learning, experimentation, and adaptation to keep up with changing trends, technologies, and consumer behaviors. Successful digital marketers leverage a mix of strategies and channels tailored to their target audience and business goals to achieve optimal results.",
      img: img1,
      route: "/LandingDigitM",
    },
    {
      id: 3,
      className: Css.card,
      h3: "Mobile Application",
      p: "Mobile applications, commonly referred to as apps, are software applications designed to run on mobile devices such as smartphones and tablets. These apps serve various purposes, including entertainment, productivity, communication, education, gaming, and more.o",
      img: img1,
      route: "/LandingMobileDev",
    },
    {
      id: 4,
      className: Css.card,
      h3: "UI design",
      p: "UI (User Interface) design focuses on creating visually appealing and user-friendly interfaces for digital products such as websites, mobile apps, and software applications. It involves designing the layout, visual elements, and interactive components that users interact with to accomplish tasks and achieve goals",
      img: img1,
      route: "/LandingUIdesign",
    },
    {
      id: 5,
      className: Css.card,
      h3: "Learning Web development",
      p: "hello",
      img: img1,
      route: "/LandingLearning",
    },
  ];

  const Services = [
    { id: 1, className: Css.service, nam: "Web Development", img: ser1, index: 0, btn_route: "/MobAppMain" },
    { id: 2, className: Css.service, nam: "Digital Marketing", img: ser2, index: 1, btn_route: "/MobAppMain" },
    { id: 3, className: Css.service, nam: "Mobile Application", img: ser3, index: 2, btn_route: "/MobAppMain" },
    { id: 4, className: Css.service, nam: "UI design", img: ser4, index: 3, btn_route: "/MobAppMain" },
    { id: 5, className: Css.service, nam: "Learning Web development", img: ser5, index: 4, btn_route: "/LearningM" },
  ]

  const icons = [
    { id: 1, className: Css.icon, img: ser1, title: "Social Media Marketing" },
    { id: 2, className: Css.icon, img: ser1, title: "SEO" },
    { id: 3, className: Css.icon, img: ser1, title: "Google Ads Marketing" },
    { id: 4, className: Css.icon, img: ser1, title: "Designing Marketing Ads" },
  ]

  const ServiceData = [
    {
      id: 1, img: Bg5, ServiceTitle: "Web Devlopment", Service_P: "The way people make purchases has changed over the years. Today, customers usually prefer buying products or services online and that's one of the major reasons why businesses consider having a digital presence.", Service_subtitle: "Web Devlopment Services", Service_subtitle_data: [{ data: "Hello this 1" }, { data: "Hello this 2" }, { data: "Hello this 3" }, { data: "Hello this 4" }], iconImg: [
        { id: 1, img: WebI1, nam: "Real estate", className: Css.icon }, { id: 2, img: WebI2, nam: "Education", className: Css.icon }, { id: 3, img: WebI3, nam: "Health & care", className: Css.icon }, { id: 4, img: WebI4, nam: "Travel", className: Css.icon, }], btnStatus: Css.btn_disabled, serviceStatus: Css.DisplayWrapper_active,
    },
    {
      id: 2, img: Bg1, ServiceTitle: "Digital Marketing", Service_P: "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands to a target audience. It encompasses various online marketing strategies and tactics designed to reach and engage potential customers in the digital realm. Here are some key aspects of digital marketing:", Service_subtitle: "Digital Marketing Services", Service_subtitle_data: [{ data: "Hello this 1" }, { data: "Hello this 2" }, { data: "Hello this 3" }, { data: "Hello this 4" }], iconImg: [
        { id: 1, img: ser1, nam: "Social Media Marketing", className: Css.icon }, { id: 2, img: ser1, nam: "SEO", className: Css.icon }, { id: 3, img: ser1, nam: "Google Ads Marketing", className: Css.icon }, { id: 4, img: ser1, nam: "Social Media Marketing", className: Css.icon },], btnStatus: Css.btn_disabled, serviceStatus: Css.DisplayWrapper_active
    },
    {
      id: 3, img: Bg3, ServiceTitle: "Mobile Application", Service_P: "Mobile apps have opened up a world of opportunities. Developing iOS and Android apps have given businesses direct access to consumers. The improved direct communication that mobile apps provide has led to a greater sense of loyalty and familiarity towards a brand.", Service_subtitle: "Digital Marketing Services", Service_subtitle_data: [{ data: "Hello this 1" }, { data: "Hello this 2" }, { data: "Hello this 3" }, { data: "Hello this 4" }], iconImg: [
        { id: 1, img: ser1, nam: "Social Media Marketing", className: Css.icon }, { id: 2, img: ser1, nam: "SEO", className: Css.icon }, { id: 3, img: ser1, nam: "Google Ads Marketing", className: Css.icon }, { id: 4, img: ser1, nam: "Social Media Marketing", className: Css.icon },], btnStatus: Css.btn_active, serviceStatus: Css.DisplayWrapper_disabled
    },
    {
      id: 4, img: Bg2, ServiceTitle: "UI design", Service_P: "UI (User Interface) design focuses on creating visually appealing and interactive interfaces, while UX (User Experience) design is concerned with the overall user journey and satisfaction. A seamless blend of both disciplines ensures that digital products are not only aesthetically pleasing but also user-friendly.", Service_subtitle: "UI design Services", Service_subtitle_data: [{ data: "Hello this 1" }, { data: "Hello this 2" }, { data: "Hello this 3" }, { data: "Hello this 4" }], iconImg: [
        { id: 1, img: ser1, nam: "Social Media Marketing", className: Css.icon }, { id: 2, img: ser1, nam: "SEO", className: Css.icon }, { id: 3, img: ser1, nam: "Google Ads Marketing", className: Css.icon }, { id: 4, img: ser1, nam: "Social Media Marketing", className: Css.icon },], btnStatus: Css.btn_disabled, serviceStatus: Css.DisplayWrapper_active
    },
    {
      id: 5, img: Bg4, ServiceTitle: "Learning Web Dev", Service_P: "UI (User Interface) design focuses on creating visually appealing and interactive interfaces, while UX (User Experience) design is concerned with the overall user journey and satisfaction. A seamless blend of both disciplines ensures that digital products are not only aesthetically pleasing but also user-friendly.", Service_subtitle: "Digital Marketing Services", Service_subtitle_data: [{ data: "Hello this 1" }, { data: "Hello this 2" }, { data: "Hello this 3" }, { data: "Hello this 4" }], iconImg: [
        { id: 1, img: ser1, nam: "Social Media Marketing", className: Css.icon }, { id: 2, img: ser1, nam: "SEO", className: Css.icon }, { id: 3, img: ser1, nam: "Google Ads Marketing", className: Css.icon }, { id: 4, img: ser1, nam: "Social Media Marketing", className: Css.icon },], btnStatus: Css.btn_active, serviceStatus: Css.DisplayWrapper_disabled
    },
  ]

  const incI = (NewI) => {
    setI(NewI)
  }
  const changedInd = (ind) => {
    setJ(ind)
  }

  const changeDots = (newDot) => {
    setDotvalue(newDot)
  }

  const nav = (path) => {
    navigate(path)
  }



  return (
    <>
      <div className={Css.ContentWrapper}>
        <div className={Css.Title}>
          <h1>All the Services</h1>
          <h1>you want at </h1>
          <h1>one place</h1>
        </div>
        <div className={Css.CardsWrapper}>
          <div className={Css.cards} style={{

            transform: ` translateX(-${value}%)`,
            transition: `transform 0.2s ease-in-out`

          }}>
            {cards.map((card) => (
              <div
                key={card.id}
                className={card.className}
                onClick={() => handleClick(card.route)}
              >
                <div className={Css.cardImg}>
                  <img src={card.img} alt={card.h3} />
                </div>
                <div className={Css.content}>
                  <h3>{card.h3}</h3>
                  <p>{card.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={Css.Dots}>
            {
              Dots.map((dot, index) => (
                <div key={dot.id} className={dot.classname} onClick={() => {
                  setValue(dot.SetValue); changeDots(index)
                }}>
                  <div className={`${Css.InnerDot} ${dotvalue === index ? Css.InnerDot_background : ""}`}></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={Css.MobileView}>
        <h2>Services Offered</h2>
        <div className={Css.services}>
          {Services.map((service, index) => (
            <div key={service.id} className={` ${service.className} ${i === index ? Css.active_background : ""}`} onClick={() => { incI(index); setDisplay("none"); }}>
              <div className={Css.serviceLogo}>
                <img src={service.img}></img>
              </div>
              <div className={Css.title}>
                <h3>{service.nam}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={Css.Banner}>
          <div className={Css.ImgCase}>
            <img src={ServiceData[i].img}></img>
          </div>
        </div>
        <div className={Css.Details}>
          <h3>{ServiceData[i].ServiceTitle}</h3>
          <p>{ServiceData[i].Service_P}</p>
        </div>
        <div className={ServiceData[i].serviceStatus}>
          <div className={Css.ServiceDetails}>
            <h3>{ServiceData[i].Service_subtitle}</h3>
            <div className={Css.Icons}>
              {ServiceData[i].iconImg.map((icon, index) => (
                <div key={icon.id} className={icon.className} onClick={() => { changedInd(index); setDisplay("block"); }} >
                  <div className={Css.iconImg} >
                    <img src={icon.img}></img>
                  </div>
                  <h4>{icon.nam}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={Css.IconsData} style={{ display: `${display}` }}>
          <h3>{ServiceData[i].Service_subtitle}</h3>
          <p>{ServiceData[i].Service_subtitle_data[j].data}</p>
        </div>

        <div className={ServiceData[i].btnStatus}>
          <div className={Css.btns}>
            <button className={Css.btn} onClick={() => nav(Services[i].btn_route)}>Explore</button>
          </div>
        </div>

      </div>
    </>
  );
}
export default ServicePage;




