import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: "1rem",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Products
      </NavLink>
    </nav>
  );
}
