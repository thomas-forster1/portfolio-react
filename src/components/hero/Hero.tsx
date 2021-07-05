import React from "react";
import Button from "./../button/Button";
import { isMobile } from "react-device-detect";

const Hero = () => {
  return (
    <div className="c-hero position-relative">
      <div className="container position-relative  d-flex flex-column-reverse flex-lg-column ">
        <div className="d-flex">
          <div>
            <div
              data-aos={isMobile ? "fade-up" : "fade-right"}
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="true"
              className="c-hero-title text-center text-md-left h-mb-3 h-mb-md-0"
            >
              <strong>
                More than just <br />
                shorter links
              </strong>
            </div>
            <div
              data-aos={isMobile ? "fade-up" : "fade-right"}
              data-aos-delay="750"
              data-aos-duration="1000"
              data-aos-once="true"
              className="c-hero-body h-mb-7 h-color-shade-2 text-center text-md-left"
            >
              Build your brand's recognition and get detailed{" "}
              <br className="d-none d-md-block" />
              insights on how your links are performing.
            </div>
            <a
              data-aos={isMobile ? "fade-up" : "fade-right"}
              data-aos-offset={0}
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-once="true"
              href="/"
              className="text-center d-block d-md-inline-block"
            >
              <Button text="Get Started" />
            </a>
          </div>
        </div>
        <div
          data-aos={isMobile ? "fade-up" : "fade-left"}
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-once="true"
          className="c-hero-image"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
