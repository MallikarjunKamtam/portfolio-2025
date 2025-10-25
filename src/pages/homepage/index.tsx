function Homepage() {
  return (
    <main
      id="Homepage"
      className="flex flex-col gap-96 justify-center content-center w-full h-screen"
    >
      {Array.from({ length: 1 }).map((_, index) => (
        <h1
          key={index}
          className="text-9xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x"
        >
          Welcome to My App
        </h1>
      ))}
    </main>
  );
}

export default Homepage;
