const Home = () => {
  const handleClick = (e) => {
    console.log("well well well hello there", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClickAgain("Yoohyeon", e)}>
        click me again pls
      </button>
    </div>
  );
};

export default Home;
