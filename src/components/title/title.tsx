import './title.css'
type Props={
  content: string
}
export const Title = ({content}:Props) => {
  return (
    <h1>
      {content}
    </h1>
  );
};
