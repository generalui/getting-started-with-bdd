import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)

  let incrementCount = () => {
    setCount(count + 1)
  }

  let decrementCount = () => {
    if (count === 0) return
    setCount(count - 1)
  };

  return (
    <div className="app">
      <div>
        <div className="count">
          <h1 data-testid="counter-text">Count: {count}</h1>
        </div>
        <div className="buttons">
          <button data-testid="decrease" title={"-"} onClick={decrementCount}>-</button>
          <button data-testid="increase" title={"+"} onClick={incrementCount}>+</button>
        </div>
      </div>
    </div>
  )
}
