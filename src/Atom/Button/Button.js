import Btn from "@material-ui/core/Button";

const Button = (props) => {
  return (
    <Btn variant={props.variant} color={props.color} style={props.style} >
      Primary
    </Btn>
  )
}
Button.defaultProps = {
    variant:'contained',
    color:'primary',
    onClick: () => {},
    className: '',
    value:''
  }
export default Button;
