import React, { useState, useEffect } from "react";

function Ue1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect is Called");
    document.title = `Button Clicked ${count} times`;
  });
  console.log("render called");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default Ue1;
