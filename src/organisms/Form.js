import CodingCampFeedback from "../molecules/codingcampfeedback/CodingCampFeedback";
import TrainerFeedback from "../molecules/trainerfeedback/TrainerFeedback";
import EnvironmentFeedback from "../molecules/environmentfeedback/EnvironmentFeedback";
import Button from "../atoms/button/Button";
import { Alertt } from "../atoms/alert/Alert";

const Form = (props) => {
  return (
    <form >
      <Alertt
        severity="info"
        text="This form is used to improve the quality of our services"
        className="formInfo"
      />
      {props.page === 1 && (
        <>
          <CodingCampFeedback
            onChangePage={props.onChangePage}
            onChange={props.onChange}
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
          onChangePage={props.onChangePage}
          onDelete={props.onDelete}
          onChange={props.onChange}
          onadd={props.onadd}
        />
      )}

      {props.page === 3 && (
        <EnvironmentFeedback
        onChangePage={props.onChangePage}
          onChange={props.onChange}
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
