import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans_Arabic, Outfit } from "next/font/google";
import { ThemeBootScript } from "@/components/ThemeBootScript";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "علي العيدروس · Ali Al Aidarous",
    template: "%s · علي العيدروس",
  },
  description:
    "Practical systems for startups — dashboards, spreadsheet automation, attendance, payroll, and HR. أنظمة عملية للشركات الناشئة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${arabic.variable} h-full`}
    >
      <head>
        <ThemeBootScript />
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
