import QRCode from "react-qr-code";
import "./card-footer.css"

type Props = {
  email: string | undefined
}
export const CardFooter = ({email}: Props) => {
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
      )
    }
    return <dd>{email}</dd>
  }

  return (
    <section className="card-section__footer">
      <dl className="card-footer__email">
        {emailContent()}
      </dl>
      <QRCode value="http://192.168.101.217:5173/salt-id-card/" className="card-footer__qrcode"/>
    </section>
  );
};
