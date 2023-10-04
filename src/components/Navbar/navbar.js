import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <div className="container">
      <nav>
        <ul className="nav-menu links" id="nav">
          <li>
            <NavLink className="nav-link" to="/">
              Biz haqimizda
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Meyoriy">
              Me’yoriy-huquqiy hujjatlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Muassasa">
              Professional ta'lim muassasalari
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Talim">
              Ta'lim standartlari va fanlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Adabiyot">
              Adabiyotlar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Yangilik">
              Yangiliklar
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Contact">
              Bog‘lanish
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
