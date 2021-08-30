import Btn from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles({
  root: {
    marginTop:"10px"
  },
});
const Button = (props) => {
  const classes = useStyles();
  return (
    <Btn
      className={clsx(classes.root,props.className)}
      variant={props.variant}
      color={props.color}
    >
      {props.text}
    </Btn>
  );
};
Button.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: () => {},
  className: "",
  value: "",
};
export default Button;
