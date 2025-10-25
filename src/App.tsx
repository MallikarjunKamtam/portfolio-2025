import "./App.css";
import MouseTrail from "./components/MouseTrail";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Footer from "./pages/footer";
import Homepage from "./pages/homepage";
import SKills from "./pages/skills";
import WhatIDo from "./pages/whatIDo";

function App() {
  return (
    <>
      <Homepage key={`app-home-page`} />
      <WhatIDo key={`what-i-do-app`} />
      <SKills key={`app-skills`} />
      <Experience key={`app-experience`} />
      <Contact key={`app-contact`} />
      <Footer key={`app-footer`} />
      <MouseTrail />
    </>
  );
}

export default App;
