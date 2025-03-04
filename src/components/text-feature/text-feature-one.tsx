import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";

// card item
function CardItem({
  icon,
  title,
  desc,
}: {
  icon: StaticImageData;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20">
      <Image src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <h4 className="fw-bold mb-20">{title}</h4>
        <p> {desc} </p>
      </div>
    </div>
  );
}

function CounterBlock({
  num,
  text,
  title,
  delay,
}: {
  num: number;
  text: string;
  title: string;
  delay: string;
}) {
  return (
    <div className="col-md-3 col-6">
      <div
        className="counter-block-two text-center text-md-start mt-35 wow fadeInUp"
        data-wow-delay={`0.${delay}s`}
      >
        <div className="main-count fw-500">
          <span className="counter">{num}</span>
          {text}
        </div>
        <p className="m0 text-md">{title}</p>
      </div>
    </div>
  );
}

const TextFeatureOne = () => {
  return (
    <>
      <div className="text-feature-one mt-150 lg-mt-80">
        <div className="container">
          <div className="line-wrapper position-relative">
            <div className="row">
              <div className="col-lg-5 wow fadeInLeft pt-40">
                <div className="title-one">
                  <div className="upper-title">About us</div>
                  <h2>15k+ Client using Our Services.</h2>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                  At Bayvue Corp, we specialize in connecting businesses with
                  exceptional talent while driving operational excellence. As a
                  trusted partner in hiring solutions and business process
                  optimization, we help companies scale efficiently with
                  strategic recruitment and PMO expertise.
                </p>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                  With a deep understanding of industry trends, technology, and
                  workforce dynamics, we streamline the hiring process, ensuring
                  fast, cost-effective, and high-quality placements. Whether
                  you're looking for top professionals in IT, healthcare,
                  finance, or executive roles, we deliver talent that fuels
                  business growth.
                </p>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                  Beyond recruitment, our PMO and operations excellence services
                  enable organizations to enhance project execution, governance,
                  and process efficiency, helping them stay ahead in a
                  competitive landscape.
                </p>
                <Link
                  href="/contact-us"
                  className="btn-three icon-link mt-15 md-mb-40"
                >
                  <span>Request a Callback</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-1" />
                </Link>
              </div>
              <div className="col-lg-6 ms-auto wow fadeInRight">
                <CardItem
                  icon={icon_2}
                  title="Our Mission"
                  desc="Our mission is to empower businesses with exceptional talent and optimized operations through strategic hiring solutions and scalable PMO frameworks. We connect organizations with top professionals to drive growth and innovation while implementing structured project management to enhance governance, resource efficiency, and execution. Leveraging expertise, technology, and industry insights, we enable businesses to scale, adapt, and thrive in a dynamic market."
                />
                <CardItem
                  icon={icon_3}
                  title="Our company vision."
                  desc="To be the trusted global partner for businesses seeking exceptional talent and operational excellence, driving sustainable growth through innovative hiring solutions and structured PMO processes. We envision a future where companies operate with efficiency, agility, and top-tier professionals, enabling them to achieve unparalleled success in a competitive market."
                />
              </div>
            </div>
            <Image
              src={shape}
              alt="shape"
              className="lazy-img shapes shape_01"
            />
          </div>

          <div className="counter-wrapper mt-80 lg-mt-20">
            <div className="row">
              <CounterBlock
                num={120}
                text="+"
                title="Partner with us"
                delay="0"
              />
              <CounterBlock
                num={1.3}
                text="b+"
                title="Cumulative trading volume"
                delay="1"
              />
              <CounterBlock
                num={705}
                text="k"
                title="Successful Projects"
                delay="2"
              />
              <CounterBlock
                num={1.2}
                text="%"
                title="Low interest rate"
                delay="3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFeatureOne;
