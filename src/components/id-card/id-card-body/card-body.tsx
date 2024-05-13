import './card-body.css'
import {useLocation} from "react-router-dom";

type CardBodyProp = {
  image: string,
  name: string | null
}
export const CardBody = ({image, name}: CardBodyProp) => {
  const course = new URLSearchParams(useLocation().search).get("name");
  // console.log(date)
  const startDate = new URLSearchParams(useLocation().search).get("date")
  const validUntil = () => {
    if(startDate){
      const splitDate = startDate.split("-");
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
        <dd>{startDate && `${course}-${startDate}`}</dd>
        <dt>Valid until</dt>
        <dd>{startDate && validUntil()}</dd>
      </dl>
    </section>
  );
};