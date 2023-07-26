import React, { useState } from 'react';
import './estilo.css';
import Register from '../register/Register';
import Login from '../Login/login';
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
                <button className='btn btn_orange'  onClick={handleShowRegistro}>Registrarse Gratis</button>
                <button className='btn btn_wborders'>Continuar con google</button>
                <button className='btn btn_wborders'>continuar con apple</button>
            </div>
            
            <button className='btn_offborder' onClick={handleShowLogin}>Iniciar Sesión</button>
          </>
            ) : null}
            {showLogin && <Login />} 
            {showRegistro && <Register />}
      </div> 
    </div>
  );
};

export default Inicio;