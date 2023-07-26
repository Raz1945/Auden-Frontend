// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Search from '../components/Search/Search';
import Home from '../components/Home/Home';
import CupidoMusical from '../components/CupidoMusical/CupidoMusical';
import MusicaContextual from '../components/MusicaContextual/MusicaContextual';



const AppRoutes = createBrowserRouter([
    {
    //  Inicio
    path: '/',
    element: <h1>Auden</h1>
  },
  {
    //  Login
    path: '/login',
    element: <Login />
  },
  {
    //  Registro
    path: '/register',
    element: <Register />
  },
  {
    // Inicio
    path: '/dashboard',
    element: <Dashboard />,
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
        element: <h1>Perfil</h1>
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
]);

export default AppRoutes;
