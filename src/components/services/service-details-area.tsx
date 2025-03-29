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
        href={`#${title.replaceAll(" ", "-")}`}
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
            {service?.details?.map((x: any, index: any) => {
              return (
                <div
                  className="details-meta ps-xxl-5 ps-xl-3"
                  id={`${x.name.replaceAll(" ", "-")}`}
                  dangerouslySetInnerHTML={{ __html: x.details }}
                ></div>
              );
            })}
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
              {/* <div className="contact-banner text-center mt-40 lg-mt-20">
                <h3 className="mb-20">Any Questions? Let’s talk</h3>
                <Link href="/contact" className="tran3s fw-500">
                  Let’s Talk
                </Link>
              </div> */}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
