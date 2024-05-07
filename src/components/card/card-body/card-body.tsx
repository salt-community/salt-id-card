import { FormInputType } from "../../../types";
import './card-body.css'

type CardBodyProp ={
    formData: FormInputType
}
export const CardBody = ({formData}:CardBodyProp) => {
  const {photo, email, name, startDate, course} = formData;
  const emailPrefix =  email.split("@")[0];
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
          <dt>Email </dt>
          <dd>{emailPrefix}</dd>
          <dd></dd>
          <dd className="card-body__email">@appliedtechnology.se</dd>
          <dt>Course</dt>
          <dd>{startDate && `${course}-${startDate}`}</dd>
        </dl>
      </section>
    );
  };