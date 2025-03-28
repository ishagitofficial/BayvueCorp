"use client";
import React from "react";
import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Service Details",
// };

const services = [
  {
    name: "recruitment",
    details: [
      {
        name: "Full-Cycle Recruitment",
        details:
          "We manage the entire hiring process, from sourcing to onboarding, ensuring you get the right talent while reducing time-to-hire and hiring costs. Our process includes workforce planning, job profiling, targeted sourcing, competency-based screening, interview coordination, and seamless onboarding support.",
      },
      {
        name: "Contract & Permanent Staffing",
        details:
          "Flexible staffing solutions tailored to your needs, whether temporary, contract, or full-time employees. We ensure that you have access to the best professionals with skills aligned to your business goals and project requirements.",
      },
      {
        name: "Executive Search & Leadership Hiring",
        details:
          "Identifying top industry leaders for critical roles through market intelligence and deep talent networks. Our executive search approach is designed to find, attract, and place high-impact leaders who drive organizational success.",
      },
      {
        name: "Industry-Specific Talent Acquisition",
        details:
          "Specialized hiring solutions for IT, healthcare, finance, and more, ensuring you get the right professionals for your industry. Our recruiters leverage deep domain knowledge and cutting-edge technology to match candidates with the right expertise to your business needs.",
      },
      {
        name: "Global Talent Access",
        details:
          "Expand beyond local hiring constraints with cross-border recruitment, compliance management, and remote workforce integration. Our international hiring framework ensures compliance with regional labor laws and provides a seamless experience for employers and candidates alike.",
      },
    ],
  },
  {
    name: "business-excellence",
    details: [
      {
        name: "PMO Setup & Governance",
        details:
          "Implementing structured project management frameworks for efficiency and scalability. Our services include portfolio management, governance frameworks, stakeholder alignment, and execution oversight to ensure smooth project execution.",
      },
      {
        name: "Agile & Scaled Agile Execution",
        details:
          "Driving flexibility and adaptability in project delivery using Agile, SAFe, and Scrum methodologies. We help organizations transition to Agile ways of working, implement SAFe frameworks, and optimize delivery pipelines.",
      },
      {
        name: "Resource & Budget Optimization",
        details:
          "Ensuring projects are delivered efficiently with the right resource allocation and budget control. Our approach includes demand forecasting, cost-benefit analysis, and lean budgeting to maximize value delivery.",
      },
      {
        name: "Risk & Compliance Management",
        details:
          "Proactively identifying and mitigating project risks for smooth execution. Our risk management solutions help organizations foresee potential challenges, implement mitigation strategies, and maintain regulatory compliance.",
      },
      {
        name: "KPI & Performance Tracking",
        details:
          "Data-driven insights for continuous improvement and project success. We establish performance metrics, set up dashboards, and analyze key performance indicators (KPIs) to ensure strategic goals are met effectively.",
      },
    ],
  },
];

const ServiceDetailsPage = ({ params }: any) => {
  const service = services.find((x) => x.name == params?.pagename?.toString());
  // console.log(params?.pagename?.toString());
  // console.log(service);
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title="Single Service Details"
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
