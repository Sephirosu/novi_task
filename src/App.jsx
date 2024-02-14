import { useState } from "react";
import Circle from "./Circle";

function App() {
  const [circles, setCircles] = useState([]);

  const addCircleHandler = (e) => {
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
    };

    setCircles((prevCircle) => [...prevCircle, newCircle]);
    console.log(circles);
  };

  const undoCircles = () => {
    setCircles(circles.slice(1));
  };

  //Upitnik :)
  const redoCircle = () => {};

  return (
    <div
      className="relative w-screen h-screen cursor-wait"
      onClick={addCircleHandler}
    >
      {circles.map((circle, index) => (
        <Circle key={index} {...circle} />
      ))}
      <div className="fixed">
        <button
          onClick={redoCircle}
          className="flex p-5 rounded-lg  bg-green-800 m-10"
        >
          Redo
        </button>
        <button
          onClick={undoCircles}
          className="flex p-5 rounded-lg bg-red-800 m-10"
        >
          Undo
        </button>
      </div>
    </div>
  );
}

export default App;
