import React, { useContext } from "react";
import { VehicleContext } from "./VehicleContext";

const Page = () => {
  const[dataVehicles, url, setUrl, next, prev, isPending] = useContext(VehicleContext)
  const splitvalue = url.split("=")[1];
  const page = splitvalue ? Number(splitvalue) : 1;

  return (
    <>
      {isPending && <div>Loading..</div>}
      <h1>Page: {page}</h1>
      {prev  && <button onClick={()=>setUrl(prev)}> Prev </button>}
      {next && <button onClick={()=>setUrl(next)}> Next </button>}
      {dataVehicles &&
        dataVehicles.map((item,index) => {
          return (
            <div key={index}>
              <h4>
                Name: {item.name} | Model: {item.model} | Manu:{" "}
                {item.manufacturer}{" "}
              </h4>
            </div>
          );
        })}
    </>
  );
};
export default Page;
