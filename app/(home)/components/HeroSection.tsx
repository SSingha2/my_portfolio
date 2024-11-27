import { MovingBorderBtn } from '@/components/ui/MovingBorder';
import Link from 'next/link';
import React from 'react';
import Title from './Title';

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      {/* Text Content */}
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Nice to Meet You! 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Soumadeep"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          I’m a recent engineering graduate from India, passionate about fullstack java development. I also have knowledge of the Japanese language, showcasing my adaptability and dedication to learning.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          <Link
            href="https://drive.google.com/file/d/1T9_0vh4exqCfsHNRuTNUXxW3iTRK9gDo/view?usp=sharing"
            target="_blank"
            className="group"
          >
            <Title text="My Resume 🗒️" />
          </Link>
          <Link
            href="mailto:soumadeep1@gmail.com"
            className="group"
          >
            <Title text="Contact Me 📬" />
          </Link>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="relative flex justify-center items-center">
        <div className="size-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="size-32 rounded-2xl bg-green-500 transition-transform transform group-hover:scale-105"></div>
            <div className="size-32 rounded-full bg-indigo-500 transition-transform transform group-hover:scale-105"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-32 rounded-2xl bg-indigo-500 transition-transform transform group-hover:scale-105"></div>
            <div className="size-32 rounded-full bg-green-500 transition-transform transform group-hover:scale-105"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
