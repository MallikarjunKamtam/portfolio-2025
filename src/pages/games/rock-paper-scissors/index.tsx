import React, { useEffect, useState } from "react";
import { HiOutlineScissors } from "react-icons/hi2";
import { GiStoneSphere } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ICON_SIZE = 28;
const SPEED = 12;
const MAX_SPEED = 20;
const DEFAULT_TIMER = 30;

const TYPES = [
  { name: "rock", icon: <GiStoneSphere color="lime" size={ICON_SIZE} /> },
  { name: "paper", icon: <ImNewspaper color="#fff" size={ICON_SIZE} /> },
  {
    name: "scissors",
    icon: <HiOutlineScissors color="#f33" size={ICON_SIZE} />,
  },
];

const getRandomPositionAndDirection = ({ type, speed }) => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const centerX = w / 2;
  const centerY = h / 2;
  let x, y, dx, dy;

  if (type.name === "rock") {
    x = 0;
    y = Math.random() * h * 0.5;
  } else if (type.name === "paper") {
    x = w / 2;
    y = h;
  } else {
    x = w;
    y = Math.random() * h * 0.5 + h * 0.25;
  }

  const angle =
    Math.atan2(centerY - y, centerX - x) + (Math.random() - 0.5) * 0.5;
  dx = Math.cos(angle) * speed;
  dy = Math.sin(angle) * speed;

  return { x, y, dx, dy };
};

const RockPaperScissors = () => {
  const [objects, setObjects] = useState([]);
  const [timer, setTimer] = useState(30);
  const [spraying, setSpraying] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(SPEED);

  // Timer countdown
  useEffect(() => {
    if (!spraying) return;
    if (timer <= 0) {
      setSpraying(false);
      return;
    }
    const timerInterval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(timerInterval);
  }, [timer, spraying]);

  // Spawn objects while timer > 0
  useEffect(() => {
    if (!spraying) return;

    const spawn = () => {
      TYPES.forEach((type) => {
        const { x, y, dx, dy } = getRandomPositionAndDirection({
          type,
          speed: currentSpeed,
        });
        setObjects((prev) => [
          ...prev,
          { id: Math.random(), type, x, y, dx, dy },
        ]);
      });
    };

    const interval = setInterval(spawn, 800);
    return () => clearInterval(interval);
  }, [spraying, currentSpeed]);

  // Move objects and handle collisions
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setObjects((prev) => {
        const updated = [...prev];

        for (let obj of updated) {
          obj.x += obj.dx;
          obj.y += obj.dy;

          // Bounce off edges
          if (obj.x <= 0) obj.dx = Math.abs(obj.dx);
          if (obj.x >= window.innerWidth - ICON_SIZE)
            obj.dx = -Math.abs(obj.dx);
          if (obj.y <= 0) obj.dy = Math.abs(obj.dy);
          if (obj.y >= window.innerHeight - ICON_SIZE)
            obj.dy = -Math.abs(obj.dy);
        }

        // Collision handling
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const a = updated[i];
            const b = updated[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < ICON_SIZE) {
              const winner = getWinner(a.type.name, b.type.name);
              if (winner === a.type.name) updated.splice(j, 1);
              else if (winner === b.type.name) updated.splice(i, 1);
            }
          }
        }

        return updated;
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, []);

  const getWinner = (a, b) => {
    if (a === b) return null;
    if (a === "rock" && b === "scissors") return "rock";
    if (a === "scissors" && b === "paper") return "scissors";
    if (a === "paper" && b === "rock") return "paper";
    return b;
  };

  const getFinalWinner = () => {
    const counts = { rock: 0, paper: 0, scissors: 0 };
    objects.forEach((obj) => counts[obj.type.name]++);

    let zeroCount = 0;

    for (const key in counts) {
      if (counts[key] === 0) zeroCount++;
    }

    if (zeroCount < 2) return null;

    if (counts.rock > counts.paper && counts.rock > counts.scissors)
      return "Rock wins!";
    if (counts.paper > counts.rock && counts.paper > counts.scissors)
      return "Paper wins!";
    if (counts.scissors > counts.rock && counts.scissors > counts.paper)
      return "Scissors wins!";
    return "It's a tie!";
  };

  const isGameOn: boolean = !!getFinalWinner();

  if (!spraying && timer <= 0 && isGameOn) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center text-white text-3xl">
        {getFinalWinner()}
      </div>
    );
  }

  function middleTopSection() {
    return (
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-3 rounded-xl shadow-lg backdrop-blur-md"
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(30, 30, 30, 0.7)",
          color: "#fff",
          zIndex: 100,
          minWidth: 350,
        }}
      >
        {/* Timer Input and Start Button */}
        <div className="flex items-center gap-3">
          <TextField
            color="secondary"
            disabled={!isGameOn}
            size="small"
            onChange={(e) => {
              setTimer(+e.target.value);
            }}
            type="number"
            defaultValue={DEFAULT_TIMER}
            id="timer-input"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#888" },
                "&:hover fieldset": { borderColor: "#bbb" },
                "&.Mui-focused fieldset": { borderColor: "#4ade80" }, // green focus
              },
            }}
          />
          <Button
            disabled={!isGameOn}
            onClick={() => {
              setTimer(timer);
              setSpraying(true);
            }}
            variant="contained"
            color="success"
            sx={{ fontWeight: "bold" }}
          >
            Start
          </Button>
        </div>

        {/* Timer Display */}
        <div className="text-xl md:text-2xl font-bold tracking-wide">
          {!isGameOn ? timer : DEFAULT_TIMER}s
        </div>

        {/* Speed Slider */}
        <Box sx={{ width: 200 }}>
          <Slider
            min={1}
            max={MAX_SPEED}
            onChange={(e, value) => setCurrentSpeed(value as number)}
            color="success"
            size="small"
            defaultValue={currentSpeed}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden relative"
      style={{ position: "relative" }}
    >
      {/* Timer at top middle */}
      {middleTopSection()}

      {objects.map((obj) => (
        <div
          key={obj.id}
          style={{
            position: "absolute",
            left: obj.x,
            top: obj.y,
            width: ICON_SIZE,
            height: ICON_SIZE,
            pointerEvents: "none",
          }}
        >
          {obj.type.icon}
        </div>
      ))}
    </div>
  );
};

export default RockPaperScissors;
