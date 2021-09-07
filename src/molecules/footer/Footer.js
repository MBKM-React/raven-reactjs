import Label from "../../atoms/label/Label"
import  "./style.css"
const Footer=(props)=>{
    return(
        <footer>
        <Label
          text={props.text}
          className="footerLabel"
        />
      </footer>
    )
}
export default Footer