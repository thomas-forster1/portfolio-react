import React from "react";
import Button from "../button/Button";

const Banner = () => {
  return (
    <div
      className="
    c-banner 
    h-pt-18 
    h-pt-md-10 
    h-pb-16
    h-pb-md-12
    "
    >
      <h2 className="t-header text-center h-color-white h-mb-5">
        Boost your links today
      </h2>
      <div className="d-flex justify-content-center ">
        <a href="/">
          <Button text="Set Started" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
