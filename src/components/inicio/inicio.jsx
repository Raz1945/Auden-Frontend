import React, { useState } from 'react';
import './estilo.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Inicio = () => {
 
  return (
    <div className='container'>
        <div className='sub_container'>
            <>
              <div className='logo_subtitle'>
                <Logo />
                <p className='second_header btnMargin'>Música a medida.</p>
              </div>

              <div className='btn_order'>
                <NavLink to='/register' className='btn btn_orange btnMargin'>
                  Registrarse Gratis
                </NavLink>
                <button className='btn btn_wborders btnMargin'>Continuar con google</button>
                <button className='btn btn_wborders btnMargin'>continuar con apple</button>
              </div>

              <NavLink to='/login' className='btn_offborders btnMargin pepew'>
                Iniciar Sesión
              </NavLink>
            </>
        </div>
    </div>
  );
};

export default Inicio;
/* images/name */