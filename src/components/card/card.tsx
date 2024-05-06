import "./card.css";
import { v4 as uuidv4 } from "uuid";
import qrcode from "../../assets/qrcode.png";
import { useEffect, useState } from "react";

type CardProps = {
  referece: React.MutableRefObject<HTMLDivElement | undefined>;
  input: {
    name: string;
    startDate: string;
    course: string;
    photo: string;
  };
};
export const Card = ({ input, referece }: CardProps) => {
  const [id, setId] = useState("");
  const validUntil = () => {
    const splitDate = input.startDate.split("-");
    splitDate[0] = `${+splitDate[0] + 2}`;
    return splitDate.join("-");
  };
  useEffect(() => {
    setId(uuidv4().substring(0, 8));
  }, []);

  return (
    <div className="card-container" ref={referece}>
      <div className="card-wrapper">
        <section className="card-section__head">
          <img
            src="https://salt.dev/wp-content/uploads/2024/02/salt-logo-dark.svg"
            alt="salt logo"
            className="card-school__img"
          />
          <span className="card-school__name">Applied Technology STHLM AB</span>
          <span className="card-student__status">student</span>
        </section>
        <section className="card-section__body">
          <img
            src={input.photo}
            alt="user picture"
            className="card-user__img"
          />
          <dl className="card-info__wrapper">
            <dt>Name:</dt>
            <dd>{input.name}</dd>
            <dt>ID#: </dt>
            <dd>{id}</dd>
            <dt>Course:</dt>
            <dd>{input.startDate && `${input.course}-${input.startDate}`}</dd>
          </dl>
        </section>
        <section className="card-section__footer">
          <dl className="card-validity">
            <dt>Valid until:</dt>
            <dd>{input.startDate && validUntil()}</dd>
          </dl>
          <img src={qrcode} alt="QR code" className="card-qrcode" />
        </section>
      </div>
    </div>
  );
};
