import React, { useState, createContext,useEffect  } from "react";
import axios from 'axios';
export const VehicleContext = createContext();

export const VehicleProvider = (props) => {
  
  const [dataVehicles, setdataVehicles] =  useState([])
  const [isPending, setIsPending] = useState(true);
  const [url, setUrl] = useState("https://swapi.dev/api/vehicles/");
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
      axios.get(url)
        .then(res => {
            const newData = res.data.results.map((el) => {return el;});
            setdataVehicles(newData);
            setNext(res.data.next);
            setPrev(res.data.previous);
            setIsPending(false)
        })
    
  },[url])

  
  return (
    <VehicleContext.Provider value={[dataVehicles,url,setUrl,next,prev,isPending]}>
      {props.children}
    </VehicleContext.Provider>
  );
};