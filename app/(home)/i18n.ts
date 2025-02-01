"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                myName: "Soumadeep Singha 💻",
                hero: {
                    greeting: "Nice to Meet You!",
                    name: "I'm Soumadeep",
                    description: "I’m a recent engineering graduate from India, passionate about fullstack Java development. I also have knowledge of the Japanese language, showcasing my adaptability and dedication to learning.",
                    resume: "My Resume 🗒️",
                    contact: "Contact Me 📬",
                    contactCopied: "Email Copied!"
                },
                skills: {
                    name: "Skills",
                    frontend: "Frontend",
                    backend: "Backend",
                    technology: "Technologies"
                },
                language: {
                    languages: "Languages Known",
                    en: "English",
                    jp: "Japanese"
                },
                project: {
                    name: "Projects",
                    title1: "Convention Hall Booking System",
                    title2: "Sign In/Sign Up page using MERN stack",
                    title3: "CI/CD pipeline with a Demo flask app",
                    title4: "This current portfolio website"
                },
                certificates: {
                    name: "Certifications",
                    title1: "AWS Certified Cloud Practitioner",
                    title2: "The Japanese Language Proficiency Test N2",
                }
            }
        },
        jp: {
            translation: {
                myName: "ソウマディープ・シンガ 💻",
                hero: {
                    greeting: "はじめまして！",
                    name: "ソウマディープです",
                    description: "インドの工学を卒業したばかりのエンジニアで、フルスタックのJava開発に強い関心を持っています。また、日本語にも堪能で、学ぶことに対する柔軟性と熱意を大切にしています。",
                    resume: "履歴書 🗒️",
                    contact: "お問い合わせ 📬",
                    contactCopied: "メールアドレスをコピーしました！"
                },
                skills: {
                    name: "スキル",
                    frontend: "フロントエンド",
                    backend: "バックエンド",
                    technology: "技術"
                },
                language: {
                    languages: "言語",
                    en: "英語",
                    jp: "日本語 (JLPT N2)"
                },
                project: {
                    name: "プロジェクト",
                    title1: "ホール予約システム",
                    title2: "MERNを使用したサインイン/サインアップページ",
                    title3: "デモ用Flaskアプリで構築したCI/CDパイプライン",
                    title4: "現在のウェブサイト"
                },
                certificates: {
                    name: "資格認定",
                    title1: "AWS Certified Cloud Practitioner",
                    title2: "日本語能力試験 N2",
                }
            }
        }
    }
});

export default i18n;
