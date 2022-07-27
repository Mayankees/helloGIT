import React, { useState, useEffect } from "react";

function Infinite() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect is Called");
    document.title = `Button Clicked ${count} times`;
    // setCount(10);
    // let rNum = Math.random() * 1000;
    // setCount(rNum);
  }, []);
  console.log(`render called ${count}`);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default Infinite;
