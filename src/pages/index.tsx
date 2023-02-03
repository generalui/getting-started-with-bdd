import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button title={"-"} onClick={decrementCount} />
          <button title={"+"} onClick={incrementCount} />
        </div>
      </div>
    </div>
  );
}
