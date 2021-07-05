import React, { useState } from "react";
import Button from "../button/Button";

import { NavigationProps } from "./Navigation";

interface NavigationMobileProps extends NavigationProps {}

const NavigationMobile = ({
  navItems = [],
  className = "",
}: NavigationMobileProps) => {
  const [active, setActive] = useState<Boolean>(false);

  return (
    <div
      className={`c-navigation-mobile h-mr-2 ${className} ${
        active ? "-active" : ""
      }`}
    >
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="c-navigation-mobile-button"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className={`c-navigation-mobile-dropdown h-ml-4 h-mr-4 h-bg-secondary`}
      >
        <div className="d-flex flex-column align-items-center h-pl-3 h-pr-3 h-pt-3 h-pb-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              className={`c-navigation-mobile-link text-center w-100 h-pt-4 h-pb-4 h-color-white`}
              href={item.href}
            >
              <strong>{item.title}</strong>
            </a>
          ))}

          {/* <div className="h-ml-2 h-mr-20"> */}
          <div className="c-navigation-mobile-br h-bg-shade-2 w-100" />
          {/* </div> */}

          <a
            href="/"
            className="c-navigation-mobile-link text-center w-100 h-pt-4 h-pb-4 h-color-white"
          >
            <strong>Login</strong>
          </a>

          <a className="w-100" href="/">
            <Button size="sm" text="Sign Up" />
          </a>
        </div>
      </div>

      {/* {navItems.map((item, index) => (
        <a
          className={`c-navigation-link ${
            index + 1 !== navItems.length ? "h-mr-7" : ""
          }`}
          href={item.href}
        >
          <strong>{item.title}</strong>
        </a>
      ))} */}
    </div>
  );
};

export default NavigationMobile;
