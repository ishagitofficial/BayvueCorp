import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_26.svg";
import ServiceOneArea from "@/components/services/service-v1-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "Service Page",
};

const ServicePage = () => {
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title="Our offerings & Services"
        subtitle="Unlock your business growth potential with expert-driven hiring solutions and operational excellence"
        page="Services"
        shape={shape}
        bg_img={service_bg}
        style_2={true}
        cls="me-xxl-4 me-lg-5"
      />
      {/* breadcrumb end */}

      {/* service v1 area start */}
      <ServiceOneArea />
      {/* service v1 area end */}

      {/* fancy banner three start */}
      {/* <FancyBannerThree /> */}
      {/* fancy banner three end */}

      {/* news letter start */}
      {/* <NewsletterBanner /> */}
      {/* news letter end */}
    </main>
  );
};

export default ServicePage;
