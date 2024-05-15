import './card-body.css'
import {useLocation} from "react-router-dom";

type CardBodyProp = {
  image: string,
  name: string | null
}
export const CardBody = ({image, name}: CardBodyProp) => {
  const course = new URLSearchParams(useLocation().search).get("name");
  const date = new URLSearchParams(useLocation().search).get("date")
  const location = new URLSearchParams(useLocation().search).get("location")

  const validUntil = () => {
    if(date){
      const splitDate = date.split("-");
      splitDate[0] = `${+splitDate[0] + 2}`;
      return splitDate.join("-");
    }
  };
  return (
    <section className="card-section__body">
      <div className="card-body__img">
        <img
          src={image}
          alt="user picture"
        />
      </div>
      <dl className="card-body__info">
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Course</dt>
        <dd>{date && `${course}-${location}-${date}`}</dd>
        <dt>Valid until</dt>
        <dd>{date && validUntil()}</dd>
      </dl>
    </section>
  );
};