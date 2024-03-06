import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Css from './LandingDigitM.module.css';
import BG1 from '../../Assets/Ser1Bg.png';
import Circle from '../../Assets/Circle1.png';
import arrow from '../../Assets/Right Arrow.png';
import idea1 from '../../Assets/Speak.png';
import idea2 from '../../Assets/Briefcase.png';
import idea3 from '../../Assets/idea.png';


function Spinner() {
  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      console.log(viewportWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth <= 770) { // Example width for navigation change
      navigate('/services');
    } else {
      navigate('/LandingDigitM');
    }
  }, [viewportWidth]);

  const nav = () => {
    navigate('/DmMain');
  };

  const Ideas = [
    { id: 1, className: Css.idea, nam: "Public Speaking", image: idea1 },
    { id: 2, className: Css.idea, nam: "Career-Oriented", image: idea2 },
    { id: 3, className: Css.idea, nam: "Creative Thinking", image: idea3 },
  ]

  return (
    <>
      <div className={Css.MainWrapper}>
        <div className={Css.LeftWrapper}>
          <div className={Css.MainDetails}>
            <div className={Css.ImageCover}>
              <img src={Circle} alt="Circle"></img>
            </div>
            <div className={Css.ImageInfo}>
              <h1>
                Digital <span className={Css.DifInfo}>Mastery</span>
              </h1>
              <h1>
                Real <span className={Css.DifInfo}>Impact</span>
              </h1>
              <h1>
                Redefining <span className={Css.DifInfo}>Your</span>
              </h1>
              <h1>
                Success <span className={Css.DifInfo}>Story</span>
              </h1>
            </div>
          </div>

          <div className={Css.btns}>
            <button onClick={nav}>
              Explore
              <img src={arrow} alt="Arrow" className={Css.arrow}></img>
            </button>
          </div>
          <div className={Css.IdeaCover}>
            <div className={Css.Ideas}>
              {Ideas.map((idea) => (
                <div key={idea.id} className={Css.idea}>
                  <div className={Css.ImgCover}>
                    <img src={idea.image}></img>
                  </div>
                  <h3>{idea.nam}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={Css.BottomText}>
            <p>
              <span>PROFESSIONAL</span>{' '}
              <span className={Css.TitleChange}>Digital Marketing</span>{' '}
              <span>COMPANY</span>
            </p>
          </div>
        </div>
        <div className={Css.RightWrapper}>
          <div className={Css.BgWrapper}>
            <img src={BG1} alt="Background"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
