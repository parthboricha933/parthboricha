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
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Freelance Developer",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "JavaScript Developer",
    "TypeScript Developer",
    "India Web Developer",
  ],
  authors: [{ name: "Parth Boricha", url: "https://parthboricha.vercel.app" }],
  creator: "Parth Boricha",
  publisher: "Parth Boricha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Parth Boricha | Full Stack Web Developer",
    description:
      "I build modern web applications with React, Next.js, and Node.js. Check out my portfolio and let's work together!",
    type: "website",
    url: "https://parthboricha.vercel.app",
    siteName: "Parth Boricha Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://parthboricha.vercel.app/assets/og-banner.png",
        width: 1344,
        height: 768,
        alt: "Parth Boricha - Full Stack Web Developer | Portfolio",
      },
      {
        url: "https://parthboricha.vercel.app/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Parth Boricha - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Boricha | Full Stack Web Developer",
    description:
      "I build modern web applications with React, Next.js, and Node.js. Check out my portfolio!",
    images: ["https://parthboricha.vercel.app/assets/og-banner.png"],
    creator: "@parthboricha",
    site: "https://parthboricha.vercel.app",
  },
  alternates: {
    canonical: "https://parthboricha.vercel.app",
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
        <link rel="canonical" href="https://parthboricha.vercel.app" />

        {/* Instagram / WhatsApp / Facebook Link Preview */}
        <meta property="og:title" content="Parth Boricha | Full Stack Web Developer" />
        <meta property="og:description" content="I build modern web applications with React, Next.js, and Node.js. Check out my portfolio and let's work together!" />
        <meta property="og:image" content="https://parthboricha.vercel.app/assets/og-banner.png" />
        <meta property="og:image:width" content="1344" />
        <meta property="og:image:height" content="768" />
        <meta property="og:url" content="https://parthboricha.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Parth Boricha Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* WhatsApp specific */}
        <meta property="og:image:alt" content="Parth Boricha - Full Stack Web Developer Portfolio" />
        <meta name="image" content="https://parthboricha.vercel.app/assets/og-banner.png" />

        {/* LinkedIn sharing */}
        <meta name="author" content="Parth Boricha" />

        {/* Apple touch icon for mobile bookmarks */}
        <link rel="apple-touch-icon" href="/assets/profile.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Parth Boricha',
              url: 'https://parthboricha.vercel.app',
              jobTitle: 'Full Stack Web Developer',
              description: 'Passionate full stack web developer with 3+ years of experience building modern web applications with React, Next.js, and Node.js.',
              email: 'borichaparth5@gmail.com',
              telephone: '+918347185730',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://github.com/parthboricha933',
              ],
              knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Full Stack Development', 'MERN Stack'],
              image: 'https://parthboricha.vercel.app/assets/profile.jpg',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Parth Boricha Portfolio',
              url: 'https://parthboricha.vercel.app',
              description: 'Portfolio of Parth Boricha — Full Stack Web Developer',
              author: {
                '@type': 'Person',
                name: 'Parth Boricha',
              },
            }),
          }}
        />
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
