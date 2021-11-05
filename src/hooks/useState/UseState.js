import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("Vishal");

  const increment = () => {
    setCount(count + 1);
  };

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <h2>{input}</h2>
      <input value={input} onChange={changeInput} />
    </>
  );
};

export default UseStateHook;
