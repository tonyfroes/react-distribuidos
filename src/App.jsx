import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
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
        <Route path="/contato" element={<Contato />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
