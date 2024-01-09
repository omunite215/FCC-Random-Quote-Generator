import React from "react";
import quote from "../assets/logo.png";

const Navbar = ({ color }) => {
  return (
    <nav className="navbar bg-body-secondary">
      <div className="container">
        <div className="navbar-brand mb-0 h1 d-inline-flex align-items-center p-1 fs-3">
          <div className={`bg-${color} rounded p-2 m-2`}>
            <img
              src={quote}
              alt="Logo"
              width="34"
              height="34"
              className="d-inline-block align-text-top rotate-bottom"
            />
          </div>
          <p className={` fw-bold my-auto text-${color} `}>
            The<em>&nbsp;"Quote"&nbsp;</em>Machine
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
