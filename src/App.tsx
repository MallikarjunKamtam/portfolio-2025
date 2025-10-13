import "./App.css";
import MouseTrail from "./components/MouseTrail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RockPaperScissors from "./pages/games/rock-paper-scissors";
import Homepage from "./pages/homepage";
import Menu from "./components/menu";
import Games from "./pages/games";

function App() {
  return (
    <BrowserRouter>
      <MouseTrail />
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<Games />} />
        <Route
          path="/games/rock-paper-scissors"
          element={<RockPaperScissors />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
