import {CardInfo} from "../../card-info";

type Props={
  name: string | null
}
export const LoggedInLeft = ({name}: Props) => {
  return (
    <CardInfo name={name} />
  );
};
