import qrcode from "../../../assets/qrcode.png";
import "./card-footer.css"

type Props = {
   startDate: string
}
export const CardFooter = ({startDate}:Props) => {
    const validUntil = () => {
        const splitDate = startDate.split("-");
        splitDate[0] = `${+splitDate[0] + 2}`;
        return splitDate.join("-");
      };
  return (
    <section className="card-section__footer">
      <dl className="card-footer__validity">
        <dt>Valid until</dt>
        <dd>{startDate && validUntil()}</dd>
      </dl>
      <img src={qrcode} alt="QR code" className="card-footer__qrcode" />
    </section>
  );
};
