import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FaqArea from "@/components/faq/faq-area";
import FooterThree from "@/layout/footer/footer-three";

export const metadata: Metadata = {
  title: "Faq Page",
};

const FaqPage = () => {
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbTwo
        title="Questions & Answers"
        subtitle="Find out the all the question & answers you have about us"
        page="FAQ’s"
        style_4={true}
      />
      {/* breadcrumb end */}

      {/* faq area start */}
      <FaqArea />
      {/* faq area end */}
    </main>
  );
};

export default FaqPage;
