import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nuxt | Plataforma Inteligente de Gestão e Operações",
    template: "%s | Nuxt",
  },
  description:
    "A Nuxt é uma startup especializada em criação de sistemas avançados com foco em inteligência artificial, estratégia e engenharia. A Nuxt Central é a plataforma que centraliza projetos, equipes e operações para elevar a eficiência de organizações públicas e privadas.",
  keywords: [
    "Nuxt",
    "Nuxt Central",
    "gestão inteligente",
    "plataforma corporativa",
    "IA aplicada",
    "estratégia empresarial",
    "engenharia de software",
    "gestão de projetos",
    "eficiência organizacional",
    "startup de tecnologia",
  ],
  authors: [{ name: "Nuxt" }],
  creator: "Nuxt",
  publisher: "Nuxt",
  category: "Tecnologia",
  applicationName: "Nuxt",

  openGraph: {
    title: "Nuxt | Plataforma Inteligente de Gestão e Operações",
    description:
      "Central corporativa da Nuxt para gerenciar projetos, equipes e processos utilizando estratégia e engenharia.",
    siteName: "Nuxt",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/nuxt-image.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
