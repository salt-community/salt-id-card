import QRCode from "react-qr-code";
import "./card-footer.css";

type Props = {
  email: string | undefined;
};
export const CardFooter = ({ email }: Props) => {
  const emailPrefix = email?.split("@")[0];
  const emailSuffix = "@appliedtechnology.se";
  const emailContent = () => {
    const maxEmailPrefixLength = 20;
    if (emailPrefix && emailPrefix.length > maxEmailPrefixLength) {
      return (
        <>
          <dd>{emailPrefix}</dd>
          <dd>{emailSuffix}</dd>
        </>
      );
    }
    return <dd>{email}</dd>;
  };
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <section className="card-section__footer">
      <dl className="card-footer__email">{emailContent()}</dl>
      <QRCode
        value={VITE_BASE_URL + "/salt-id-card/validate/"}
        className="card-footer__qrcode"
      />
    </section>
  );
};
