import { StaticImageData } from "next/image";
// home 1
import icon_1 from "@/assets/images/icon/icon_23.svg";
import icon_2 from "@/assets/images/icon/icon_24.svg";
import icon_3 from "@/assets/images/icon/icon_25.svg";
import icon_4 from "@/assets/images/icon/icon_26.svg";
// home 2
import icon_5 from "@/assets/images/icon/icon_06.svg";
import icon_6 from "@/assets/images/icon/icon_07.svg";
import icon_7 from "@/assets/images/icon/icon_08.svg";
// home 3
import icon_8 from "@/assets/images/icon/icon_32.svg";
import icon_9 from "@/assets/images/icon/icon_33.svg";
import icon_10 from "@/assets/images/icon/icon_34.svg";
import icon_11 from "@/assets/images/icon/icon_35.svg";
// home 4
import icon_12 from "@/assets/images/icon/icon_40.svg";
import icon_13 from "@/assets/images/icon/icon_41.svg";
import icon_14 from "@/assets/images/icon/icon_42.svg";
// home 5
import icon_15 from "@/assets/images/icon/icon_95.svg";
import icon_16 from "@/assets/images/icon/icon_70.svg";
import icon_61 from "@/assets/images/icon/icon_68.svg";
import icon_17 from "@/assets/images/icon/icon_10.svg";
import icon_18 from "@/assets/images/icon/icon_11.svg";

// data type
interface IService {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  page: string;
}

const service_data: IService[] = [
  // home 1
  {
    id: 1,
    icon: icon_1,
    title: "Banking",
    desc: "Effortless payments and transfers with our streamlined banking process.",
    page: "home",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Earning",
    desc: "Earning potential grows with dedication, innovation, and continuous improvement.",
    page: "home",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Expense Track",
    desc: "Empower your budgeting with accurate and intuitive expense tracking",
    page: "home",
  },
  {
    id: 4,
    icon: icon_4,
    title: "Savings",
    desc: "Secure your dreams through disciplined savings & prudent investments.",
    page: "home",
  },
  // home 2
  {
    id: 5,
    icon: icon_5,
    title: "Expense Report",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
    page: "home-2",
  },
  {
    id: 6,
    icon: icon_6,
    title: "Book keeping",
    desc: "Use receiving accounts in a growing number of currencies and get paid like a local.",
    page: "home-2",
  },
  {
    id: 7,
    icon: icon_7,
    title: "Tax Preparation",
    desc: "Use receiving accounts in a growing number of currencies and get paid like a local.",
    page: "home-2",
  },
  // home 3
  {
    id: 8,
    icon: icon_8,
    title: "Agent Banking",
    desc: "Stay updated, check your bank account to manage funds and track transactions securely.",
    page: "home-3",
  },
  {
    id: 9,
    icon: icon_9,
    title: "Savings Account",
    desc: "Securely save money, earn interest with a dedicated savings account.",
    page: "home-3",
  },
  {
    id: 10,
    icon: icon_10,
    title: "Low Interest",
    desc: "Bank yields meager interest, limiting earnings on deposited funds and investments.",
    page: "home-3",
  },
  {
    id: 11,
    icon: icon_11,
    title: "Multiple Cards.",
    desc: "Bank cards offer easy payments and cash withdrawals, enhancing financial accessibility.",
    page: "home-3",
  },
  // home 4
  {
    id: 12,
    icon: icon_12,
    title: "Global Payment",
    desc: "Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.",
    page: "home-4",
  },
  {
    id: 13,
    icon: icon_13,
    title: "Multiple Currency",
    desc: "Use receiving accounts in a growing number of currencies and get paid like a local.",
    page: "home-4",
  },
  {
    id: 14,
    icon: icon_14,
    title: "Online Payment",
    desc: "Use receiving accounts in a growing number of currencies and get paid like a local.",
    page: "home-4",
  },
  // home 5
  {
    id: 15,
    icon: icon_15,
    title: "Recruitment Solutions",
    desc: "We are here to help you source, attract, and hire top talent for your business success.",
    page: "home-5",
  },
  {
    id: 16,
    icon: icon_16,
    title: "Business Excellence",
    desc: "Driving operational efficiency, innovation, and sustainable growth through Business Excellence solutions.",
    page: "home-5",
  },
  {
    id: 17,
    icon: icon_15,
    title: "Recruitment Solutions",
    desc: "We are here to help you source, attract, and hire top talent for your business success.",
    page: "home-5",
  },
  {
    id: 18,
    icon: icon_61,
    title: "Business Excellence",
    desc: "Driving operational efficiency, innovation, and sustainable growth through Business Excellence solutions.",
    page: "home-5",
  },
  {
    id: 19,
    icon: icon_17,
    title: "Our Mission",
    desc: "Our mission is to empower businesses with exceptional talent and optimized operations through strategic hiring solutions and scalable PMO frameworks.",
    page: "home-5",
  },
  {
    id: 20,
    icon: icon_18,
    title: "Our Vision",
    desc: "To be the trusted global partner for businesses seeking exceptional talent and operational excellence, driving sustainable growth through innovative hiring solutions and structured PMO processes.",
    page: "home-5",
  },
  {
    id: 21,
    icon: icon_61,
    title: "Our Recruitment Services",
    desc: "With a data-driven hiring process, AI-powered recruitment tools, and an experienced team of industry-focused recruiters, we ensure quality, speed, and efficiency in every hire. Let us help you build a high-performing workforce! Get in touch today.",
    page: "home-6",
  },
  // {
  //   id: 22,
  //   icon: icon_13,
  //   title: "Our Hiring Solutions",
  //   desc: "By partnering with us, you gain a strategic recruitment advantage, ensuring that your workforce is agile, skilled, and aligned with your company’s vision.",
  //   page: "home-6",
  // },
  {
    id: 23,
    icon: icon_16,
    title: "Business Excellence",
    desc: "Achieving business success requires both structured project execution and streamlined operations. At Bayvue Corp, we provide expert-driven solutions to help organizations establish efficient project management processes and optimize business operations for sustainable growth.",
    page: "home-6",
  },
  // {
  //   id: 24,
  //   icon: icon_15,
  //   title: "Project Excellence",
  //   desc: "Delivering projects on time and within budget requires structured planning, governance, and execution. Our Project Excellence solutions help businesses establish a robust PMO framework, ensuring efficiency, risk management, and seamless collaboration across teams.",
  //   page: "home-6",
  // },
  // {
  //   id: 25,
  //   icon: icon_17,
  //   title: "PMO (Project Management Office) Excellence",
  //   desc: "With a robust PMO framework and operational excellence strategies, businesses can achieve greater efficiency, cost savings, and long-term success.",
  //   page: "home-6",
  // },
  // {
  //   id: 26,
  //   icon: icon_18,
  //   title: "Operations Excellence",
  //   desc: "Optimized business operations are the backbone of a scalable and high-performing organization. Our Operations Excellence solutions focus on enhancing workflows, reducing inefficiencies, and driving productivity to help businesses stay competitive.",
  //   page: "home-6",
  // },
];

export default service_data;
