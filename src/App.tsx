import "./App.css";
import MouseTrail from "./components/MouseTrail";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <Homepage key={`app-home-page`} />
      <Contact key={`app-contact`} />
      <MouseTrail />
    </>
  );
}

export default App;
