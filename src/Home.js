import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Yoohyeon");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Siyeon");
    setAge(27);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
