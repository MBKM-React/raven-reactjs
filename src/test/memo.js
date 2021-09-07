import { useMemo, useState, useEffect } from "react";

export const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number)
  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let index = 0; index <= 1000000000; index++) {}
    return num * 2;
  }
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  
//   const themeStyles = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
};
// export default App;
