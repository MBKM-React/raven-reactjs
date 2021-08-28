import TxtField from "@material-ui/core/TextField";

const TextField = (props) => {
  return (
    <TxtField
      id={props.id}
      type={props.type}
      variant={props.variant}
      label={props.label}
      name={props.name}
      inputProps={props.inputProps}
      style={props.style}
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
