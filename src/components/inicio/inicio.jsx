import React, { useState } from 'react';
import './estilo.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Inicio = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegistro(false);
  };

  const handleShowRegistro = () => {
    setShowRegistro(true);
    setShowLogin(false);
  };

  return (
    <div className='container'>
      <div className='sub_container'>
        {!showLogin && !showRegistro ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default Inicio;