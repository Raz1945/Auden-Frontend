import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './estilo.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado para controlar la visibilidad de la contraseña
  const { setToken } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${apiUrl}/login`, loginData);

      if (response.status === 200 && response.data.accessToken) {
        console.log('Inicio de sesión exitoso para el usuario:', response.data.user.email);
        console.log("token:", response.data.accessToken) //! VER 

        // Se guarda el token de acceso en el estado global de la aplicación
        setToken(response.data.accessToken);

        // Redirige al usuario a la Home ('dashboard') si el inicio de sesión fue exitoso. 
        // ? Cambiar por redirect
        window.location.href = '/dashboard';
      } else {
        console.error('Error en el inicio de sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };
  
  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className='Main_box'>
        <div className='header'>
          <button className='btn_offborder btn_pages'>←</button>
          <p>Iniciar sesión</p>
        </div>
        <div className='box_login'>
          <p>Nombre de usuario o E-mail:</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p>Contraseña:</p>
          <div className="password-input">
            <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "O" : "M"}
            </button>
          </div>
          <button onClick={handleLogin} className='btn_login'>Iniciar sesión</button>
          <button type="submit" className='btn_offborder'>¿Olvidaste tu contraseña?</button>
        </div>
      </div>
    </>
  );
}

export default Login;