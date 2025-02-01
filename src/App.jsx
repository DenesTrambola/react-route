import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Delivery from "./components/pages/Delivery";
import Posts from "./components/pages/Posts";
import PostDetail from "./components/PostDetail";

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/delivery">Delivery</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery/*" element={<Delivery />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}
