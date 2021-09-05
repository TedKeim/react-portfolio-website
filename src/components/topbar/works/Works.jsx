import "./works.scss"

export default function Works() {
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
    return (
        <div className="works" id="works">
            <div className="slider">
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
                <img src="/assets/left-chevron.png" className="arrow left" alt=""></img>
                <img src="/assets/right-chevron.png" className="arrow right" alt=""></img>
                </div>
                )
}