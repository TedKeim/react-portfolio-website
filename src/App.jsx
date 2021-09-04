import Topbar from "./components/topbar/Topbar";
import Intro from "./components/topbar/intro/Intro";
import Portfolio from "./components/topbar/portfolio/Portfolio";
import Works from "./components/topbar/works/Works";
import Contact from "./components/topbar/contact/Contact";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
