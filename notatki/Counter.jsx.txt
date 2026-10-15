import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  function subtractOne() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function addFive() {
    setCount(count + 5);
  }

  function subtractFive() {
    setCount(count - 5);
  }

  function setOneHundred() {
    setCount(100);
  }

  return (
    <div>
      <p>Licznik: {count}</p>

      <button onClick={addOne}>+</button>
      <button onClick={subtractOne}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addFive}>+5</button>
      <button onClick={subtractFive}>-5</button>
      <button onClick={setOneHundred}>Ustaw 100</button>
    </div>
  );


}

export default Counter;