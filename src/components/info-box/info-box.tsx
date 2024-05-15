type Props={
  content?: string
}

export const InfoBox = ({content}:Props) => {
  return (
    <p>{content}</p>
  );
};
