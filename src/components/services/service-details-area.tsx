import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import service_img from "@/assets/images/media/img_35.jpg";
import icon_1 from "@/assets/images/icon/icon_72.svg";
import icon_2 from "@/assets/images/icon/icon_73.svg";
import icon_3 from "@/assets/images/icon/icon_74.svg";
import icon_4 from "@/assets/images/icon/icon_75.svg";
import icon_5 from "@/assets/images/icon/icon_76.svg";
import icon_6 from "@/assets/images/icon/icon_77.svg";
import icon_7 from "@/assets/images/icon/icon_78.svg";
import icon_8 from "@/assets/images/icon/icon_79.svg";
import icon_9 from "@/assets/images/icon/icon_80.svg";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import icon_11 from "@/assets/images/icon/icon_82.svg";
import icon_12 from "@/assets/images/icon/icon_83.svg";
import icon_13 from "@/assets/images/icon/icon_84.svg";
import ils_icon from "@/assets/images/assets/ils_03.svg";

// ServiceNav
function ServiceNav({
  icon,
  title,
  active,
}: {
  icon?: StaticImageData;
  title: string;
  active?: boolean;
}) {
  return (
    <li>
      <Link
        href="#"
        className={`d-flex align-items-center w-100 ${active ? "active" : ""}`}
      >
        {icon && <Image src={icon} alt="icon" className="lazy-img" />}
        <span>{title}</span>
      </Link>
    </li>
  );
}
// CardItem
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon?: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        {icon && <Image src={icon} alt="icon" className="lazy-img" />}
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const ServiceDetailsArea = ({ service }: any) => {
  return (
    <div className="service-details mt-100 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Comprehensive Hiring Solutions</h2>
              <p>
                We manage the entire hiring process, from sourcing to
                onboarding, ensuring you get the right talent while reducing
                time-to-hire and hiring costs.
              </p>
              <p>
                Our process includes workforce planning, job profiling, targeted
                sourcing, competency-based screening, interview coordination,
                and seamless onboarding support.
              </p>
              <div className="img-meta mb-60 lg-mb-40">
                {/* <Image
                  src="/images/recruitment.jpg"
                  alt="Recruitment Process"
                  className="lazy-img w-100 rounded-4"
                /> */}
              </div>
              <h3>Our Processing</h3>
              <p>
                We follow a structured approach to hiring that ensures
                efficiency and quality.
              </p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      title="Collect Requirements"
                      subtitle="Understanding your hiring needs & gathering job specifications."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      title="Screening & Selection"
                      subtitle="Shortlisting candidates through rigorous evaluation."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      title="Final Hiring"
                      subtitle="Ensuring smooth onboarding & compliance management."
                    />
                  </div>
                </div>
              </div>
              <h3>Qualifications & Requirements</h3>
              <ul className="style-none list-item pb-20">
                <li>Industry-specific experience preferred</li>
                <li>Strong communication & leadership skills</li>
                <li>Proven ability to work in a fast-paced environment</li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 order-lg-first">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                <ul className="style-none">
                  {service?.details?.map((x: any, index: any) => {
                    return <ServiceNav key={x.name} title={x.name} />;
                  })}
                  {/* <ServiceNav
                    icon={icon_1}
                    title="Multiple Accounts"
                    active={true}
                  />
                  <ServiceNav icon={icon_2} title="Loan Facility" />
                  <ServiceNav icon={icon_3} title="Expense Track" />
                  <ServiceNav icon={icon_4} title="DPS & FDR" />
                  <ServiceNav icon={icon_5} title="International Account" />
                  <ServiceNav icon={icon_6} title="Saving Account" />
                  <ServiceNav icon={icon_7} title="Agent Banking" />
                  <ServiceNav icon={icon_8} title="Credit & Debit Cards" />
                  <ServiceNav icon={icon_9} title="Consultation" /> */}
                </ul>
              </div>
              <div className="contact-banner text-center mt-40 lg-mt-20">
                <h3 className="mb-20">Any Questions? Let’s talk</h3>
                <Link href="/contact" className="tran3s fw-500">
                  Let’s Talk
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
