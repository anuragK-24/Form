import { Link } from "react-router-dom";
import DataJson from "../../DataJson/DataJson";
export default function HomePage() {
  const puja = Object.keys(DataJson);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Available Pooja</h2>
      <hr />
      <ul>
        {puja.map((pooja, index) => (
          <li key={index}>
            <Link to={`/puja/${pooja}`}>{pooja}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
