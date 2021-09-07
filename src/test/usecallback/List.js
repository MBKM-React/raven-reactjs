import { useEffect, useState } from "react";
export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
      console.log("change")
    setItems(getItems);
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
};
