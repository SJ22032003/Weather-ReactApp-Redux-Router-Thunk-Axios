import React from "react";
import { FaHeart , FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="buttons">
          <div>
            <NavLink to="/" className="flex "><FaSun style={{fontSize:"35px"}} className="m-1"/><h1 className="text-xl m-2">Forecast</h1></NavLink>
          </div>
          <div>
          <NavLink to="/home">
            <button className="btn btn-primary m-2">Home</button>
          </NavLink>
          <NavLink to="/favourite">
            <button className="btn btn-secondary m-2">
              <FaHeart />
            </button>
          </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
