import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './estilo.css';
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
            <p className='title_2'>Crear cuenta</p>
          </div>
          <p className='title_3'>¿Cuál es tu correo electrónico?</p>
          <div className='box_inputs_tamaño_2'>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              className='inputs_tamaño_2'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          
          <button
            className="btn_orange_two"
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
