import "./Ques.scss";
import PropTypes from "prop-types";
export default function Ques({ question, answer, outcomes }) {
  return (
    <div className="Ques">
      <div className="Ques__Desc">
        <h2 className="Ques__Desc__Heading">{question}</h2>
        <p>
          <ul>
            {answer.length !== 0 &&
              answer.map((benefit, index) => <li key={index}>{benefit}</li>)}
            {outcomes.length !== 0 && <li>{outcomes}</li>}
          </ul>
        </p>
      </div>
    </div>
  );
}

Ques.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.array.isRequired,
  outcomes: PropTypes.string.isRequired,
};
Ques.defaultProps = {
  question: "",
  answer: [],
  outcomes: "",
};
