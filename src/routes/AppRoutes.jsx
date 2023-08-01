// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Search from '../components/Search/Search';
import Home from '../components/Home/Home';
import CupidoMusical from '../components/CupidoMusical/CupidoMusical';
import Profile from '../components/Profile/Profile';
import MusicaContextual from '../components/MusicaContextual/MusicaContextual';
import Inicio from '../components/inicio/inicio';
import Cuenta from '../components/register2parte/crearcuenta';
import RContrasena from '../components/olvidarContraseña/olvidarcontraseña';
import Configuration from '../components/Configuracion/Configuration';
import Playlist from '../components/Playlist/playlist';

const AppRoutes = createBrowserRouter([
    {
    //  *
    path: '/',
    element: <h1>Auden</h1>
  },
  {
    //  Inicio
    path: '/inicio',
    element: <Inicio />
  },
  {
    //  Login
    path: '/login',
    element: <Login />
  },
  {
    //  olvidar contraseña
    path: '/Recuperarcontraseña',
    element: <RContrasena />
  },
  {
    //  Registro
    path: '/register',
    element: <Register />
  },
  {
    //  Registro parte 2
    path: '/crearCuenta',
    element: <Cuenta />
  },

  {
    // ? Como hacer para mostrar esta pagina solo si esta logueado?
    // Inicio
    path: '/dashboard',
    element: <Root />,
    children: [
      {
        // Pagina de inicio
        path: 'home',
        element: <Home />
      },
      {// Buscador
        path: 'search',
        element: <Search />
      },
      {// Perfil
        path: 'profile',
        element: <Profile/> 
      },
      {// Amigos
        path: 'friends',
        element: <h1>Amigos</h1>
      },
    ]
    
  },
  {
    // Cupido Musical
    path: 'cupidoMusical',
    element: <CupidoMusical />
  },
  {// Musica Contextual
    path: 'musicaContextual',
    element: <MusicaContextual />
  },
  {// Configuración
    path: 'configuration',
    element: <Configuration/>
  },
  {// Playlist
    path: 'playlist',
    element: <Playlist />
  },
]);

export default AppRoutes;

