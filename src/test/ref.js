import { useEffect,useState,useRef } from "react";
export const Ref = () => {
    // const [input, setInput] = useState({
    //     name: "",
    //     date: "",
    //     email: "",
    //   });
    const inputRef = useRef({});

    // useEffect(() => {
    //   inputRef.current['name'].value = input.name;
    //   inputRef.current['date'].value = input.date;
    //   inputRef.current['email'].value = input.email;
    // }, []);
  
   
    return(
        <form >
          <input ref={el => inputRef.current['name'] = el} placeholder='Name'></input>
          <input ref={el => inputRef.current['date'] = el} placeholder='Date'></input>
          <input ref={el => inputRef.current['email'] = el} placeholder='Email'></input>
          <button onClick={() => {console.log(inputRef.current['name'].value)}}>Submit</button>
        </form>
    );
};
