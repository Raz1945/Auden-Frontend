import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        console.log("respuesta", response.data.accessToken)

        console.log('Inicio de sesión exitoso para el usuario:', response.data.user.email);
        // Se guarda el token de acceso en el estado global de la aplicación
        setToken(response.data.accessToken);
        localStorage.setItem('jwtToken', response.data.accessToken); //* Solucion

        // Redirige al usuario a la Home ('dashboard/home') si el inicio de sesión fue exitoso. 
        window.location.href = '/dashboard/home'; // ? Cambiar por redirect
      } else {
        console.error('Error en el inicio de sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };
  

  return (
    <>
      <h1>Hola estas en el Login</h1>
      <div>
        <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </>
  )
}

export default Login;
