import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <aside>
        <h3>Categories</h3>
        <ul>
          <li><NavLink to="/category/1">Category 1</NavLink></li>
          <li><NavLink to="/category/2">Category 2</NavLink></li>
        </ul>
      </aside>

      <main>
        <h1>Home Page</h1>
        <p>Welcome to our website!</p>
      </main>
    </div>
  );
}
