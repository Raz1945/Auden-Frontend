import "./index.css";
import React from "react";

export const Footer = () => {

  async function cerrarSesion() {
    
    try {localStorage.removeItem('jwtToken');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  }

  return (
    <>
      <footer className="footer__conteiner">
        <p className="footer__text" >Versión: V1.25.03</p>
        <button onClick={cerrarSesion} className="footer__text">Cerrar sesión</button>
      </footer>
    </>
  );
};
export default Footer;
