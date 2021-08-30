import Typograph from '@material-ui/core/Typography';


const Typography = (props) => {
  return (
      <Typograph variant={props.variant}>{props.text}</Typograph>
  );
};
export default Typography;
