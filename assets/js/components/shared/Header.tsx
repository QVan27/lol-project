import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/route-paths";

const Header: FunctionComponent = () => {

  return (
    <header>
      <div className="wrap">
        <nav>
          <Link className="nav-link" to={HOME}>
            <div>
              <img src="./build/images/teemo.png" alt="" />
            </div>
            <span>LOL. Trackers</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
