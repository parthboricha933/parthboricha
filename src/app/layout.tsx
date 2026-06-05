import type { Metadata } from "next";
import { Montserrat, Quicksand, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Parth Boricha | Freelance Full Stack Web Developer",
  description:
    "Portfolio of Parth Boricha — a passionate full stack web developer with 3+ years of experience building modern web applications with React, Next.js, and Node.js.",
  keywords: [
    "Parth Boricha",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Freelance Developer",
    "Portfolio",
  ],
  authors: [{ name: "Parth Boricha" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Parth Boricha | Freelance Full Stack Web Developer",
    description:
      "Passionate full stack web developer with 3+ years of experience building modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="theme-color" content="#F5D061" />
        <style>{`
          :root {
            --themeColor1: #F8F6F6;
            --themeColor2: #F5D061;
            --themeColor3: #2A363B;
            --themeColor4: #CF4647;
          }
        `}</style>
      </head>
      <body
        className={`${montserrat.variable} ${quicksand.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
