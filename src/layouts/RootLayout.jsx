import { NavLink, Outlet } from "react-router-dom";
import "./rootLayout.css";
import logo from "../img/wn-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";
import { useState } from "react";

function RootLayout() {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="RootLayout">
      <header className="header-container">
        <div className="header-box">
          <div className="img-box">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav-box">
            <NavLink className="nav_style" to="/">
              Home
            </NavLink>
            <NavLink className="nav_style" to="about">
              About
            </NavLink>
            <NavLink className="nav_style" to="fleet/all">
              Fleet
            </NavLink>
            <NavLink className="nav_style" to="contact">
              Contact
            </NavLink>
          </nav>
          <div className="burger-container">
            <button className="burger-menu" onClick={handleClick}>
              <AiOutlineMenu />
            </button>
            <nav className={isClick ? "mobile-menu" : "mobile-menu slide-menu"}>
              <button className="burger-menu close-btn" onClick={handleClick}>
                <CgCloseR />
              </button>
              <NavLink className="nav_style" to="/" onClick={handleClick}>
                Home
              </NavLink>
              <NavLink className="nav_style" to="about" onClick={handleClick}>
                About
              </NavLink>
              <NavLink
                className="nav_style"
                to="fleet/all"
                onClick={handleClick}
              >
                Fleet
              </NavLink>
              <NavLink className="nav_style" to="contact" onClick={handleClick}>
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
