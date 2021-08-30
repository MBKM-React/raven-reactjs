import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import RadioButton from "../../atoms/radiobutton/RadioButton";

const CodingCampFeedback = (props) => {
  return (
    <>
      <Label
        text="CODING CAMP FEEDBACK"
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
        label="Rate Manfaat Bootcamp"
        type="number"
        name="rate-membantu"
        inputProps={{ min: 1, max: 5 }}
        style={{ width: "350px", marginBottom: "10px" }}
      />
      <br />
      <TextField
        label="Rate materi sesuai untuk menjadi Developer"
        type="number"
        name="rate-sesuai"
        inputProps={{ min: 1, max: 5 }}
        style={{ width: "350px", marginBottom: "10px" }}
      />
      <br />
      <TextField
        label="Rate materi menarik"
        type="number"
        name="rate-menarik"
        inputProps={{ min: 1, max: 5 }}
        style={{ width: "350px", marginBottom: "10px" }}
      />
      <br />
      <TextField
        label="Rate materi mudah dipahami"
        type="number"
        name="rate-paham"
        inputProps={{ min: 1, max: 5 }}
        style={{ width: "350px", marginRight: "10px" }}
      />
      <br />

      <Label
        text="Apakah anda ingin merekomendasikan pelatihan ini ke teman ? "
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
        buttonvalue={["ya", "tidak", "mungkin"]}
        buttonlabel={["ya", "tidak", "mungkin"]}
        groupname={"rekomendasi"}
        groupvalue={props.valuerekomendasi}
        onchange={props.onchange}
      />
    </>
  );
};
export default CodingCampFeedback;
