import FormLbl from "@material-ui/core/FormLabel";
const FormLabel = (props) => {
  return <FormLbl style={props.style}>{props.text}</FormLbl>;
};
FormLabel.defaultProps = {};
export default FormLabel;
