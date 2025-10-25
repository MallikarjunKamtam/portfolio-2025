import React from "react";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import SkillCard from "./skillsCard";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";

const skills = {
  frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Redux", icon: <SiRedux /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Redis", icon: <DiRedis /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "Firebase", icon: <RiFirebaseLine /> },
  ],
  devops: [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <AiOutlineKubernetes /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Bash", icon: <SiGnubash /> },
  ],
};

function SKills() {
  return (
    <div
      id="SKills"
      className="items-center justify-center flex flex-col py-20"
    >
      <h1 className="text-3xl font-bold">My Skills</h1>
      <div className="bg-white w-36 h-[1px] my-4" />
      <section className="flex flex-col md:flex-row items-start justify-evenly  w-full">
        <SkillCard category="Front end" skillsList={skills.frontend} />
        <SkillCard category="Back end" skillsList={skills.backend} />
        <SkillCard category="Devops" skillsList={skills.devops} />
      </section>
    </div>
  );
}

export default SKills;
