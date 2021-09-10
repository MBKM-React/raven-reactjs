import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const RadioButton = (props) => {
    return (
        <RadioGroup row name={props.groupname} value={props.groupvalue} onChange={props.onChange}>
          {props.buttonvalue.map((value,i)=>{
            return <FormControlLabel value={value} control={<Radio/>} label={props.buttonlabel[i]} />
          })}
       </RadioGroup>
    );
  };
 
  export default RadioButton;
  