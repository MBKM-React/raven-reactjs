import Typography from "../../atoms/typography/Typhography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const Nav = (props) => {
    return(
        <AppBar position={props.position}>
        <Toolbar>
          <Typography variant={props.variant} text={props.text} />
        </Toolbar>
      </AppBar>
    )
}
export default Nav