import {Title} from "../title";
import './card-info.css'

type Props = {
  name: string | null
}
export const CardInfo = ({name}: Props) => {
  return (
    <div className="card-info__container">
      <Title content={`Hi, ${name}!`}/>
      <div>
        <h4>What you can use the card for ?</h4>
        <p>This card can be used to apply for Github Student Developer Pack. You can sign up for it on the following
          page: <a href="https://education.github.com/discount_requests/application" target="_blank"> github
            education</a></p>
        <p>Application process steps:</p>
        <ol>
          <li>Select academic status "Student".</li>
          <li>In the application section select "Applied Technology - SALT" as your school name.</li>
          <li>Link your @appliedtechnology.se email to your github account.</li>
          <li>Upload Salt ID Card as the proof of your academic status.</li>
        </ol>
      </div>
    </div>
  );
};

