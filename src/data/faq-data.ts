export type IFaq = {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
};

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "What recruitment services do you offer?",
    desc: "We provide full-cycle recruitment, contract & permanent staffing, executive search & leadership hiring, industry-specific talent acquisition, and global talent access to help businesses find the right talent efficiently.",
    isShow: true,
  },
  {
    id: "Two",
    title: "How does your hiring process ensure quality candidates?",
    desc: "Our recruitment process is data-driven and AI-powered, leveraging advanced sourcing tools, industry expertise, and thorough screening to ensure quality, speed, and efficiency in every hire.",
  },
  {
    id: "Three",
    title: "What industries do you specialize in for hiring?",
    desc: "We offer industry-specific recruitment solutions for IT, healthcare, finance, automotive, and more, ensuring you get highly skilled professionals tailored to your industry’s needs.",
  },
  {
    id: "Four",
    title: "How do your Business Excellence services help organizations?",
    desc: "We help businesses streamline operations through Project Excellence, Process Optimization, IT Infrastructure Management, Vendor & Procurement Strategies, and Compliance Frameworks, driving efficiency and long-term growth.",
  },
  {
    id: "Five",
    title: "What are the benefits of outsourcing recruitment to your company?",
    desc: "Outsourcing to us ensures faster hiring, cost-effective talent acquisition, scalable workforce solutions, and access to top-tier industry professionals without the overhead of an in-house recruitment team.",
  },
  {
    id: "Six",
    title: "How do your Project Excellence services improve project success?",
    desc: "We implement PMO frameworks, Agile methodologies, risk management strategies, and KPI tracking to ensure projects are delivered on time, within budget, and with high efficiency.",
  },
];

export default faq_data;
