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

export default function Skills() {
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
      <Title text="Skills" className="flex flex-col items-center justify-center -rotate-6" />

      {/* Frontend Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Frontend</h2>
        <HoverEffect items={frontendSkills} />
      </div>

      {/* Backend Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Backend</h2>
        <HoverEffect items={backendSkills} />
      </div>

      {/* Technologies Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Technologies</h2>
        <HoverEffect items={technologySkills} />
      </div>
    </div>
  );
}
