"use client";
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/Card-hover-effect';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiAmazonaws, 
  SiGit, 
  SiMysql, 
  SiMongodb, 
  SiSpringboot, 
  SiAngular, 
  SiDocker 
} from "react-icons/si";
import { FaJava, FaLinux } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const frontendSkills = [
    { text: "Angular", icon: SiAngular },
    { text: "JavaScript", icon: SiJavascript },
    { text: "React", icon: SiReact }
  ];

  const backendSkills = [
    { text: "Java", icon: FaJava },
    { text: "Spring Boot", icon: SiSpringboot },
    { text: "Node.js", icon: SiNodedotjs },
  ];

  const technologySkills = [
    { text: "Amazon Web Services", icon: SiAmazonaws },
    { text: "Git", icon: SiGit },
    { text: "MongoDB", icon: SiMongodb },
    { text: "SQL", icon: SiMysql },
    { text: "Docker", icon: SiDocker },
    { text: "Linux", icon: FaLinux },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 space-y-16">
      <Title text={t("skills.name")} className="flex flex-col items-center justify-center -rotate-6" />

      {/* Frontend Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("skills.frontend")}</h2>
        <HoverEffect items={frontendSkills} />
      </div>

      {/* Backend Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("skills.backend")}</h2>
        <HoverEffect items={backendSkills} />
      </div>

      {/* Technologies Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("skills.technology")}</h2>
        <HoverEffect items={technologySkills} />
      </div>
    </div>
  );
}
