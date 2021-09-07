import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  formInfo: {
    marginTop:"20px",
  }
});
export const Alertt = (props) => {
    const classes = useStyles();
  return (
    <>
      <Alert severity={props.severity} className={classes[props.className]}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.text}
      </Alert>
    </>
  );
};
