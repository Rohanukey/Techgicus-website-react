
import React, { useRef, useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import style from "./DigitalM.module.css";
import clinic from "../../Assets/care.png";
import travel from "../../Assets/travel.png";
import state from "../../Assets/state.png";
import education from "../../Assets/education.png";
import food from "../../Assets/food.png";
import devlop from "../../Assets/devlop.png";







function Website() {

  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth <= 768) { // Example width for navigation change
      navigate('/services');
    } else {
      navigate('/DmMain');
    }
  }, [viewportWidth, navigate]);



  const servicesData = [
    {
      src: devlop,
      heading: "Digital marketing",
      description: "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands to a target audience. It encompasses various online marketing strategies and tactics designed to reach and engage potential customers in the digital realm. Here are some key aspects of digital marketing",
    },
    {
      src: state,
      heading: "Social Media Marketing",
      description: "The way people make purchases has changed over the years. Today, customers usually prefer buying products or services online and that's one of the major reasons why businesses consider having a digital presence.",
    },
    {
      src: education,
      heading: "SEO",
      description: "The way people make purchases has changed over the years. Today, customers usually prefer buying products or services online and that's one of the major reasons why businesses consider having a digital presence.",
    },
    {
      src: clinic,
      heading: "Google Ads Marketing",
      description: "The way people make purchases has changed over the years. Today, customers usually prefer buying products or services online and that's one of the major reasons why businesses consider having a digital presence.",
    },
    {
      src: travel,
      heading: "Designing Marketing Ads",
      description: "The way people make purchases has changed over the years. Today, customers usually prefer buying products or services online and that's one of the major reasons why businesses consider having a digital presence.",
    },
    // {
    //   src: food,
    //   heading: "Food",
    //   description: "The way people make purchases has changed over the years. Today, customers usually prefer buying products or services online and that's one of the major reasons why businesses consider having a digital presence.",
    // },
  ];


  const [selectedService, setSelectedService] = useState(servicesData[0]);


  const handleServiceSelection = (heading) => {
    const foundService = servicesData.find(service => service.heading === heading);
    if (foundService) {
      setSelectedService(foundService);
    }
  };

  const ref1 = useRef();

  const [value, setValue] = useState(0)

  const inc = () => {

    if (value < 106) {
      console.log(value)
      setValue(value + 106)
      console.log(value)
    }

  }

  const Dec = () => {

    if (value > 0) {
      setValue(value - 106)
    }

  }






  return (
    <div className={style.Website}>
      <Link to={"/Website"} />
      <div className={style.container}>
        <div className={style.subContainer}>
          <div className={style.img}>
            <img className={style.mainimg} src={selectedService.src} alt={selectedService.heading} />
          </div>
          <div className={style.main}>
            <h1>{selectedService.heading}</h1>
            <p>{selectedService.description}</p>
          </div>
        </div>
      </div>
      <div className={style.services} ref={ref1}>
        <h3>Services Offered</h3>
        <div className={style.box}>
          <div onClick={Dec} className={style.btn}><img src="https://img.icons8.com/color/96/back--v1.png" alt="back--v1" /></div>
          <div className={style.servicee} style={{

            transform: ` translateX(-${value}%)`,
            transition: `transform 0.2s ease-in-out`

          }}>
            {servicesData.map(service => (
              <div key={service.heading} onClick={() => handleServiceSelection(service.heading)} className={style.service}>
                <h4>{service.heading}</h4>
              </div>
            ))}

          </div>
          <div onClick={inc} className={style.btn} ><img src="https://img.icons8.com/color/96/forward.png" alt="forward" /></div>
        </div>

      </div>

    </div>
  );
} 

export default Website;