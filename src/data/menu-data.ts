import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/services",
    title: "Services",
    dropdown: true,
    dropdown_menus: [
      { link: "/services/recruitment", title: "Recruitment" },
      { link: "/services/business-excellence", title: "Business Excellence" },
    ],
  },
  {
    id: 3,
    link: "/about-us",
    title: "About",
  },
  {
    id: 4,
    link: "/contact-us",
    title: "Contact",
  },
];

export default menu_data;
