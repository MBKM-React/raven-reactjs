import React, { useState, useMemo, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementcount = () => setCount(count + 1);
  const incrementcount2 = () => setCount2(count2 + 1);

  const isEven = useEffect(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return 
  }, [count]);

  // useEffect(()=>{
  //   return ()=>{
  //     document.title="cleanup"
  //   }
  // })
  //   const isEven = useEffect(() => {
  //   console.log(count%2===0)
  //     return () => {
  //         document.title="clean"
  //     }
  // }, )
  // const isEven = useMemo(()=>{
  //     let i =0
  //     while(i<2000000000)i++
  //     return count%2===0
  // },[count])
  // const isEven=()=>{
  //   let i =0
  //   while(i<2000000000)i++
  //   return count%2===0
  // }

  return (
    <div>
      <button onClick={incrementcount}>{count}</button>
      <span>{isEven? "Even" : "Odd"}</span>
      <button onClick={incrementcount2}>{count2}</button>
    </div>
  );
};

export default App;
