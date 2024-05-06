import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormInputType } from "../../../types";
import './cardBody.css'

type CardBodyProp ={
    input: FormInputType
}
export const CardBody = ({input}:CardBodyProp) => {
    const [id, setId] = useState("");
    useEffect(() => {
        setId(uuidv4().substring(0, 8));
      }, []);
    return (
        <section className="card-section__body">
        <div className="card-body__img">
          <img
            src={input.photo}
            alt="user picture"
          />
        </div>
        <dl className="card-body__info">
          <dt>Name:</dt>
          <dd>{input.name}</dd>
          <dt>ID#: </dt>
          <dd>{id}</dd>
          <dt>Course:</dt>
          <dd>{input.startDate && `${input.course}-${input.startDate}`}</dd>
        </dl>
      </section>
    );
  };