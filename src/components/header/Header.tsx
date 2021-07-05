import React from "react";
import Button from "./../button/Button";

import { headerNavigation } from "./../../config/navigation";
import Navigation from "./../header/Navigation";
import NavigationMobile from "./../header/NavigationMobile";

const Header = () => {
  return (
    <header className="c-header position-relative">
      <div className="container h-100 position-relative">
        <div className="d-flex justify-content-between align-items-center h-100">
          <div className="d-flex">
            <img
              src="/img/svg/logo.svg"
              alt="logo"
              className="c-header-logo h-mr-9"
            />

            {/* Desktop  */}
            <Navigation
              className="d-none d-lg-block"
              navItems={headerNavigation}
            />
          </div>
          <div className="d-flex align-items-center">
            {/* Desktop  */}
            <a href="/" className="c-navigation-link d-none d-lg-block">
              <strong>Login</strong>
            </a>
            {/* Desktop  */}
            <a href="/" className="d-none d-lg-block">
              <Button className="h-ml-8" size="sm" text="Sign Up" />
            </a>
            {/* Mobile  */}
            <NavigationMobile
              className="d-block d-lg-none"
              navItems={headerNavigation}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
