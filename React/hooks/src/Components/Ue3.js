import React, {useState, useEffect} from 'react';

function Ue3() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState({sayHi:"I am Hooked"});
    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `Button is clicked ${count} times`;
    },[count])
    let changeText = (e)=>{
        msg.sayHi = e.target.value;
        console.log(msg);
        setMsg({...msg})
    }
    console.log("render is called");
  return (
    <>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count-1)}>-</button>
      <input type="text" value={msg.sayHi} onChange={(e)=>changeText(e)}/>
    </>
  );
}

export default Ue3;