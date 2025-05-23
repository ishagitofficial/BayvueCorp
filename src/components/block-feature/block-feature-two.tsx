import React from "react";
import Image from "next/image";
import icon_1 from "@/assets/images/icon/icon_10.svg";
import icon_2 from "@/assets/images/icon/icon_11.svg";
import service_data from "@/data/service-data";

const BlockFeatureTwo = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <div className="block-feature-two mt-0">
      <div className="container" style={{ maxWidth: 1250 }}>
        <div className="wrapper">
          <div className="row align-items-top">
            {service_items.map((item, index) => {
              return (
                <div
                  className={`${
                    index === 0
                      ? "col-md-4"
                      : index === 1
                      ? "col-md-4"
                      : "col-md-3"
                  }`}
                  key={item.id}
                >
                  <div
                    className={`${
                      index === 1
                        ? "border-line md-pt-30 pb-35 sm-pb-30 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3"
                        : ""
                    } card-style-three pt-45 md-pt-30 pb-35 sm-pb-30`}
                  >
                    <Image
                      src={item.icon}
                      alt="icon"
                      className="lazy-img icon"
                    />
                    <h4 className="fw-bold mt-40 sm-mt-20 mb-20">
                      {item.title}
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}

            <div className="col-md-4">
              <div className=" sm-pb-30 sm-pt-30">
                <div
                  className={`card-style-three pt-45 md-pt-30 pb-35 sm-pb-30`}
                >
                  <Image src={icon_2} alt="icon" className="lazy-img icon" />
                  <h4 className="fw-bold mt-40 sm-mt-20 mb-20">{"About Us"}</h4>
                  <p
                    style={{
                      fontWeight: "normal !important",
                      color: "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    At Bayvue Corp, we specialize in finding, attracting, and
                    securing the right talent to fuel your business success. Our
                    strategic recruitment solutions ensure that companies get
                    access to top-tier professionals efficiently and
                    cost-effectively. Whether you need IT specialists,
                    healthcare professionals, financial experts, or executive
                    leaders, our expert-driven approach delivers the best-fit
                    candidates for your organization.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                <Image src={icon_1} alt="icon" className="lazy-img icon" />
                <h4 className="fw-bold mt-40 sm-mt-20 mb-20">Our Mission</h4>
                <p>
                  Optimize expense tracking across platforms, & product lines
                  using multiple cards.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="border-line h-100 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
                <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                  <Image src={icon_2} alt="icon" className="lazy-img icon" />
                  <h4 className="fw-bold mt-40 sm-mt-20 mb-20">
                    Our company vision.
                  </h4>
                  <p>
                    Optimize expense tracking across platforms, & product lines
                    using multiple cards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ps-lg-5 sm-pb-30 sm-pt-30">
                <div className="numb fw-500">
                  <span className="counter">13</span>+
                </div>
                <p className="m0">
                  Years Experience <br /> with proud.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureTwo;
