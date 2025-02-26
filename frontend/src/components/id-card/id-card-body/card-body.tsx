import "./card-body.css";

type CardBodyProp = {
  image: string;
  name: string | null;
  course: string;
  endDate: string;
};
export const CardBody = ({ image, name, course, endDate }: CardBodyProp) => {
  return (
    <section className="card-section__body">
      <div className="card-body__img">
        <img src={image} alt="user picture" />
      </div>
      <dl className="card-body__info">
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Course</dt>
        <dd>{course}</dd>
        <dt>Valid until</dt>
        <dd>{endDate}</dd>
      </dl>
    </section>
  );
};
