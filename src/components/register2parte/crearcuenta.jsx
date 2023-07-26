import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './estilo.css';

function Cuenta() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { setToken } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleLogin = async () => {
    if (!termsAccepted) {
      console.error('Debes aceptar los términos y condiciones antes de continuar.');
      return;
    }

    const isPasswordValid = validatePassword();
    if (!isPasswordValid) {
      console.error('La contraseña no es válida. Por favor, corrige el error antes de continuar.');
      return;
    }

    // Resto del código para el inicio de sesión...
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleTermsAcceptance = () => {
    setTermsAccepted(true);
  };

  return (
    <>
      <div className='Main_box'>
        <div className='header'>
          <button className='btn_offborder btn_pages'>←</button>
          <p>Crear cuenta</p>
        </div>
        <div className='box_login'>
          <p>Nombre de usuario</p>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <p>Contraseña:</p>
          <div className={`password_input ${passwordError ? 'error' : ''}`}>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="error_text">{passwordError}</p>}
            <button
                className="password_toggle_btn"
                type="button"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? "O" : "M"}
            </button>
            <div className='box_btn_terminos'>
                <button
                className={`btn_terminos ${termsAccepted ? 'accepted' : ''}`}
                onClick={handleTermsAcceptance}
                ></button>
                <p>He leído y acepto los</p>
                <p className='orangeText'>Términos</p>
                <p>y</p>
                <p className='orangeText'>condiciones</p>
            </div>
          
            <button
                onClick={handleLogin}
                className={`btn_login ${termsAccepted ? 'enabled' : ''}`}
                disabled={!termsAccepted}
                >Continuar
            </button>
        </div>
      </div>
    </>
  );
}

export default Cuenta;