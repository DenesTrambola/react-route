import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Delivery from "./components/pages/Delivery";

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/delivery">Delivery</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery/*" element={<Delivery />} />
      </Routes>
    </Router>
  );
}
