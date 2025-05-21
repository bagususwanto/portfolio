import {
  TechBootstrap,
  TechExpress,
  TechJavascript,
  TechMsqlServer,
  TechMysql,
  TechPhp,
  TechReact,
} from "@/components/TechStack";

export const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "A web-based inventory management system that allows users to manage their inventory, track stock levels, and generate reports.",
    github: "https://github.com/bagususwanto",
    project: "#",
    image: [
      "/assets/projects/inventory.png",
      "/assets/projects/inventory2.png",
    ],
    techStack: [
      TechJavascript,
      TechReact,
      TechExpress,
      TechBootstrap,
      TechMsqlServer,
    ],
  },
  {
    id: 2,
    title: "Vendor Arrival Monitoring",
    description:
      "A web application that allows users to monitor the arrival of vendors and manage their schedules.",
    github: "https://github.com/bagususwanto",
    project: "#",
    image: ["/assets/projects/vendorMonitoring.png"],
    techStack: [
      TechJavascript,
      TechReact,
      TechExpress,
      TechBootstrap,
      TechMsqlServer,
    ],
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "An e-commerce website that allows users to browse products, add them to their cart, and checkout.",
    github: "https://github.com/bagususwanto",
    project: "#",
    image: ["/assets/projects/ecommerce.png"],
    techStack: [TechJavascript, TechReact, TechBootstrap, TechMsqlServer],
  },
  {
    id: 4,
    title: "Material Scrap Management System",
    description:
      "A web application that allows users to manage and track their scrap materials.",
    github: "https://github.com/bagususwanto",
    project: "#",
    image: ["/assets/projects/escrap.png"],
    techStack: [TechPhp, TechJavascript, TechBootstrap, TechMysql],
  },
];
