import {FormInputType} from "../../../types";
import './card-body.css'

type CardBodyProp = {
  formData: FormInputType
}
export const CardBody = ({formData}: CardBodyProp) => {
  const {photo, name, startDate, course} = formData;
  // const emailPrefix =  email.split("@")[0];
  const validUntil = () => {
    const splitDate = startDate.split("-");
    splitDate[0] = `${+splitDate[0] + 2}`;
    return splitDate.join("-");
  };
  return (
    <section className="card-section__body">
      <div className="card-body__img">
        <img
          src={photo}
          alt="user picture"
        />
      </div>
      <dl className="card-body__info">
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Course</dt>
        <dd>{startDate && `${course}-${startDate}`}</dd>
        <dt>Valid until</dt>
        <dd>{startDate && validUntil()}</dd>
      </dl>
    </section>
  );
};