import React, { useState } from 'react';
import './estilo.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Inicio = () => {
 
  return (
    <div className='container'>
      <div className='sub_container'>
          <>
            <div>
              <Logo />
              <p className='second_header'>Música a medida</p>
            </div>

            <div className='btn_order'>
              <NavLink to='/register' className='btn btn_orange'>
                Registrarse Gratis
              </NavLink>
              <button className='btn btn_wborders'>Continuar con google</button>
              <button className='btn btn_wborders'>continuar con apple</button>
            </div>

            <NavLink to='/login' className='btn_offborder'>
              Iniciar Sesión
            </NavLink>
          </>
      </div>
    </div>
  );
};

export default Inicio;