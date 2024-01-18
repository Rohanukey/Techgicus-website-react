import React, { useState, useEffect, useRef } from 'react';
import Css from './Slider.module.css';


function Slider() {
    const slides = [
        { id: 1, className: Css.slide1, },
        { id: 2, className: Css.slide2 },
        { id: 3, className: Css.slide3 },
    ]

    console.log(slides)

    const [value, setValue] = useState(0);
    const myRef = useRef();
    const [pause, setPause] = useState(false);




    useEffect(() => {
        const intervalId = setInterval(() => {

            if (!pause) {
                setValue((prevValue) => (prevValue + 100) % (slides.length * 100));
                console.log(value)
            }

        }, 3000);



        return () => {
            clearInterval(intervalId)

        }



    }, [value, pause]);

    const onMouseEnter = () => {
        setPause(true);
    }

    const onMouseLeave = () => {
        setPause(false);
    }


    return (
        <>
            <div className={Css.SlideWapper}>

                <div

                    className={Css.slides}
                    style={{
                        transform: `translateX(-${value}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}

                    ref={myRef}


                >
                    {slides.map((slide) => (
                        <div key={slide.id} className={`${Css.slide} ${slide.className}`} onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave} > </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slider;
