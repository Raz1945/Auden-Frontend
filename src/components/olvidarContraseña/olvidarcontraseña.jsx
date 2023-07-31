import { Link } from "react-router-dom";
import './estilo.css';
import React, { useState } from 'react';
function RContrasena() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    
    <div className="Main_box">
      <div className='header'>
        <button className='btn_offborder btn_pages'>←</button>
        <p>Recuperar Cuenta</p>
      </div>
      <label htmlFor="email">Nombre de usuario o E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="btn_orange btn btn_crearcuenta">Continuar</button>
    </div>
  );
}

export default RContrasena;
