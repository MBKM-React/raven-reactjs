import TxtArea from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "500px",
    marginTop: "10px",
  },
});
const TextArea = (props) => {
  const classes = useStyles();
  return (
    <TxtArea
      className={classes.root}
      minRows={props.minRows}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.Onchange}
      value={props.value}
    />
  );
};
TextArea.defaultProps = {
  placeholder: "",
  minRows: 8,
};
export default TextArea;
