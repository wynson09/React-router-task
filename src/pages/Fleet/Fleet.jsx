import { NavLink, Outlet } from "react-router-dom";
import "./fleet.css";
import { useState } from "react";
import TransitionEffect from "../Transition/TransitionEffect";

function Fleet() {
  const [isClick, setIsClick] = useState(1);
  const handleClick = (value) => {
    setIsClick(value);
  };
  return (
    <section className="fleet-container">
      <TransitionEffect />
      <h2>Our Fleet</h2>
      <div className="text-box">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          repudiandae dolorum nesciunt porro inventore sed quisquam excepturi
          deleniti voluptas atque repellendus ullam libero itaque quam eum
          dignissimos magni, reprehenderit perferendis.
        </p>
      </div>

      <nav className="nav-container">
        <NavLink
          className={isClick === 1 ? "fleet-btn-click" : "fleet-btn"}
          to="all"
          onClick={() => handleClick(1)}
        >
          All Fleets
        </NavLink>
        <NavLink
          className={isClick === 2 ? "fleet-btn-click" : "fleet-btn"}
          to="five-seater"
          onClick={() => handleClick(2)}
        >
          5 Seaters
        </NavLink>
        <NavLink
          className={isClick === 3 ? "fleet-btn-click" : "fleet-btn"}
          to="seven-seater"
          onClick={() => handleClick(3)}
        >
          7 Seaters
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default Fleet;
