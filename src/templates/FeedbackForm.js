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
    ratemembantu: 0,
    ratesesuai: 0,
    retemenarik: 0,
    ratedipahami: 0,
    ratepuas: 0,
    rateterpenuhi: 0,
    ratesuasana: 0,
    data: [
      {
        namatrainer: "",
        ratepenyampaian: 0,
        ratepenguasaan: 0,
        rateinteraksi: 0,
        saran: "",
      },
    ],
  });

  const handlePage = (number) => {
    setPage(number);
  };
 
  const handleAdd = (handleChangeForm) => {
    let newobject = {
      namatrainer: "",
      ratepenyampaian: 0,
      ratepenguasaan: 0,
      rateinteraksi: 0,
      saran: "",
    };

    const newArray = input.data.slice();
    newArray.push(newobject);
    setInput({ data: newArray });
    handleChangeForm(input.data.length);
  };
  const handleDelete = (index) => {
    const newArray = input.data.slice();
    newArray.splice(index, 1);
    setInput({ data: newArray });
  };
  const handleChange = (event) => {
    let value = event.target.value;
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
        input.data[index] = { ...newdata[index], saran: value };
        setInput({ ...input, data: newdata });
        break;
      }
      default: {
        break;
      }
    }
  };
  const handleSubmit = (input) => console.log(input);

  return (
    <>
      <Nav position="static" variant="h5" text="Feedback" />
      <Section>
        <Form
          page={page}
          dataTrainer={input.data}
          onChangePage={handlePage}
          onDelete={handleDelete}
          onSubmit={handleSubmit}
          onadd={handleAdd}
          onChange={handleChange}
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
      <Footer text="copyright &copy; ravenwijaya" />
    </>
  );
};

export default FeedbackForm;
