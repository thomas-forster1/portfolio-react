import React from "react";

import { footerNavigation } from "./../../config/navigation";
import social from "./../../config/social";

const Footer = () => {
  return (
    <footer
      className="
    c-footer 
    h-pt-11 
    h-pt-md-14 
    h-pb-14
    "
    >
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div
            className="
          d-flex 
          justify-content-center 
          justify-content-md-start
          h-mb-10 h-mb-md-0
          "
          >
            <img
              src="/img/svg/logo_white.svg"
              alt="logo"
              className="c-footer-logo"
            />
          </div>
          <div className="d-flex flex-column flex-md-row">
            {footerNavigation.map((item, index) => (
              <div
                key={index}
                className="
              c-footer-col 
              h-mr-0
              h-mr-md-10
              h-mb-5
              h-mb-md-0
              "
              >
                <div className="c-footer-col-title h-mb-3 text-center text-md-left">
                  <strong>{item.header}</strong>
                </div>
                <ul>
                  {item.items.map((itm, index) => (
                    <li
                      key={itm.title}
                      className="h-mb-2 text-center text-md-left"
                    >
                      <a href={itm.href}>{itm.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="c-footer-col d-flex justify-content-center justify-content-md-start">
              {social.map((item, index) => (
                <div
                  key={item.title}
                  className={`c-footer-social ${
                    index + 1 !== social.length ? "h-mr-5" : ""
                  }`}
                >
                  <a href={item.href}>
                    <img
                      src={item.img_hover}
                      alt={item.title}
                      className={`-${item.title}`}
                    />
                    <img src={item.img} alt={item.title} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
