import CodingCampFeedback from "../molecules/codingcampfeedback/CodingCampFeedback";
import TrainerFeedback from "../molecules/trainerfeedback/TrainerFeedback";
import EnvironmentFeedback from "../molecules/environmentfeedback/EnvironmentFeedback";
import Button from "../atoms/button/Button";
import { Alertt } from "../atoms/alert/Alert";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Alertt
        severity="info"
        text="This form is used to improve the quality of our services"
        className="formInfo"
      />
      {props.page === 1 && (
        <>
          <CodingCampFeedback
            handlepage={props.handlepage}
            onchange={props.onchange}
            valuerekomendasi={props.valuerekomendasi}
            ratemembantu={props.ratemembantu}
            ratesesuai={props.ratesesuai}
            ratedipahami={props.ratedipahami}
            ratemenarik={props.ratemenarik}
          />
        </>
      )}

      {props.page === 2 && (
        <TrainerFeedback
          dataTrainer={props.dataTrainer}
          handlepage={props.handlepage}
          onchange={props.onchange}
          onadd={props.onadd}
        />
      )}

      {props.page === 3 && (
        <EnvironmentFeedback
          handlepage={props.handlepage}
          onchange={props.onchange}
          valuepelaksanaan={props.valuepelaksanaan}
          valuekepuasan={props.valuekepuasan}
          valuekejelasan={props.valuekejelasan}
          ratepuas={props.ratepuas}
          rateterpenuhi={props.rateterpenuhi}
          ratesuasana={props.ratesuasana}
        />
      )}
      {props.page === 3 && <Button text="submit" type="submit" />}
    </form>
  );
};
export default Form;
