import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const Star = (props) => {
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Rating
        name={props.name}
        value={parseFloat(props.value)}
        precision={0.5}
        onChange={props.onChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {props.value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : parseFloat(props.value)]}</Box>
      )}
    </div>
  );
};
export default Star;
