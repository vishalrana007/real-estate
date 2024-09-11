import React from "react";
import "./Services.css"; // Import the CSS file

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="text-center section-header">
          <h2 className="services-title">Our Services</h2>
          <h1 className="services-heading">Lorem Ipsum Lorem Ipsum</h1>
          <p className="services-description">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg">
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m-4 16l4-4m-4 4H7m7-12H5m0 0L8 4m-3 4l5 5m-5-5H4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="service-title">Buy a New Home</h3>
            <p className="service-description">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 16h10m0 4H7m-5-4a9 9 0 0118 0m-9-9a9 9 0 110 18z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="service-title">Sell a House</h3>
            <p className="service-description">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="icon-container">
              <div className="icon-bg">
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16M4 12h16m-8-8h8m-8 16h8"
                  />
                </svg>
              </div>
            </div>
            <h3 className="service-title">Rent a House</h3>
            <p className="service-description">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
