import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header__configuration-wrapper">
        <button className="header__configuration-btn">
          <Link to={`/dashboard/Profile`}>
          <img className="header__arrow" src="\images\configuracion-header-arrow.svg" alt="" /> </Link>
        </button>
        <h1 className="header__title">Configuración</h1>
      </header>
    </>
  );
};
export default Header;
