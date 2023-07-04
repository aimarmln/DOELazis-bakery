import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Menu from "./views/Menu";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route /> "about" */}
          <Route path="/menu" element={<Menu />} />
          {/* <Route /> "contact" */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
