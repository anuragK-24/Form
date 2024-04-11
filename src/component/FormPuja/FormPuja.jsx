import Ques from "../Ques/Ques";
import "./FormPuja.scss";
import { useParams } from "react-router-dom";
import DataJson from "../../DataJson/DataJson";

export default function FormPuja() {
    const { poojaName } = useParams();
    const poojaData = DataJson[poojaName];
    const questions = [
        { question: "What are the Benefits?", answer: poojaData.benefits },
        { question: "How will it happen?", answer: poojaData.procedure },
        { question: `About ${poojaData.about_deity.name}`, answer: poojaData.about_deity.attributes },
        { question: "What should you do after pooja to get maximum benefits?", answer: poojaData.max_benefits_actions },
        { question: "Why book with divine connection?", answer: poojaData.why_book_with_divine_connection.reasons, outcomes: poojaData.why_book_with_divine_connection.outcomes },
      ];
  return (
    <div className="FormPuja">
      <div className="FormPuja__Heading">
        <div className="FormPuja__Heading__Description">
          <h1>{poojaName}</h1>
          <p>
            {poojaData.description}
          </p>
        </div>
        <div className="FormPuja__Heading__TicketInfo">
          <h2>₹ 500</h2>
          <a target="_blank" href="#"><button>Book Now</button></a>
        </div>
      </div>
      {questions.map((ques, index) => (
      <div key={index}>
        <hr />
        <Ques question={ques.question} answer={ques.answer} outcomes={ques.outcomes} />
      </div>
      ))}
      
    </div>
  );
}
