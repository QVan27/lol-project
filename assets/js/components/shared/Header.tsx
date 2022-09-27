import React, { FunctionComponent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ABOUT, HOME } from "../../constants/route-paths";

const Header: FunctionComponent = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <nav>
        <Link className="nav-link" to={HOME}>
          home
        </Link>
        <Link className="nav-link" to={ABOUT}>
          about
        </Link>
      </nav>
    </header>
  );
};

export default Header;
