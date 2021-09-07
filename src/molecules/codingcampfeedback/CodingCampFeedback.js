import Label from "../../atoms/label/Label";
import RadioButton from "../../atoms/radiobutton/RadioButton";
import Star from "../../atoms/star/Star";
import Button from "../../atoms/button/Button";

const CodingCampFeedback = (props) => {
  return (
    <>
      <Label
        text="CODING CAMP FEEDBACK"
        className="title"
      />
      <Label
        text="Seberapakah membantu pelatihan Coding Camp ini untuk anda ? "
        className="question"
      />
      <Star
        name="ratemembantu"
        value={props.ratemembantu}
        onChange={props.onchange}
      />
      <br />
      <Label
        text="Apakah materi yang diberikan sudah sesuai untuk menjadi seorang Developer ?"
        className="question"
      />
      <Star
        name="ratesesuai"
        value={props.ratesesuai}
        onChange={props.onchange}
      />
      <br />
      <Label
        text="Apakah materi pelatihan Coding Camp ini menarik ?"
        className="question"
      />
      <Star
        name="ratemenarik"
        value={props.ratemenarik}
        onChange={props.onchange}
      />
      <br />
      <Label
        text="Apakah materi pelatihan Coding Camp ini mudah dipahami ?"
        className="question"
      />
      <Star
        name="ratedipahami"
        value={props.ratedipahami}
        onChange={props.onchange}
      />
      <br />

      <Label
        text="Apakah anda ingin merekomendasikan pelatihan ini ke teman ? "
        className="question"
      />
      <RadioButton
        buttonvalue={["ya", "tidak", "mungkin"]}
        buttonlabel={["ya", "tidak", "mungkin"]}
        groupname={"rekomendasi"}
        groupvalue={props.valuerekomendasi}
        onchange={props.onchange}
      />
     
      <Button text="Next" onClick={()=>props.handlepage(2)}/> 
    </>
  );
};
export default CodingCampFeedback;
