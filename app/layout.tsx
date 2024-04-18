import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

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
		url: "",
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
            {children}
      </ThemeProvider>

      </body>
    </html>
  );
}
