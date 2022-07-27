import React, { useState } from "react";

function Us() {
  const [count, setCount] = useState(0);
  const [emoji, setEmoji] = useState("🙂");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>
        <button onClick={() => setEmoji("😂")}>Laugh</button>
        <p>{emoji}</p>
        <button onClick={() => setEmoji("😭")}>Cry</button>
      </div>
    </>
  );
}

export default Us;
