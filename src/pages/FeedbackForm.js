import React, { useState } from "react";
import "./FeedbackForm.css";
import Button from "../Atom/Button/Button";
import TextField from "../Atom/TextField/TextField";
import TextArea from "../Atom/TextArea/TextArea";
import Label from "../Atom/Label/Label";
import RadioButton from "../Atom/RadioButton/RadioButton";
import Typography from "../Atom/Typography/Typhography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const FeedbackForm = () => {
  const [input, setInput] = useState({
    kepuasan: "",
    kejelasan: "",
    rekomendasi: "",
    pelaksanaan: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "kepuasan": {
        setInput({ ...input, kepuasan: value });
        break;
      }
      case "kejelasan": {
        setInput({ ...input, kejelasan: value });
        break;
      }
      case "rekomendasi": {
        setInput({ ...input, rekomendasi: value });
        break;
      }
      case "pelaksanaan": {
        setInput({ ...input, pelaksanaan: value });
        break;
      }
      default: {
        break;
      }
    }
  };

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
          groupvalue={input.kepuasan}
          onchange={handleChange}
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
          groupvalue={input.kejelasan}
          onchange={handleChange}
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" text="Feedback" />
        </Toolbar>
      </AppBar>
      <div className="section">
        <form>
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
            style={{ width: "350px", marginRight: "10px" }}
          />
          <br />
          <TextField
            label="Rate materi sesuai untuk menjadi Developer"
            type="number"
            name="rate-sesuai"
            inputProps={{ min: 1, max: 5 }}
            style={{ width: "350px", marginRight: "10px" }}
          />
          <br />
          <TextField
            label="Rate materi menarik"
            type="number"
            name="rate-menarik"
            inputProps={{ min: 1, max: 5 }}
            style={{ width: "350px", marginRight: "10px" }}
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
            groupvalue={input.rekomendasi}
            onchange={handleChange}
          />

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
            groupvalue={input.pelaksanaan}
            onchange={handleChange}
          />

          {input.pelaksanaan === "online" && <Online />}
          {input.pelaksanaan === "offline" && <Offline />}
          {input.pelaksanaan === "keduanya" && <Both />}
          <Button style={{ marginTop: "10px" }} />
        </form>
      </div>
      <footer>
        <Label
          text="copyright &copy; coding camp "
          style={{ fontSize: "15px", fontWeight: "bold", color: "white" }}
        />
      </footer>
    </>
  );
};

export default FeedbackForm;
