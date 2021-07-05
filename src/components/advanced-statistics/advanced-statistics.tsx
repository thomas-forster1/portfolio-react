import React from "react";

import statistics from "./../../config/statistics";

const AdvancedStatistics = () => {
  return (
    <div
      className="c-advanced-statistics
   h-bg-light
   h-pt-0
     h-pt-md-10"
    >
      <div className="container">
        <h2
          data-aos-offset="0"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className="t-header text-center h-mb-3 h-mb-md-2 h-color-shade-3"
        >
          Advanced Statistics
        </h2>
        <p
          data-aos-offset="0"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className="t-body text-center h-pb-16 h-color-shade-2"
        >
          Track how your links are performing across the web with
          <br className="d-none d-md-block" /> our advanced statistics
          dashboard.
        </p>

        <div className="c-advanced-statistics-cards d-flex flex-column flex-md-row align-items-center align-items-md-start">
          {statistics.map((item, index) => (
            <div
              data-aos-offset="0"
              data-aos="fade-up"
              data-aos-delay={index * 250}
              data-aos-duration="500"
              data-aos-once="true"
              key={index}
              className="c-card"
            >
              <div
                data-aos-offset="0"
                data-aos="fade-up"
                data-aos-delay={index * 350}
                data-aos-duration="500"
                data-aos-once="true"
                className="c-advanced-statistics-cards-br"
              ></div>

              <div className="c-card-badge d-flex justify-content-center align-items-center">
                <img src={`/img/svg/${item.icon}`} alt={item.title} />
              </div>
              <div className="c-card-title text-center text-md-left h-mb-3 h-color-shade-3">
                <strong>{item.title}</strong>
              </div>
              <div className="c-card-body text-center text-md-left h-color-shade-2">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
