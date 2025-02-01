import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "./providers";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://my-portfolio-rho-eight-93.vercel.app/"),

	title: "Soumadeep Singha Portfolio",
	authors: {
		name: "Soumadeep Singha",
	},

	description:
		"Hello, I am from West Bengal,India. I am a recent graduate looking for software developer roles, and I also have knowledge of the Japanese language.",
	openGraph: {
		title: "Soumadeep Singha",
		description:
			"Hello, I am from West Bengal,India. I am a recent graduate looking for software developer roles, and I also have knowledge of the Japanese language.",
		url: "https://my-portfolio-rho-eight-93.vercel.app/",
		siteName: "Soumadeep Singha",
		images: "/OG.png",
		type: "website",
	},
	keywords: ["Portfolio", "Soumadeep Singha"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>

      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
			<I18nProvider>
                {children}
            </I18nProvider>
      </ThemeProvider>

      </body>
    </html>
  );
}
