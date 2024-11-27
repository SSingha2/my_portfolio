import React from 'react'
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Projects() {
    const projectItems = [
        {
            title: "AWS Certified Cloud Practitioner",
            tech:"Issued by Amazon Web Services Training and Certification",
            link:"https://www.credly.com/badges/c268285a-28f5-42f3-9581-00406b8d66e4?source=linked_in_profile",
            cover:"/Proj4.png",
            background: "bg-gray-400"
        },
        {
            title: "The Japanese Language Proficiency Test N2",
            tech:"Issued by Japan Educational Exchanges and Services",
            link:"https://drive.google.com/file/d/1EOQSxh83xS33ttiPiSWAmOEez6gEol3Q/view?usp=sharing",
            cover:"/Proj5.png",
            background: "bg-gray-400"
        },
    ];

  return (
<div className="py-10 px-5 sm:px-0 mt-20">
  <Title text="Certifications" className="flex flex-col items-center justify-center rotate-6" />
  
  <div className="flex flex-wrap items-center justify-center gap-10 p-10">
    {projectItems.map((project, index) => (
      <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
        <div className={cn("p-5 rounded-md shadow-md", project.background)}>
          <DirectionAwareHover imageUrl={project.cover} className="w-full h-72 space-y-5 cursor-pointer">
            <div className="space-y-5">
              <h1 className="text-2xl font-bold text-center">{project.title}</h1>
              <div className="flex items-center gap-5 justify-center">
                {project.tech}
              </div>
            </div>
          </DirectionAwareHover>
        </div>
      </Link>
    ))}
  </div>
</div>
  )
}