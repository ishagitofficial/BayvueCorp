import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import about_bg from "@/assets/images/media/img_26.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_25.svg";
import TextFeatureOne from "@/components/text-feature/text-feature-one";
import BlockFeatureOne from "@/components/block-feature/block-feature-one";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import FeedbackOne from "@/components/feedback/feedback-one";
import PartnersSliderOne from "@/components/partners/partners-slider-one";
import TeamSectionThree from "@/components/team/team-section-three";
import HomeFourBlogs from "@/components/blogs/home-4-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "About Us Page",
};

const AboutUsPage = () => {
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title="We’r top rated company"
        subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
        page="About Us"
        bg_img={about_bg}
        shape={shape}
        style_2={true}
      />
      {/* breadcrumb end */}

      {/* text feature one area start */}
      <TextFeatureOne />
      {/* text feature one area end */}

      {/* block feature one area start */}
      {/* <BlockFeatureOne style_2={true} /> */}
      {/* block feature one area end */}

      {/* text feature one area start */}
      {/* <TextFeatureThree style_2={true} /> */}
      {/* text feature one area end */}

      {/* feedback one start */}
      {/* <FeedbackOne cls="top-border pt-80 pb-80" /> */}
      {/* feedback one end */}

      {/* partner logo start */}
      {/* <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
        <div className="container">
          <PartnersSliderOne />
        </div>
      </div> */}
      {/* partner logo end */}

      {/* team three start */}
      {/* <TeamSectionThree /> */}
      {/* team three end */}

      {/* blogs start */}
      {/* <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" /> */}
      {/* blogs end */}

      {/* fancy banner three start */}
      {/* <FancyBannerThree /> */}
      {/* fancy banner three end */}

      {/* news letter start */}
      {/* <NewsletterBanner /> */}
      {/* news letter end */}
    </main>
  );
};

export default AboutUsPage;
