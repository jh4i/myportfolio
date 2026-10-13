import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// @ts-ignore - CSS imports are resolved by Next.js at build/runtime.
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johaina Banalan Portfolio",
  description:
    "Johaina Banalan Portfolio — Portfolio of Johaina Banalan, a BS Information Technology student and aspiring software developer focused on building modern, practical, and user-centered software solutions.",
  keywords: [
    "creative director",
    "luxury design",
    "portfolio",
    "digital artisan",
    "beauty branding",
    "UI design",
    "editorial web",
  ],
  authors: [{ name: "Johaina Banalan" }],
  openGraph: {
    title: "Johaina Banalan Portfolio",
    description:
      "Portfolio of Johaina Banalan, a BS Information Technology student and aspiring software developer focused on building modern, practical, and user-centered software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
