import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header__conteiner">
        <div className="header__wrapper">
          <div className="header__profile-conteiner">
            <img
              className="header__profile-img"
              src="\images\profile-header-img.png"
              alt=""
            />
            <button className="header__gear-btn">
              <Link to={`/Configuration`}>
                <img
                  className="header__gear-icon"
                  src="\images\profile-header-gear.svg"
                  alt=""
                />{" "}
              </Link>
            </button>
          </div>

          <div className="header__name-container">
            <h1 className="header__name">Mara Pérez</h1>
            <img
              className="header__profile-emoji"
              src="\images\profile-header-emoji.png"
              alt=""
            />
          </div>
          <p className="header__username">@mara_pg</p>
        </div>
      </header>
    </>
  );
};
export default Header;
