"use client";
import React from "react";
import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_35.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Service Details",
// };

const services = [
  {
    name: "Recruitment",
    details: [
      {
        name: "Full-Cycle Recruitment",
        details: `
          <div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Comprehensive Hiring Solutions</h3>
            <p>We manage the entire hiring process, from sourcing to onboarding, ensuring you get the right talent while reducing time-to-hire and hiring costs.</p>
            <p>Our process includes workforce planning, job profiling, targeted sourcing, competency-based screening, interview coordination, and seamless onboarding support.</p>
          </div>`,
      },
      {
        name: "Contract & Permanent Staffing",
        details: `
          <div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Flexible Staffing Solutions</h3>
            <p>We provide tailored staffing solutions, whether temporary, contract, or full-time, ensuring access to top professionals aligned with your business goals.</p>
          </div>`,
      },
      {
        name: "Executive Search & Leadership Hiring",
        details: `
          <div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Strategic Leadership Recruitment</h3>
            <p>Identifying top industry leaders for critical roles through market intelligence and deep talent networks.</p>
          </div>`,
      },
      {
        name: "Industry-Specific Talent Acquisition",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
        <h3>Specialized Hiring Solutions</h3>
        <p>Specialized hiring solutions for IT, healthcare, finance, and more, ensuring you get the right professionals for your industry.</p>
        <p>Our recruiters leverage deep domain knowledge and cutting-edge technology to match candidates with the right expertise to your business needs.</p>
      </div>`,
      },
      {
        name: "Global Talent Access",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
          <h3>International Hiring Solutions</h3>
          <p>Expand beyond local hiring constraints with cross-border recruitment, compliance management, and remote workforce integration.</p>
          <p>Our international hiring framework ensures compliance with regional labor laws and provides a seamless experience for employers and candidates alike.</p>
        </div>`,
      },
    ],
  },
  {
    name: "Business Excellence",
    details: [
      {
        name: "PMO Setup & Governance",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Efficient Project Management</h3>
            <p>Implementing structured project management frameworks for efficiency and scalability.</p>
            <p>Our services include portfolio management, governance frameworks, stakeholder alignment, and execution oversight to ensure smooth project execution.</p>
          </div>`,
      },
      {
        name: "Agile & Scaled Agile Execution",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Agile Transformation</h3>
            <p>Driving flexibility and adaptability in project delivery using Agile, SAFe, and Scrum methodologies.</p>
            <p>We help organizations transition to Agile ways of working, implement SAFe frameworks, and optimize delivery pipelines.</p>
          </div>`,
      },
      {
        name: "Resource & Budget Optimization",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Optimized Resource Allocation</h3>
            <p>Ensuring projects are delivered efficiently with the right resource allocation and budget control.</p>
            <p>Our approach includes demand forecasting, cost-benefit analysis, and lean budgeting to maximize value delivery.</p>
          </div>`,
      },
      {
        name: "Risk & Compliance Management",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Proactive Risk Management</h3>
            <p>Proactively identifying and mitigating project risks for smooth execution.</p>
            <p>Our risk management solutions help organizations foresee potential challenges, implement mitigation strategies, and maintain regulatory compliance.</p>
          </div>`,
      },
      {
        name: "KPI & Performance Tracking",
        details: `<div className="details-meta ps-xxl-5 ps-xl-3">
            <h3>Data-Driven Performance Metrics</h3>
            <p>Data-driven insights for continuous improvement and project success.</p>
            <p>We establish performance metrics, set up dashboards, and analyze key performance indicators (KPIs) to ensure strategic goals are met effectively.</p>
          </div>`,
      },
    ],
  },
];

const ServiceDetailsPage = ({ params }: any) => {
  const service = services.find(
    (x) =>
      x.name.toLowerCase().replaceAll(" ", "-") == params?.pagename?.toString()
  );
  // console.log(params?.pagename?.toString());
  // console.log(service);
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title={`${service?.name}`}
        subtitle="Offering solutions & services to address a spectrum of financial issues"
        page="Services"
        shape={shape}
        bg_img={service_bg}
        style_2={true}
        cls="me-xl-4"
      />
      {/* breadcrumb end */}

      {/* service details area start */}
      <ServiceDetailsArea service={service} />
      {/* service details area end */}

      {/* fancy banner three start */}
      {/* <FancyBannerThree /> */}
      {/* fancy banner three end */}

      {/* news letter start */}
      {/* <NewsletterBanner /> */}
      {/* news letter end */}
    </main>
  );
};

export default ServiceDetailsPage;
