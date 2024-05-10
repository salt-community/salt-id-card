type Props={
  content?: string
}

export const InfoBox = ({content}:Props) => {
  return (
    <span>{content}</span>
  );
};
