import TxtArea from '@material-ui/core/TextareaAutosize';

const TextArea = (props) => {
  return (
    <TxtArea minRows={props.minRows} placeholder={props.placeholder} style={props.style} name={props.name}/>
  );
};
TextArea.defaultProps = {
  placeholder:'',
  minRows:8,
};
export default TextArea;
