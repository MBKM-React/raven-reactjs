import FormLbl from "@material-ui/core/FormLabel";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  footerLabel: {
    fontSize: "15px", 
    fontWeight: "bold", 
    color: "white",
  },
  title: {
    display: "block",
    marginBottom: "10px",
    fontSize: "20px",
    color: "#3f51b5",
    fontWeight: "bold",
    marginTop: "20px",
  },
  question:{
    display: "block",
    marginBottom: "10px",
    marginTop: "10px",
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  }
});


const FormLabel = (props) => {
  const classes = useStyles();
  return <FormLbl className={classes[props.className]}>{props.text}</FormLbl>;
};
FormLabel.defaultProps = {};
export default FormLabel;
