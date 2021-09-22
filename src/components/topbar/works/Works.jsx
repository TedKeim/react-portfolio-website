import { useState } from 'react';
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "public/assets/mobile.png",
            title: "Interview Helper App",
            desc: 
                "Lorem ipsum is dummy text of the printing and typesetting industry",
            img: 
                "https://interview-helper-app-project-3.herokuapp.com/"
        },
        {
            id: "2",
            icon: "public/assets/mobile.png",
            title: "Weather App",
            desc: 
                "Lorem ipsum is dummy text of the printing and typesetting industry",
            img:
                 "https://interview-helper-app-project-3.herokuapp.com/"
        },
        {
            id: "3",
            icon: "public/assets/mobile.png",
            title: "Web Design",
            desc: 
                "Lorem ipsum is dummy text of the printing and typesetting industry",
            img:
                 "https://interview-helper-app-project-3.herokuapp.com/"
        },
    ];

    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider" 
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="{d.icon}" alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                  {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                            </div>
                            <div className="right">
                                <iframe src="https://interview-helper-app-project-3.herokuapp.com/"></iframe>
                            </div>
                        </div>
                    </div>
                        ))}
                </div>
                <img src="/assets/left-chevron2.png" className="arrow left" alt="" onClick={() => handleClick("left")}></img>
                <img src="/assets/right-chevron2.png" className="arrow right" alt="" onClick={() => handleClick()}></img>
                </div>
                );
}