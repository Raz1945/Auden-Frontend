import './estilo.css';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
function RContrasena() {
  return (
    
    <div className="Main_box">
      <div className='header'>
          <NavLink to='/login' className='arrow_position_2'>
            ←
          </NavLink>
        <p>Recuperar Cuenta</p>
      </div>
      <label htmlFor="email">Nombre de usuario o E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
      />
      <NavLink to='/inicio' className='btn_orange btn btn_crearcuenta'>
          Continuar
      </NavLink>
    </div>
  );
}

export default RContrasena;
