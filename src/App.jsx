import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import FormPuja from "./component/FormPuja/FormPuja";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puja/:poojaName" element={<FormPuja />} />
      </Routes>
    </Router>
  );
}

export default App;