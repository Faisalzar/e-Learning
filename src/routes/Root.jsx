import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar bg-primary text-light mb-4">
        <div className="navbar-logo">
          <a className="navbar-brand">
            <span className="logo">FZ</span> Education
          </a>
          <button
            className="navbar-toggler btn btn-sm btn-close-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>
        <div className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav me-auto">
            <NavLink
              to={`/home/`}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Home
            </NavLink>
            <NavLink
              to={`about`}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              About
            </NavLink>
            <NavLink
              to={`/contact/`}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={`/Login/`}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Login
            </NavLink>
            <NavLink
              to={`/Register/`}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              Register
            </NavLink>
          </ul>
        </div>
      </nav>
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }>
          <NavLink to={`/home/`}>
            Home
          </NavLink>
        </li>
        <li className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }>
          <NavLink to={`about`}>
            About
          </NavLink>
        </li>
        <li className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }>
          <NavLink to={`/contact/`}>
            Contact
          </NavLink>
        </li>
        <li className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }>
          <NavLink to={`/Login/`}>
            Login
          </NavLink>
        </li>
        <li className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }>
          <NavLink to={`/Register/`}>
            Register
          </NavLink>
        </li>
      </div>
      <Outlet />
    </>
  );
}
