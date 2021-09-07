import Btn from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles({
  root: {
    marginTop:"10px",
    marginRight:"10px"
  },
});
const Button = (props) => {
  const classes = useStyles();
  return (
    <Btn
      className={clsx(classes.root)}
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      startIcon={props.startIcon}
      value={props.value}
    >
      {props.text}
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
