import { Link } from "react-router-dom";

const GAMES_LIST = [
  {
    path: "/games/rock-paper-scissors",
    name: "Rock Paper Scissors",
  },
  {
    path: "/games/rock-paper-scissors",
    name: "Rock Paper Scissors",
  },
];

const Games = () => {
  const isSingle = GAMES_LIST.length === 1;

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        isSingle ? "" : "grid grid-cols-3 gap-4"
      } text-2xl p-4`}
    >
      {GAMES_LIST.map((game) => (
        <Link
          to={game.path}
          key={game.path}
          className={`p-4 py-20 border rounded text-center ${
            isSingle ? "w-1/3" : ""
          }`}
        >
          {game.name}
        </Link>
      ))}
    </div>
  );
};

export default Games;
