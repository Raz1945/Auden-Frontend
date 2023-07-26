import './styles.css';
import { useState, useEffect } from "react";
import { smIcons } from '../../../assets/icons';
import { useLocation } from "react-router-dom";
import NavbarElement from "./Navbar.element";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Aquí actualizamos el estado `activeIcon` cuando la ruta cambie
    switch (location.pathname) {
      case "/dashboard/home":
        setActiveIcon(smIcons.home.active);
        break;
      case "/dashboard/search":
        setActiveIcon(smIcons.search.active);
        break;
      case "/dashboard/profile":
        setActiveIcon(smIcons.user.active);
        break;
      case "/dashboard/friends":
        setActiveIcon(smIcons.friends.active);
        break;
      default:
        setActiveIcon(null); // Si la ruta no coincide, desactivamos todos los iconos
    }
  }, [location]);

  return (
    <nav className='navbar-container'>
      <NavbarElement
        route={"home"}
        text={"Inicio"}
        icon={activeIcon === smIcons.home.active ? smIcons.home.active : smIcons.home.inactive}
        onClick={() => setActiveIcon(smIcons.home.active)}
      />
      <NavbarElement
        route={"search"}
        text={"Buscar"}
        icon={activeIcon === smIcons.search.active ? smIcons.search.active : smIcons.search.inactive}
        onClick={() => setActiveIcon(smIcons.search.active)}
      />
      <NavbarElement
        route={"profile"}
        text={"Perfil"}
        icon={activeIcon === smIcons.user.active ? smIcons.user.active : smIcons.user.inactive}
        onClick={() => setActiveIcon(smIcons.user.active)}
      />
      <NavbarElement
        route={"friends"}
        text={"Amigos"}
        icon={activeIcon === smIcons.friends.active ? smIcons.friends.active : smIcons.friends.inactive}
        onClick={() => setActiveIcon(smIcons.friends.active)}
      />
    </nav>
  );
}

export default Navbar;
