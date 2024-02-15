import { useState } from "react";

function App() {
  const [circles, setCircles] = useState([]);
  const [undo, setUndo] = useState([]);

  const addCircleHandler = (e) => {
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
    };

    setCircles((prevCircle) => [...prevCircle, newCircle]);
  };

  const undoCircles = (e) => {
    e.stopPropagation();
    setCircles(circles.slice(1));
  };

  //Upitnik :)
  const redoCircle = () => {
    e.stopPropagation();
  };

  return (
    <div className="relative w-screen h-screen" onClick={addCircleHandler}>
      {circles.map((circle, index) => (
        <div
          className="absolute w-12 h-12 bg-blue-500 rounded-full"
          style={{
            left: `${circle.x - 25}px`,
            top: `${circle.y - 25}px`,
          }}
          key={index}
        ></div>
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
