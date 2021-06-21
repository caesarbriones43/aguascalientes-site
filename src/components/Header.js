import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header animate__animated animate__fadeIn">
        <div className="logo-box">
          <img
            className="logo"
            src="https://res.cloudinary.com/cacafresca/image/upload/v1624251871/escudo-del-estado-de-aguascalientes-logo-82C7FC6ABE-seeklogo.com_nittev.png"
          />
        </div>
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">aguascalientes</span>
            <span class="heading-primary-sub">
              <span class="blink_me">&gt;</span>
              la tierra de la gente buena
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
