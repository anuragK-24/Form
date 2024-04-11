import { Link } from "react-router-dom";
import DataJson from "../../DataJson/DataJson";
import "./HomePage.scss";
export default function HomePage() {
  const puja = Object.keys(DataJson);
  return (
    <div className="HomePage">
      <h1 className="HomePage__Heading">Home Page</h1>
      <h2 className="HomePage__SubHeading">Available Pooja</h2>
      <hr />
      <div className="HomePage__Content">
        <ol>
          {puja.map((pooja, index) => (
            <li key={index}>
              <Link to={`/puja/${pooja}`}>{pooja}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
