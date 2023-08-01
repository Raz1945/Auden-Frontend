import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header__configuration-wrapper">
      <NavLink to='/dashboard/profile'>
        <button className="header__configuration-btn">
          <img className="header__arrow" src="\images\configuracion-header-arrow.svg" alt="" /> 
        </button>
      </NavLink>
        <h1 className="header__title">Configuración</h1>
      </header>
    </>
  );
};
export default Header;