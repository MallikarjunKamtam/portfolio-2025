import "./App.css";
import MouseTrail from "./components/MouseTrail";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white">
      <h1 className="">
        <MouseTrail />
        Hello world!
      </h1>
      <h2>Work in progress..</h2>
    </main>
  );
}

export default App;
