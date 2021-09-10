import Btn from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles({
  root: {
    marginTop: "10px",
    marginRight: "10px",
  },
  delete: {
    marginLeft: "-15px",
    paddingRight: 0,
    paddingTop: 8.1,
    paddingBottom: 8.1,
    paddingLeft: 10,
    minHeight: 0,
    minWidth: 0,
  },
  plus:{
    paddingRight: 0,
    paddingTop: 8.1,
    paddingBottom: 8.1,
    paddingLeft: 10,
    minHeight: 0,
    minWidth: 0,

  },

});
const Button = (props) => {
  const classes = useStyles();
  return (
    <Btn
      className={clsx(classes.root, classes[props.className])}
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      startIcon={props.startIcon}
      value={props.value}
    >
      {props.text}
      {props.children}
    </Btn>
  );
};
Button.defaultProps = {
  variant: "contained",
  color: "primary",
  className: "",
  value: "",
};
export default Button;
