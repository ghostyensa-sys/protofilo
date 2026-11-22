import type { Metadata } from "next";
import { Amiri, Fraunces, IBM_Plex_Sans_Arabic, Outfit } from "next/font/google";
import { ThemeBootScript } from "@/components/ThemeBootScript";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getRequestLocale } from "@/lib/locale";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const arabicDisplay = Amiri({
  variable: "--font-display-ar",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontVars =
    locale === "ar"
      ? `${arabic.variable} ${arabicDisplay.variable}`
      : `${display.variable} ${body.variable}`;

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${fontVars} h-full`}
    >
      <body className="min-h-full antialiased">
        <ThemeBootScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
