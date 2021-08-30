import CodingCampFeedback from "../molecules/codingcampfeedback/CodingCampFeedback"
import TrainerFeedback from "../molecules/trainerfeedback/TrainerFeedback"
import EnvironmentFeedback from "../molecules/environmentfeedback/EnvironmentFeedback"
import Button from "../atom/button/Button"
const Form=(props)=>{
    return(
        <form>
          <CodingCampFeedback
            onchange={props.onchange}
            valuerekomendasi={props.valuerekomendasi}
          />
          <TrainerFeedback />
          <EnvironmentFeedback
            onchange={props.onchange}
            valuepelaksanaan={props.valuepelaksanaan}
            valuekepuasan={props.valuekepuasan}
            valuekejelasan={props.valuekejelasan}
          />
          <Button text="submit" onClick={props.onsubmit} />
        </form>
    )
}
export default Form