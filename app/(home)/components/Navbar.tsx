import React from 'react';
import { VscGithubInverted } from "react-icons/vsc";
import { RxLinkedinLogo } from "react-icons/rx";
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link: "https://www.linkedin.com/in/ssingha123/",
            label: "LinkedIn",
            Icon: RxLinkedinLogo
        },
        {
            link: "https://github.com/SSingha2",
            label: "Github",
            Icon: VscGithubInverted
        }
    ]

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
        <h1 className='text-2x1 font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Soumadeep Singha 💻</h1>
        <div className='flex items-center gap-3'>
            {socials.map((social,index) => {
                const Icon = social.Icon;
                return <Link href={social.link} key={index} aria-label={social.label} target="_blank">
                    <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                </Link>
            })}
        </div>
    </nav>
  )
}
