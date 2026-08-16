import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  function increment() {
    count = count + 1;
    setCount(count);
  }

  function decrement() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    } else [setCount(0)];
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="counterApp">
        <h1>Counter App</h1>
        <p>current count : {count} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default App;
