import Label from "../../atoms/label/Label";
import RadioButton from "../../atoms/radiobutton/RadioButton";
import TextArea from "../../atoms/textarea/TextArea";
import Star from "../../atoms/star/Star";
import Button from "../../atoms/button/Button";
const EnvironmentFeedback = (props) => {
  const Offline = () => {
    return (
      <div>
        <Label
          text="Apakah anda puas dengan lingkungan pekerjaan di PT. Mitra Integrasi Informatika ?"
          className="question"
        />
        <Star name="ratepuas" value={props.ratepuas} onChange={props.onchange} />
        <br />
        <Label
          text="Apakah keperluan belajar (Papan Tulis, Projector, Alat Tulis, Meja, dll) sudah terpenuhi pada saat pembelajaran ?"
          className="question"
        />
        <Star name="rateterpenuhi" value={props.rateterpenuhi} onChange={props.onchange} />
        <br />
        <Label
          text="Apakah suasana ruangan sudah memenuhi kriteria untuk suasana belajar ?"
          className="question"
        />
        <Star name="ratesuasana" value={props.ratesuasana} onChange={props.onchange} />
        <br />
      </div>
    );
  };
  const Online = () => {
    return (
      <div>
        <Label
          text="Apakah anda puas dengan aplikasi conference yang digunakan ?"
          className="question"
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
          className="question"
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
          className="question"
        />
        <TextArea name="masalah" />
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
  return (
    <>
      <Label text="ENVIRONMENT PLACE FEEDBACK" className="title" />
      <Label
        text="Apakah dilaksanakan secara On-Line/Off-Line ?"
        className="question"
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
      <Button text="Prev" onClick={()=>props.handlepage(2)} /> 
    </>
  );
};
export default EnvironmentFeedback;
