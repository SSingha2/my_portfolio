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
    ];

  return (
    <div className='py-10 p-5 sm:p-0 mt-20'>
      <Title text="Certifications" className='flex flex-col items-center justify-center rotate-6'/>
      <div className='flex items-center justify-center p-20'>
            {projectItems.map((p,index)=>{
                return <Link href={p.link} key={index} target="_blank">
                    <div className={cn("p-5 rounded-md",p.background)}>
                        <DirectionAwareHover imageUrl={p.cover} className='w-full h-72 space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                                <h1 className='text-2xl font-bold'>{p.title}</h1>
                                <div className='flex items-center gap-5'>
                                    {p.tech}
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