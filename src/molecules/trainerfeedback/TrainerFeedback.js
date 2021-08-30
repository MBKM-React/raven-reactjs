import Label from "../../atoms/label/Label"
import TextField from "../../atoms/textfield/TextField"
import TextArea from "../../atoms/textarea/TextArea"
const TrainerFeedback=()=>{
    return(
        <>
        <Label
            text="TRAINER FEEDBACK"
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "20px",
              color: "#3f51b5",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          />
          <TextField
            label="Nama Trainer"
            name="trainername"
            style={{ width: "250px", marginRight: "10px" }}
          />
          <TextField
            label="Rate Penyampaian Materi"
            type="number"
            name="rate-penyampaian"
            inputProps={{ min: 1, max: 5 }}
            style={{ width: "250px", marginRight: "10px" }}
          />
          <TextField
            label="Rate Penguasaan Materi"
            type="number"
            name="rate-penguasaan"
            inputProps={{ min: 1, max: 5 }}
            style={{ width: "250px", marginRight: "10px" }}
          />
          <TextField
            label="Rate Interaksi Trainer"
            type="number"
            name="rate-interaksi"
            inputProps={{ min: 1, max: 5 }}
            style={{ width: "250px", marginRight: "10px" }}
          />
          <TextArea
            placeholder="Saran untuk Trainer"
            style={{ width: "500px", marginTop: "10px" }}
          />
        </>
    )
}
export default TrainerFeedback