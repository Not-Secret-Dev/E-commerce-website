import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Global/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
