import React from 'react'
import { SiExpress, SiMongodb, SiNodedotjs, SiReact,SiJavascript,SiApachegroovy,SiAmazonaws, SiAngular, SiDocker, SiMysql, SiSpringboot } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Projects() {
    const projectItems = [
        {
            title: "Convention Hall Booking System",
            tech: [SiSpringboot, SiAngular, SiMysql, SiDocker],
            link: "https://github.com/SSingha2/Hall_Booking_Java",
            cover: "/Proj6.png",
            background: "bg-indigo-500"
        },
        {
            title: "Sign In/Sign Up page using MERN stack",
            tech:[SiMongodb,SiExpress,SiReact,SiNodedotjs],
            link:"https://login-register-app-frontend-eekmq624p-ssingha2s-projects.vercel.app/",
            cover:"/Proj1.png",
            background: "bg-indigo-500"
        },
        {
            title: "CI/CD pipeline with a Demo flask app",
            tech:[SiApachegroovy,SiAmazonaws ],
            link:"https://github.com/SSingha2/Flask_CICD",
            cover:"/Proj2.png",
            background: "bg-green-500"
        },
        {
            title: "This current portfolio website",
            tech:[SiJavascript],
            link:"https://github.com/SSingha2/Flask_CICD",
            cover:"/Proj3.png",
            background: "bg-green-500"
        },
    ];

  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title text="Projects" className='flex flex-col items-center justify-center -rotate-6'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projectItems.map((p,index)=>{
                return <Link href={p.link} key={index} target="_blank">
                    <div className={cn("p-5 rounded-md",p.background)}>
                        <DirectionAwareHover imageUrl={p.cover} className='w-full h-72 space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                                <h1 className='text-2xl font-bold'>{p.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {p.tech.map((Icon,index)=>{
                                        return <Icon className='w-9 h-9' key={index}></Icon>
                                    })}
                                </div>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </Link>
            })}
      </div>
    </div>
  )
}
