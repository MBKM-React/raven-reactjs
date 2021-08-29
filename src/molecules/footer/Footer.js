import Label from "../../atom/label/Label"
const Footer=(props)=>{
    return(
        <footer>
        <Label
          text={props.text}
          style={{ fontSize: "15px", fontWeight: "bold", color: "white" }}
        />
      </footer>
    )
}
export default Footer