import { NavLink } from "react-router-dom";

const NavbarElement = ({ text, route, icon, isActive, onClick }) => {
  return (
    <>
      <NavLink to={`/dashboard/${route}`} isActive={() => isActive} onClick={onClick}>
        <div className={`navbar__element ${isActive ? "active" : ""}`}>
          <img src={icon} alt="Icono" />
          <p className="navbar__text">{text}</p>
        </div>
      </NavLink>
    </>
  );
}


export default NavbarElement;
