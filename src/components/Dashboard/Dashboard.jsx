import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  // ...
  return (
    <>
      <h1>Hola estas en la dashboard</h1>
      <div>
        <ul>
          <li>
            <Link to={`home`}>Inicio</Link>
          </li>
          <li>
            <Link to={`search`}>Buscar</Link>
          </li>
          <li>
            <Link to={`profile`}>Perfil</Link>
          </li>
          <li>
            <Link to={`friends`}>Amigos</Link>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
