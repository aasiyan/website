import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import About from "./components/About/About";
// import Certificate from "./components/Certificate/Certificate";
// import Videos from "./components/Videos/Videos";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import UnderConstruction from "./components/under_construction/UnderConstruction";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/certificate" element={<UnderConstruction />} />
          <Route path="/videos" element={<UnderConstruction />} />
          <Route path="/contact" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
