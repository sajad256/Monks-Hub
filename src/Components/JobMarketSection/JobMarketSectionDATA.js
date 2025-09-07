import imges from "../../assets/Become in Deman IMG/Become in Deman IMG";

// JobMarketSectionDATA.js
import { TbCategory } from "react-icons/tb";
import { AiOutlineFire, AiOutlineDollar } from "react-icons/ai";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export const buttonData = [
  { title: "All Categories", icon: TbCategory },
  { title: "Development", icon: FaLaptopCode },
  { title: "UI/UX Design", icon: FaPaintBrush },
  { title: "Popular", icon: AiOutlineFire },
  { title: "Project Management", icon: FaUsers },
  { title: "Accounting", icon: AiOutlineDollar },
  { title: "Marketing", icon: FaChartLine },
];

export const cardsData = [
  // Development
  {
    img: imges.img1,
    development: "Development",
    popular: "Popular",
    title: "Effective Stakeholder Engagement",
    detail:
      "Gain UI design mastery with hands-on expert mentorship, refining your skills through personalized guidance and feedback.",
    houre: "2hr 35min",
    lecture: "20 lecture",
    price: "$160.00",
    fire: imges.fire,
  },
  // Marketing
  {
    img: imges.img2,
    marketing: "Marketing",
    price: "$140.00",
    title: "Google Ads & PPC Campaigns",
    houre: "3hr 35min",
    lecture: "25 lecture",
  },
  // UI/UX Design
  {
    img: imges.img3,
    Ui: "UI/UX Design",
    price: "$150.00",
    title: "Effective Stakeholder Engagement",
    houre: "4hr 35min",
    lecture: "30 lecture",
  },
  // Development
  {
    img: imges.img4,
    develo: "Development",
    price: "$180.00",
    title: "HTML, CSS, and Beyond",
    houre: "5hr 35min",
    lecture: "40 lecture",
  },
  {
    img: imges.img4,
    develo: "Development",
    price: "$180.00",
    title: "HTML, CSS, and Beyond",
    houre: "5hr 35min",
    lecture: "40 lecture",
  },
];
