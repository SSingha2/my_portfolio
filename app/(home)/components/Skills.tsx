"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/Card-hover-effect'
import { SiReact,SiJavascript,SiNodedotjs,SiAmazonaws,SiGit,SiMysql,SiMongodb  } from "react-icons/si";
import { FaJava,FaLinux } from "react-icons/fa6";

export default function Skills() {
  const skills = [
    {
      text:"Javascript",
      icon: SiJavascript 
    },
    {
      text:"Java",
      icon: FaJava
    },
    {
      text:"NodeJs",
      icon: SiNodedotjs
    },
    {
      text:"React",
      icon: SiReact
    },
    {
      text:"Amazon Web Services",
      icon: SiAmazonaws
    },
    {
      text:"Git",
      icon: SiGit 
    },
    {
      text:"MongoDB",
      icon: SiMongodb  
    },
    {
      text:"Linux",
      icon: FaLinux 
    },
    {
      text:"SQL",
      icon: SiMysql  
    },
  ];
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills" className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={skills}/>
    </div>
  )
}
