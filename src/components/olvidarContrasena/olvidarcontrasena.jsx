import './estilo.css';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
function RContrasena() {
  return (
    
    <div className="Main_box_4">
      <div className='header'>
          <NavLink to='/login' className='arrow_position_5'>
            ←
          </NavLink>
        <p className='title_text_4'>Recuperar Cuenta</p>
      </div>
      <label htmlFor="email" className='nombre_email_text'>Nombre de usuario o E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        className='inputs_tamaño_4'

      />
      <NavLink to='/inicio' className='btn_orange_recuperar'>
          Continuar
      </NavLink>
    </div>
  );
}

export default RContrasena;
