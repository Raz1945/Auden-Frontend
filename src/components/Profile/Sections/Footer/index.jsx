import "./index.css";
import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="footer__conteiner">
            <div className="footer__icons-wrapper">
                <button className="footer__icon-container">
                    <img className="footer__icon" src="\images\profile-footer-home.svg" alt=""/>
                </button>
                <button className="footer__icon-container">
                    <img className="footer__icon" src="\images\profile-footer-search.svg" alt=""/>
                </button>
                <button className="footer__icon-container">
                    <img className="footer__icon" src="\images\profile-footer-user.svg" alt=""/>
                </button>
                <button className="footer__icon-container">
                    <img className="footer__icon" src="\images\profile-footer-friends.svg" alt=""/>
                </button>
            </div>
      </footer>
    </>
  );
};
export default Footer;
