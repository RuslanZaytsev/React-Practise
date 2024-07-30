import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

const RandomNumber = ({ maxNum }) => {
  const initial = 0;
  const [state, setState] = useState(initial);

  const handleClick = () => {
    try {
      setState(generateRandomNum(maxNum));
    } catch (error) {
      throw new Error(error, "Something went wrong!");
    }
  };
  const handleClear = () => {
    setState(initial);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button className="random-button" onClick={handleClick}>
        Generate new random number
      </button>
      <button className="random-button" onClick={handleClear}>
        Clear state
      </button>
    </div>
  );
};

export default RandomNumber;
