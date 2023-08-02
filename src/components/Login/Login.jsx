import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import './estilo.css';




function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const { setToken } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

  const checkFormCompleteness = () => {
    setIsFormComplete(email.trim() !== '' && password.trim() !== '');
  };

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${apiUrl}/login`, loginData);

      if (response.status === 200 && response.data.accessToken) {
        console.log('Inicio de sesión exitoso para el usuario:', response.data.user.email);
        console.log("token:", response.data.accessToken);

        setToken(response.data.accessToken);
        localStorage.setItem('jwtToken', response.data.accessToken);
        window.location.href = '/dashboard';
      } else {
        console.error('Error en el inicio de sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert("no existe esa cuenta")
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className='Main_box'>
        <div className='header'>
          <NavLink to='/inicio' className='btn_offborder arrow_position'>
            ←
          </NavLink>
          <p className='title_login'>Iniciar sesión</p>
        </div>
        <div className='box_login'>
          <p className='margenes_Abajo'>Nombre de usuario o E-mail:</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} onBlur={checkFormCompleteness} className="inputs_tamaño margenes_Abajo"/>
          <p className='margenes_Abajo'>Contraseña:</p>
          <div className="password_input">
            <input id='input_password' type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} onBlur={checkFormCompleteness} className="inputs_tamaño margenes_Abajo"/>
            <button type="button" id='btn_mostar_password' onClick={togglePasswordVisibility}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          <div className='box_btn_login_forgotpassword'>
            <button onClick={handleLogin} className={`btn_ margenes_Abajo ${isFormComplete ? 'btn_complete' : ''}`}>
              Iniciar sesión
            </button>
            <NavLink to='/Recuperarcontraseña' className='btn_offborder'>
              ¿Olvidaste tu contraseña?
            </NavLink>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Login;