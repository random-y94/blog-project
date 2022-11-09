const Home = () => {
  const handleClick = () => {
    console.log("well well well hello there");
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>click me</button>
      <button onClick={() => handleClickAgain("Yoohyeon")}>
        click me again pls
      </button>
    </div>
  );
};

export default Home;
