import React from "react";
import FaqItem from "./faq-item";

const faq_data = [
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
    desc: "Finding C-suite executives and leadership talent requires a specialized approach. We leverage industry expertise, market intelligence, and a deep talent network to recruit high-impact leaders who drive business success.",
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

const FaqArea = () => {
  return (
    <div className="faq-section-three light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="accordion accordion-style-one px-4 bg-white"
              id="accordionOne"
            >
              {faq_data.map((faq, i) => (
                <FaqItem key={i} {...faq} parent="accordionOne" cls="fw-bold" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
