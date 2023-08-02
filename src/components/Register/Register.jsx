import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Cuenta from '../register2parte/crearcuenta';


function EmailInput() {
  const [email, setEmail] = useState('');
  const [mostrarCuenta, setMostrarCuenta] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log('Email cambiado:', event.target.value);
  };

  const handleContinuar = () => {
    setMostrarCuenta(true);
    console.log('Botón Continuar presionado. Email:', email);
  };
  const isEmailValid = true;
  return (
    <div className="Main_box_2">
      {mostrarCuenta ? (
        <Cuenta email={email} />
      ) : (
        <>
          <div className='box_arrow_title'>
            <NavLink to='/inicio' className='arrow_position_2'>
              ←
            </NavLink>
            <p>Crear cuenta</p>
          </div>
          <p>¿Cuál es tu correo electrónico?</p>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="btn_orange btn btn_crearcuenta"
            onClick={handleContinuar}
            disabled={!isEmailValid} // Deshabilitar el botón si el email no es válido
          >
            Continuar
          </button>
        </>
      )}
    </div>
  );
}

export default EmailInput;

/* "email":"gonsan@mail.com",
  "password":"asd12345" */
  
  /* expresiones regulares para validacion */
