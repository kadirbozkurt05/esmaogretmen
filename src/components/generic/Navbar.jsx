import "./navbar.css";
import {  NavLink } from "react-router-dom";
import "../../../index.css";


export default function Navbar() {



  return (
    <nav>
      <ul>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Anasayfa</li>
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li >Hakkımda</li>
        </NavLink>

        <NavLink
          to={"/services"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li >Hizmetler</li>
        </NavLink>

        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li >İletişim</li>
        </NavLink>
      </ul>
    </nav>
  );
}
