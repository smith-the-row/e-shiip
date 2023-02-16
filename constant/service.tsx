import { FaLaptop, FaSwift } from "react-icons/fa";
import { BsBookshelf } from "react-icons/bs";

export const services = [
  {
    id: 1,
    name: "Logistics Services",
    about:
      "Classic Express is a leading Provider of multi-faced logistics and transportation solutions...",
    icon: <FaLaptop color="#cc0000" size={48} />,
  },
  {
    id: 2,
    name: "Global supply Chain Solutions",
    about:
      "We offer flexible supply chain solutions that help you reduce cost and mitigate risks.",
    icon: <FaSwift color="#cc0000" size={48} />,
  },
  {
    id: 3,
    name: "Mobile Shipment Tracking",
    about:
      "We offer intelligent and responsive solutions for tracking your shipments from drop-off to final delivery.",
    icon: <BsBookshelf color="#cc0000" size={48} />,
  },
];
