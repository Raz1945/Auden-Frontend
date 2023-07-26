import { Link } from "react-router-dom";
import './estilo.css';


import React, { useState } from 'react';

function EmailInput() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    
    <div className="Main_box">
      <div className='header'>
        <button className='btn_offborder btn_pages'>←</button>
        <p>Crear cuenta</p>
      </div>
      <p>¿Cuál es tu correo electronico?</p>
      <label htmlFor="email">Correo electrónico:</label>
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

export default EmailInput;


/* <div className='header'>
        <button className='btn_offborder btn_pages'>←</button>
        <p>Crear cuenta</p>
      </div>
      <div>
        <Link to={`/login`}>Register</Link>
      </div> */






