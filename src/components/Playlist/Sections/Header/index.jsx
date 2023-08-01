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
        <div className="header__title-conteiner" >
          <p className="header__title-text" >Generada del Cupido Musical</p>
          <h1 className="header__playlist-title">Playlist Generada</h1>
        </div>
        <button className="header__configuration-btn">
          <img className="header__ham" src="\images\playlist-header-ham.svg" alt="" /> 
        </button>
      </header>
    </>
  );
};
export default Header;