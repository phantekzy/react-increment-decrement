// Importing React hook
import React from 'react'
import { useState } from 'react';

// ===================
// Styles
// ===================
const divStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
};

const wrapStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

const btnStyle = {
  background: '#000',
  width: "50px",
  height: "50px",
  color: "#fff",
  cursor: "pointer", // small improvement
};

// ===================
// Counter Component
// ===================
function Counter() {
  // State: keeps track of the count
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the counter to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={divStyle}>
      {/* Title */}
      <p style={{ fontSize: "30px" }}>CLICK NUMBER</p>

      {/* Display the count with dynamic color */}
      <h1 style={{ fontSize: "50px", color: count >= 0 ? "green" : "red" }}>
        {count}
      </h1>

      {/* Buttons */}
      <div style={wrapStyle}>
        <button style={btnStyle} onClick={decrement}>-</button>
        <button style={btnStyle} onClick={reset}>RESET</button>
        <button style={btnStyle} onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;

