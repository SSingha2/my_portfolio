"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Title from './Title';
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const email = "soumadeep1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      {/* Text Content */}
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          {t("hero.greeting")} 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {t("hero.name")}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">{t("hero.description")}</p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          <Link
            href="https://drive.google.com/file/d/1T9_0vh4exqCfsHNRuTNUXxW3iTRK9gDo/view?usp=sharing"
            target="_blank"
            className="group"
          >
            <Title text={t("hero.resume")} />
          </Link>
          <button
            onClick={handleCopy}
            className="group"
          >
            <Title text={isCopied ? t("hero.contactCopied") : t("hero.contact")} />
          </button>
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
