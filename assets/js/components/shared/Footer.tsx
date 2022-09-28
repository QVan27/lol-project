import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className="wrap">
        <p>Lol Trackers © {new Date().getFullYear()}. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
