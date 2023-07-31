import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import './estilo.css';

function Cuenta({ email }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameAvailable, setIsNameAvailable] = useState(true);
  const { setToken } = useAuth();
  const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

  const checkFormCompleteness = () => {
    setIsFormComplete(name.trim() !== '' && password.trim() !== '' && isPasswordValid && isNameAvailable);
  };

  const handleRegister = async () => {
    const registerData = {
      email: email,
      user: name,
      password: password
    };
    console.log('Datos de registro enviados al backend:', registerData); // console.log para ver los datos que se enviarán al backend.

    try {
      const response = await axios.post(`${apiUrl}/register`, registerData);

      if (response.status === 200 && response.data.accessToken) {
        console.log('Registro exitoso para el usuario:', response.data.user.name);
        console.log("token:", response.data.accessToken);

        setToken(response.data.accessToken);
        window.location.href = '/dashboard';
      } else {
        console.error('Error en el registro:', response.data.message);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 8);
  };

  const handleNameChange = async (e) => {
    const newName = e.target.value;
    setName(newName);
  
    try {
      const response = await axios.post(`${apiUrl}/flow/checkUsernameAvailability`, { name: newName });/* ruta posible error */
  
      setIsNameAvailable(response.data.available);
    } catch (error) {
      console.error('Error al verificar disponibilidad del nombre:', error);
      
    }
  };
  
  return (
    <>
      <div className='Main_box'>
        <div className='header'>
          <button className='btn_offborder btn_pages'>←</button>
          <p>Registro de cuenta</p>
        </div>
        <div className='box_login'>
          <p>Nombre:</p>
          <input
            type="text"
            onChange={handleNameChange}
            onBlur={checkFormCompleteness}
            style={{ borderColor: isNameAvailable ? (isFormComplete ? '#ccc' : '#ccc') : 'red' }}
          />
          {!isNameAvailable && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              El nombre de usuario ya está registrado.
            </p>
          )}
          <p>Contraseña:</p>
          <div className="password-input">
            <input
              id='input_password'
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              onBlur={checkFormCompleteness}
              style={{ borderColor: isPasswordValid ? (isFormComplete ? '#ccc' : '#ccc') : 'red' }}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
          {!isPasswordValid && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              La contraseña debe tener al menos 8 caracteres.
            </p>
          )}
          <NavLink to='/dashboard/home' className='btn_continue'>
            <button onClick={handleRegister} className={`btn_ ${isFormComplete ? 'btn_complete' : ''}`}>
            Continuar
            </button>   
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Cuenta;