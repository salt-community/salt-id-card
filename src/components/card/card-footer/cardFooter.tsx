import { FormInputType } from "../../../types";
import qrcode from "../../../assets/qrcode.png";
import "./cardFooter.css"

type CardFooterType = {
    input: FormInputType
}
export const CardFooter = ({input}:CardFooterType) => {
    const validUntil = () => {
        const splitDate = input.startDate.split("-");
        splitDate[0] = `${+splitDate[0] + 2}`;
        return splitDate.join("-");
      };
  return (
    <section className="card-section__footer">
      <dl className="card-footer__validity">
        <dt>Valid until:</dt>
        <dd>{input.startDate && validUntil()}</dd>
      </dl>
      <img src={qrcode} alt="QR code" className="card-footer__qrcode" />
    </section>
  );
};
