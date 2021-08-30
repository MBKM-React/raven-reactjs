import Label from "../../atoms/label/Label"
import RadioButton from "../../atoms/radiobutton/RadioButton"
import TextField from "../../atoms/textfield/TextField"
import TextArea from "../../atoms/textarea/TextArea"


const EnvironmentFeedback=(props)=>{
    const Offline = () => {
        return (
          <div>
            <Label
              text="Apakah anda puas dengan lingkungan pekerjaan di PT. Mitra Integrasi Informatika ?"
              style={{
                display: "block",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
              }}
            />
            <TextField
              label="Rate Kepuasaan"
              type="number"
              name="rate-kepuasaan"
              inputProps={{ min: 1, max: 5 }}
              style={{ width: "350px", marginRight: "10px" }}
            />
            <br />
            <Label
              text="Apakah keperluan belajar (Papan Tulis, Projector, Alat Tulis, Meja, dll) sudah terpenuhi pada saat pembelajaran ?"
              style={{
                display: "block",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
              }}
            />
            <TextField
              label="Rate Terpenuhi"
              type="number"
              name="rate-terpenuhi"
              inputProps={{ min: 1, max: 5 }}
              style={{ width: "350px", marginRight: "10px" }}
            />
            <br />
            <Label
              text="Apakah suasana ruangan sudah memenuhi kriteria untuk suasana belajar ?"
              style={{
                display: "block",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
              }}
            />
            <TextField
              label="Rate suasana ruangan"
              type="number"
              name="rate-suasana"
              inputProps={{ min: 1, max: 5 }}
              style={{ width: "350px", marginRight: "10px" }}
            />
            <br />
          </div>
        );
      }
    const Online = () => {
        return (
          <div>
            <Label
              text="Apakah anda puas dengan aplikasi conference yang digunakan ?"
              style={{
                display: "block",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
              }}
            />
            <RadioButton
              buttonvalue={["ya", "tidak"]}
              buttonlabel={["ya", "tidak"]}
              groupname={"kepuasan"}
              groupvalue={props.valuekepuasan}
              onchange={props.onchange}
            />
    
            <Label
              text="Apakah anda melihat dan mendengar presentasi dengan jelas ?"
              style={{
                display: "block",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
              }}
            />
            <RadioButton
              buttonvalue={["ya", "tidak", "terkadang"]}
              buttonlabel={["ya", "tidak", "terkadang"]}
              groupname={"kejelasan"}
              groupvalue={props.valuekejelasan}
              onchange={props.onchange}
            />
    
            <Label
              text="Masalah apa yang anda temui pada aplikasi yang digunakan untuk conference call ?"
              style={{
                display: "block",
                marginBottom: "10px",
                marginTop: "10px",
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
              }}
            />
            <TextArea
              name="masalah"
              style={{ width: "500px", marginTop: "10px" }}
            />
          </div>
        );
      };
    const Both = () => {
        return (
          <>
            <Online />
            <Offline />
          </>
        );
      };
    return(
        <>
        <Label
            text="ENVIRONMENT PLACE FEEDBACK"
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "20px",
              color: "#3f51b5",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          />
          <Label
            text="Apakah dilaksanakan secara On-Line/Off-Line ?"
            style={{
              display: "block",
              marginBottom: "10px",
              marginTop: "10px",
              fontSize: "15px",
              color: "black",
              fontWeight: "bold",
            }}
          />
          <RadioButton
            buttonvalue={["online", "offline", "keduanya"]}
            buttonlabel={["online", "offline", "keduanya"]}
            groupname={"pelaksanaan"}
            groupvalue={props.valuepelaksanaan}
            onchange={props.onchange}
          />

          {props.valuepelaksanaan === "online" && <Online />}
          {props.valuepelaksanaan === "offline" && <Offline />}
          {props.valuepelaksanaan === "keduanya" && <Both />}
        </>
    )
}
export default EnvironmentFeedback