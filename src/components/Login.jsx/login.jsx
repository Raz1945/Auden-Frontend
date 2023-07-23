import { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useAuth();
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const API_BACKEND_LOGIN = 'http://localhost:3005/api';

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${API_BACKEND_LOGIN}/login`, loginData);
      console.log('Login exitoso:', response.data);

      setToken(response.data.token); // Se guarda el token de acceso en el estado global de la aplicación
      setRedirectToDashboard(true); // Activar el estado de redirección
    } catch (error) {

      console.error('Error en el login:', error);
      alert('Error en el inicio de sesión. Por favor, verifica tus credenciales e intenta nuevamente.');
    }
  };

  if (redirectToDashboard) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1>Hola, estás en el Login</h1>
      <div>
        <Link to={`/home`}>Login</Link>
      </div>
      <div>
        <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </>
  );
}

export default Login;
