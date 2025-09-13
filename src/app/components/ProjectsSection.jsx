"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import PlayIcon from "../../../public/playIcon.svg";
import SpreadIcon from "../../../public/excelIcon.svg";
import LinkIcon from "../../../public/linkIcon.svg";

const projectsData = [
  {
    id: 1,
    title: "Rental Car Website",
    status: "completed",
    description: "Developed a web-based car rental system to improve booking efficiency and data management.",
    tag: ["All", "Web"],
    tools: [
      {
        src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        alt: "HTML5",
      },
      {
        src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
        alt: "PHP",
      },
      {
        src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
        alt: "Boostrap",
      },
    ],
    doc : [
    { href: "https://github.com/shalunafasya/GarasiProject", icon: GithubIcon },
  ],
  },
  {
    id: 2,
    title: "Articles Management",
    status: "completed",
    description: "Developed article management platform with role-based access (User & Admin). Implemented secure authentication, form validation with Zod and RHF, API integration, and reusable UI components to ensure scalability and good user experience.",
    tag: ["All", "Web"],
    tools: [
      {
        src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        alt: "React",
      },
      {
        src : "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
        alt : "Next.js",
      },
      {
        src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      }
    ],
    doc : [
      { href: "https://github.com/shalunafasya/Articles-Management", icon: GithubIcon },
      { href: "https://articles-next-js-2exa.vercel.app/login", icon: PlayIcon },
    ],
  },
  {
    id: 3,
    title: "Lipmatch",
    status: "completed",
    description: "Developed the Lipmatch Decision Support System to assist users in selecting optimal lip products based on lip conditions and user preferences.",
    tag: ["All", "Web"],
    tools : [
      {
        src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
        alt: "PHP",
      },
      {
        src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
        alt: "Boostrap",
      },
      {
        src: "https://img.shields.io/badge/Codeigniter-EF4223?style=for-the-badge&logo=codeigniter&logoColor=white",
        alt: "CodeIgniter",
      },
    ],
    doc : [
      { href: "https://github.com/shalunafasya/Lipmatch", icon: GithubIcon },
    ],
  },
  {
    id: 4,
    title: "BNEXT",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    tools: [
      {
        src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        alt: "React",
      },
      {
        src : "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
        alt : "Next.js",
      },
      {
        src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS",
      }
    ],
  },
  {
    id: 5,
    title: "Bengkel Saku",
    status: "ongoing",
    description: "Authentication and CRUD operations",
    tag: ["All", "Web"],
    tools: [
      { src: "https://img.shields.io/badge/Kotlin-B125EA?style=for-the-badge&logo=kotlin&logoColor=white", 
        alt: "Kotlin"
      },
      { src: "https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=for-the-badge&logo=Jetpack%20Compose&logoColor=white",
        alt: "Jetpack Compose"
      }
    ],
  },
  {
    id: 6,
    title: "HRM Testing",
    status: "ongoing",
    description: "Project 5 description",
    tag: ["All", "Mobile"],
    tools: [
      {
        src : "https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white",
        alt : "spreadsheet",
      },
    ],
    doc : [
      { href: "https://github.com/shalunafasya/HRM-Testing", icon: SpreadIcon },
      { href: "", icon: LinkIcon}
    ],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              status={project.status}
              description={project.description}
              tools={project.tools || []}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              doc={project.doc}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
