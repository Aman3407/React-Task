import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Wrapper from './component/Wrapper';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Details from "./pages/DetailsPage.jsx";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
