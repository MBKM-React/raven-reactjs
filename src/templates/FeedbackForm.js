import React, { useState } from "react";
import "./FeedbackForm.css";
import Nav from "../molecules/nav/Nav";
import Section from "../organisms/Section";
import Form from "../organisms/Form";
import Footer from "../molecules/footer/Footer";

const FeedbackForm = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState({
    kepuasan: "",
    kejelasan: "",
    rekomendasi: "",
    pelaksanaan: "",
    ratemembantu: "",
    ratesesuai: "",
    retemenarik: "",
    ratedipahami: "",
    ratepuas: "",
    rateterpenuhi: "",
    ratesuasana: "",
    data: [
      {
        namatrainer: "",
        ratepenyampaian: "",
        ratepenguasaan: "",
        rateinteraksi: "",
        saran: "ff",
      },
    ],
  });

  const handlePage = (number) => {
    setPage(number);
  };
  const handleAdd = () => {
    let newobject = {
      namatrainer: "",
      ratepenyampaian: "",
      ratepenguasaan: "",
      rateinteraksi: "",
      saran: "",
    };

    const newArray = input.data.slice();
    newArray.push(newobject);
    setInput({ data: newArray });
  };
  const handleChange = (event) => {
    let value = event.target.value;
    //console.log(value)
    let rawName = event.target.name;
    let name = rawName.split("-")[0];
    let index = parseInt(rawName.split("-")[1]);
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
      case "ratemembantu": {
        setInput({ ...input, ratemembantu: value });
        break;
      }
      case "ratesesuai": {
        setInput({ ...input, ratesesuai: value });
        break;
      }
      case "ratemenarik": {
        setInput({ ...input, ratemenarik: value });
        break;
      }
      case "ratedipahami": {
        setInput({ ...input, ratedipahami: value });
        break;
      }
      case "ratepuas": {
        setInput({ ...input, ratepuas: value });
        break;
      }
      case "rateterpenuhi": {
        setInput({ ...input, rateterpenuhi: value });
        break;
      }
      case "ratesuasana": {
        setInput({ ...input, ratesuasana: value });
        break;
      }
      case "namatrainer": {
        //console.log(value)
        let { data: newdata } = input;
        input.data[index] = { ...newdata[index], namatrainer: value };
        setInput({ ...input, data: newdata });
        break;
      }
      case "ratepenyampaian": {
        let { data: newdata } = input;
        input.data[index] = { ...newdata[index], ratepenyampaian: value };
        setInput({ ...input, data: newdata });
        break;
      }
      case "ratepenguasaan": {
        let { data: newdata } = input;
        input.data[index] = { ...newdata[index], ratepenguasaan: value };
        setInput({ ...input, data: newdata });
        break;
      }
      case "rateinteraksi": {
        let { data: newdata } = input;
        input.data[index] = { ...newdata[index], rateinteraksi: value };
        setInput({ ...input, data: newdata });
        break;
      }
      case "sarantrainer": {
        let { data: newdata } = input;
        input.data[index] = { ...newdata[index], sarantrainer: value };
        setInput({ ...input, data: newdata });
        break;
      }
      default: {
        break;
      }
    }
  };
  const onSubmit = input => console.log(input);

  return (
    <>
      <Nav position="static" variant="h5" text="Feedback" />
      <Section>
        <Form
          page={page}
          dataTrainer={input.data}
          handlepage={handlePage}
          onSubmit={onSubmit}
          onadd={handleAdd}
          onchange={handleChange}
          valuepelaksanaan={input.pelaksanaan}
          valuekepuasan={input.kepuasan}
          valuekejelasan={input.kejelasan}
          valuerekomendasi={input.rekomendasi}
          ratemembantu={input.ratemembantu}
          ratesesuai={input.ratesesuai}
          ratedipahami={input.ratedipahami}
          ratemenarik={input.ratemenarik}
          ratepuas={input.ratepuas}
          ratesuasana={input.ratesuasana}
          rateterpenuhi={input.rateterpenuhi}
        />
      </Section>
      <Footer text="copyright &copy; coding camp " />
    </>
  );
};

export default FeedbackForm;
