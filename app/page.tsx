"use client";

import CardService from "@/components/CardService";
import {
  AiFillApi,
  AiFillCloud,
  AiFillDatabase,
  AiOutlineDeploymentUnit,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import { HiComputerDesktop } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      Icon: HiComputerDesktop,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern frontend frameworks like React.",
    },
    {
      Icon: AiFillDatabase,
      title: "Backend Development",
      description:
        "Designing and developing scalable backend systems using Node.js, Express, and PostgreSQL/MSSQL.",
    },
    {
      Icon: AiFillApi,
      title: "API Development",
      description:
        "Creating efficient RESTful and GraphQL APIs for seamless integration between frontend and backend systems.",
    },
    {
      Icon: AiFillCloud,
      title: "Database Design & Optimization",
      description:
        "Structuring relational databases with performance in mind and optimizing queries for fast data access.",
    },
    {
      Icon: AiOutlineSecurityScan,
      title: "Authentication & Authorization",
      description:
        "Implementing secure authentication systems, JWT-based login, and role-based access control.",
    },
    {
      Icon: AiOutlineDeploymentUnit,
      title: "DevOps & Deployment",
      description:
        "Deploying applications to production environments, setting up CI/CD pipelines, and configuring Nginx on Windows/Linux servers.",
    },
  ];

  // Variants container untuk stagger anak-anak
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay 150ms antar card
      },
    },
  };

  // Variants untuk tiap card (anak)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 200 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200, // kekakuan pegas, semakin tinggi semakin kaku
        damping: 20, // redaman pegas, semakin tinggi semakin lembut
      },
    },
    exit: { opacity: 0, scale: 0.8, y: 200 },
  };

  return (
    <>
      <div className="flex flex-col items-center w-full px-4">
        <p className="text-sm mb-4">
          Hi there! I’m a fullstack developer who loves working on both backend
          and frontend parts of web apps. I make sure the server runs smoothly
          with clean and efficient code, while also crafting beautiful and
          intuitive interfaces. Whether it's designing APIs or building
          interactive UI, I’m passionate about creating great user experiences
          from end to end.
        </p>
      </div>
      <div className="flex flex-col w-full h-full bg-gray-100/30 dark:bg-gray-700/30 p-4">
        <h2 className="text-xl font-semibold">What i'm doing</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mt-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-xl rounded-lg">
              <CardService
                Icon={service.Icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
