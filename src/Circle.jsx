const Circle = ({ x, y }) => (
  <div
    className="absolute w-12 h-12 bg-blue-500 rounded-full"
    style={{
      left: `${x - 25}px`,
      top: `${y - 25}px`,
    }}
  ></div>
);

export default Circle;
