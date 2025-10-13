import "./App.css";
import MouseTrail from "./components/MouseTrail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RockPaperScissors from "./pages/rock-paper-scissors";
import Homepage from "./pages/homepage";
import Menu from "./components/menu";

function App() {
  return (
    <BrowserRouter>
      <MouseTrail />
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rock-papge-scissors" element={<RockPaperScissors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
