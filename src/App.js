import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route /> "home" */}
          {/* <Route /> "about" */}
          {/* <Route /> "menu" */}
          {/* <Route /> "contact" */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
