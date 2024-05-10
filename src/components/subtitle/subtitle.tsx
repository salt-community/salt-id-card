type Props ={
  content: string
}
const Subtitle = ({content}:Props) => {
  return (
    <h3>
      {content}
    </h3>
  );
};

export default Subtitle;