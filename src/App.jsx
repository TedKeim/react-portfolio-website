import Topbar from "./components/topbar/Topbar";
import Intro from "./components/topbar/intro/Intro";
import Portfolio from "./components/topbar/portfolio/Portfolio";
import Works from "./components/topbar/works/Works";
import Contact from "./components/topbar/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
     <Topbar/>
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
