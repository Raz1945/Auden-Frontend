import { Outlet } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
import Navbar from '../Others/Navbar/Navbar';
import AppContainer from '../Others/AppContainer/AppContainer';

const Dashboard = () => {
  // ...
  // const { token } = useAuth();

  //* Solucion 
  const jwtToken = localStorage.getItem('jwtToken');
  (jwtToken == null) ? (window.location.href = '/login') : console.log("verificó el token")

  return (
    <>
      <AppContainer>
        <Outlet />
        <Navbar />
      </AppContainer>
    </>
  );
}

export default Dashboard;
