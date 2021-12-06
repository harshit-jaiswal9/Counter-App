import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="navbar-brand">
        <span
          className="badge badge-pill badge-info m-2" id="head1"
          style={{ width: 50, fontSize: "24px" }}
        >
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
