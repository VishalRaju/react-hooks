import React, { useState, useReducer } from "react";

const ReducerTutorial = () => {
  //   const [count, setCount] = useState(0);
  //   const [showText, setShowText] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "TOGGLE":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      {/* <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >Click me</button>
    
    {showText && <p>This is a toggle text</p>} */}

    <h1>{state.count}</h1>
      <button
        onClick={() => {
            dispatch({type: 'INCREMENT'});
            dispatch({type: 'TOGGLE'})
        }}
      >Click me</button>
    
    {state.showText && <p>This is a toggle text</p>}
    </>
  );
};

export default ReducerTutorial;
