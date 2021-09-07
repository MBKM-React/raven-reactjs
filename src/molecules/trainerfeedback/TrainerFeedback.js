import Label from "../../atoms/label/Label";
import TextField from "../../atoms/textfield/TextField";
import TextArea from "../../atoms/textarea/TextArea";
import Star from "../../atoms/star/Star";
import Button from "../../atoms/button/Button";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";

const TrainerFeedback = (props) => {
  const [active, setActive] = useState(0);

  const handleChangeForm = (index) => {
    setActive(index);
    
  };

  return (
    <>
      <Label text="TRAINER FEEDBACK" className="title" />
      {props.dataTrainer.map((data, index) => {
        return (
          <>
            <Button
              text={`Form${index + 1}`}
              onClick={() => handleChangeForm(index)}
            ></Button>
          </>
        );
      })}
      <Button
        text="New Form"
        startIcon={<AddIcon />}
        onClick={props.onadd}
      ></Button>
      <br />
      <br />
            <TextField
              label="Nama Trainer"
              name={`namatrainer-${active}`}
              onChange={props.onchange}
              value={props.dataTrainer[active].namatrainer}
              className="trainer"
            />
            <br />
            <Label
              text="Bagaimana cara penyampaian materi ?"
              className="question"
            />
            <Star
              name={`ratepenyampaian-${active}`}
              value={props.dataTrainer[active].ratepenyampaian}
              onChange={props.onchange}
            />
            <br />

            <Label
              text="Apakah Trainer pada masing - masing segment menguasai materi ?"
              className="question"
            />
            <Star
              name={`ratepenguasaan-${active}`}
              value={props.dataTrainer[active].ratepenguasaan}
              onChange={props.onchange}
            />
            <br />
            <Label
              text="Bagaimana interaksi Trainer dengan peserta Coding Camp ?"
              className="question"
            />
            <Star
              name={`rateinteraksi-${active}`}
              value={props.dataTrainer[active].rateinteraksi}
              onChange={props.onchange}
            />
            <br />
            <TextArea
              name={`sarantrainer-${active}`}
              placeholder="Saran untuk Trainer"
              value={props.dataTrainer[active].saran}
              onChange={props.onchange}
            />
            <br />
    
      <Button text="Prev" onClick={() => props.handlepage(1)} />
      <Button text="Next" onClick={() => props.handlepage(3)} />
     
    </>
  );
};

export default TrainerFeedback;
