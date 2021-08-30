import React, { useState } from "react";
import "./FeedbackForm.css";
import Nav from "../molecules/nav/Nav";
import Section from "../organisms/Section";
import Form from "../organisms/Form";
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
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Nav position="static" variant="h5" text="Feedback" />
      <Section>
        <Form
          onchange={handleChange}
          onsubmit={handleSubmit}
          valuepelaksanaan={input.pelaksanaan}
          valuekepuasan={input.kepuasan}
          valuekejelasan={input.kejelasan}
          valuerekomendasi={input.rekomendasi}
        />
      </Section>
      <Footer text="copyright &copy; coding camp " />
    </>
  );
};

export default FeedbackForm;
