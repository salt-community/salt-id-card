import {IdCard, CtaButton} from "../../../components";
import {handlePrint} from "../../../utils/utils.ts";
import {useRef} from "react";
import {User} from "../../../types.ts";
import './logged-in-right.css'

type Props= {
  userData: User
}

export const LoggedInRight = ({userData}:Props) => {
  const printRef = useRef<HTMLDivElement>(null);
  return (
    <div className="id-card__wrapper">
      <IdCard userData={userData} ref={printRef} />
      <CtaButton
        onClick={() => handlePrint(userData, printRef)}
        variant="success"
      >
        Download my ID
      </CtaButton>
    </div>
  );
};
