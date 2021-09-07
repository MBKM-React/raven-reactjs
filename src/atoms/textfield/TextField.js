import TxtField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  codingcamp: {
    width: "350px",
    marginBottom: "10px",
  },
  trainer: {
    width: "250px",
    marginRight: "10px",
  },
});
const TextField = (props) => {
  const classes = useStyles();
  return (
    <TxtField
      error={props.error === ""}
      helperText={props.error === "" ? 'Empty field!' : ' '}
      dataId={props.dataId}
      id={props.id}
      type={props.type}
      variant={props.variant}
      label={props.label}
      name={props.name}
      inputProps={props.inputProps}
      className={classes[props.className]}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
TextField.defaultProps = {
  id: "",
  type: "text",
  variant: "outlined",
  label: "",
  name: "",
  inputProps: "",
};
export default TextField;
