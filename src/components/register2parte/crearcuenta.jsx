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
  const handleNameChange = async (e) => {
    const newName = e.target.value;
    setName(newName);
  
    try {
      const response = await axios.post(`${apiUrl}/checkUsernameAvailability`, { name: newName });/* ruta posible error */
  
      setIsNameAvailable(response.data.available);
    } catch (error) {
      console.error('Error al verificar disponibilidad del nombre:', error);
      
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
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    console.log('Checkbox is now ' + (!isChecked ? 'checked' : 'unchecked'));
  };


  return (
    <>
      <div className='Main_box_3'>
        <div className='title_4'>
            <NavLink to='/inicio' className='arrow_position_3'>
              ←
            </NavLink>
          <p className='title_crearcuenta_1'>Crear Cuenta</p>
        </div>
        <p className='title_main_1'>Ingresa un nombre de usuario y contraseña.</p>
        <div className='box_login'>
          <p>Nombre:</p>
          <input
            type="text"
            className='inputs_tamaño_3'
            onBlur={checkFormCompleteness}
            onChange={handleNameChange}
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
              className='inputs_tamaño_3'
              type={showPassword ? "text" : "password"}
              onChange={handlePasswordChange}
              onBlur={checkFormCompleteness}
              style={{ borderColor: isPasswordValid ? (isFormComplete ? '#ccc' : '#ccc') : 'red' }}
            />
            <button type="button" className='btn_mostar_password_2_box' onClick={togglePasswordVisibility}>
              {showPassword ?  <img src="/icons/small/others/ocultarcontrasena.svg" alt="" /> : <img src="/icons/small/others/mostrarcontrasena.svg" alt="" />}
            </button>
          </div>
          {!isPasswordValid && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              La contraseña debe tener al menos 8 caracteres.
            </p>
          )}
          <div className='box_checkbox'>
            <label>
              <input type="checkbox" className='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
              <img src="/icons/small/others/chekbox_sincheck.svg" alt="" />
            </label>
            <div className='text_terminosYcondiciones'>
              <p>He leído y acepto los</p>
              <p className='title_orange'>Términos</p>
              <p>y</p>
              <p className='title_orange'>Condiciones.</p>
            </div>
            
          </div>
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