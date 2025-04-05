import React from "react";
import Image from "next/image";
// internal
import screen from "@/assets/images/assets/screen_16.png";
import { IFaq } from "@/data/faq-data";
import FaqItem from "../faq/faq-item";
import Link from "next/link";

// faq data
const faq_data: IFaq[] = [
  {
    id: "one",
    title: "Register & Create Account",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
    isShow: true,
  },
  {
    id: "two",
    title: "Manage Your Card",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
  {
    id: "three",
    title: "Atm withdraw & Online Banking",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
];
// faq data 2
const faq_data_2: IFaq[] = [
  {
    id: "one",
    title: "Full-Cycle Recruitment",
    desc: "We manage the entire hiring process, from sourcing and screening to candidate selection, ensuring you get the right talent with the right skills while reducing time-to-hire and hiring costs.",
    isShow: true,
  },
  {
    id: "two",
    title: "Contract and Permanent Staffing",
    desc: "Whether you need temporary, contract, or full-time employees, we offer flexible staffing solutions that align with your business needs, providing agile workforce solutions to support project demands and long-term growth.",
  },
  {
    id: "three",
    title: "Executive Search and Leadership Hiring",
    desc: "Finding C-suite executives and leadership talentrequires a specialized approach. We leverage industry expertise, market intelligence, and a deep talent network to recruit high-impact leaders who drive business success.",
  },
  {
    id: "four",
    title: "Industry-Specific Talent Solutions",
    desc: "We specialize in recruitment across IT, healthcare, finance, automotive, and other domains, ensuring you get highly skilled professionals tailored to your industry's unique requirements.",
  },
  {
    id: "five",
    title: "Global Talent Access",
    desc: "Expand your workforce beyond local talent pools. We help businesses access global talent by managing cross-border hiring, compliance, and remote workforce integration.",
  },
  // Business Excellence FAQs
  {
    id: "six",
    title: "Project Management Excellence",
    desc: "Our structured PMO frameworks and governance models ensure efficient project delivery, risk management, and optimal resource utilization.",
  },
  {
    id: "seven",
    title: "Cost-Effective Solutions",
    desc: "Our services provide high-quality talent and project management at a fraction of traditional costs, eliminating overhead and reducing operational expenses.",
  },
  {
    id: "eight",
    title: "Data-Driven Approach",
    desc: "We leverage AI-powered tools and data analytics to make informed decisions in both recruitment and project management processes.",
  },
  {
    id: "nine",
    title: "Scalable Solutions",
    desc: "Our flexible engagement models allow you to scale your workforce and project management capabilities according to business demands.",
  },
  {
    id: "ten",
    title: "End-to-End Support",
    desc: "From initial consultation to ongoing support, we provide comprehensive solutions that drive sustainable business growth and operational excellence.",
  },
];

// image style
const imgStyle = {
  height: "auto",
};

const TextFeatureEight = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <div className="text-feature-eight mt-60 mb-100 lg-mt-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 wow fadeInLeft">
            <div className="title-one mt-20">
              <div className="upper-title">Why Choose Us</div>
              <h3 className="color-deep">
                Elite Talent & Business Excellence Solutions
              </h3>
            </div>

            <div className="text-lg mt-45 lg-mt-30">
              <p className="mb-35">
                Partner with us for strategic recruitment and operational
                excellence. We combine industry expertise, advanced technology,
                and proven methodologies to deliver exceptional results.
              </p>
              <ul className="list-style-one">
                <li>Top Talent, Faster - Streamlined recruitment process</li>
                <li>Cost-Effective Solutions - High ROI on your investment</li>
                <li>
                  Industry-Specific Expertise - Tailored solutions for your
                  domain
                </li>
                <li>Global Reach - Access to worldwide talent pool</li>
                <li>Data-Driven Approach - AI-powered recruitment tools</li>
              </ul>
              <div className="mt-35">
                <Link href="/contact" className="btn-four">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ms-auto wow fadeInRight">
            <div
              className="accordion accordion-style-three md-mt-40"
              id="accordionOne"
            >
              {faq_data_2.map((faq, i) => (
                <FaqItem key={i} {...faq} parent="accordionOne" cls="fw-bold" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureEight;
