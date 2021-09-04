import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
 const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Front End Developer", "Back End Developer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/portfolio-img.jpg" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello! I'm</h2>
                    <h1>Ted Keim</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/chevron-down.png" alt=""/>
                </a>
            </div>
    
        </div>
    )
}