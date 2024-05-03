import "./style.css";

type CardProps = {
  input: {
    name: string;
    startDate: string;
    course: string;
  };
};
export const Card = ({ input }: CardProps) => {
  const validUntil = () => {
    const splitDate = input.startDate.split("-");
    splitDate[0] = `${+splitDate[0] + 2}`;
    return splitDate.join("-");
  };

  return (
    <div className="id-card">
      {input.name}
      {input.startDate && validUntil()}
      {input.startDate && `${input.course}-${input.startDate}`}
    </div>
  );
};
