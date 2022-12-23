import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Nft from "./components/pages/Nft";
import Chart from "./components/pages/Chart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
