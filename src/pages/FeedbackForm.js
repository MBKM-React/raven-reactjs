import React, { useState } from "react";
import "./FeedbackForm.css";
import Button from "../atom/button/Button";
import Nav from "../molecules/nav/Nav";
import CodingCampFeedback from "../molecules/codingcampfeedback/CodingCampFeedback";
import TrainerFeedback from "../molecules/trainerfeedback/TrainerFeedback";
import EnvironmentFeedback from "../molecules/environmentfeedback/EnvironmentFeedback"
import Footer from "../molecules/footer/Footer";


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
  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  return (
    <>
    <Nav position="static" variant="h5" text="Feedback"/>
      <div className="section">
        <form >
          <CodingCampFeedback onchange={handleChange} valuerekomendasi={input.rekomendasi}/>
          <TrainerFeedback/>
          <EnvironmentFeedback onchange={handleChange} valuepelaksanaan={input.pelaksanaan} valuekepuasan={input.kepuasan} valuekejelasan={input.kejelasan}/>
          <Button
            text="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <Footer text="copyright &copy; coding camp "/>
    </>
  );
};

export default FeedbackForm;
