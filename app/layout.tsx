import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "ChainVault — Futuristic, secure crypto exchange with transparent fees",
  description:
    "ChainVault is a security-first cryptocurrency exchange experience with live market boards, supported coins, transparent maker/taker fees, and a streamlined signup flow.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} font-body bg-background text-foreground antialiased`}
      >
        <Navbar
          logo="ChainVault"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Supported coins", href: "/coins" },
            { label: "Fees", href: "/fees" },
            { label: "Security", href: "/security" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Sign up"
          ctaHref="/signup"
        />
        {children}
        <Footer
          brand="ChainVault"
          description="Futuristic exchange UX. Security-first controls. Transparent fees."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Supported coins", href: "/coins" },
                { label: "Fees", href: "/fees" },
                { label: "Security", href: "/security" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Terms (summary)", href: "/about#terms-summary" },
                { label: "Privacy (summary)", href: "/about#privacy-summary" },
                { label: "Risk disclosure", href: "/security#risk-disclosure" },
              ],
            },
          ]}
          copyright="© 2026 ChainVault Labs. This website is for informational purposes only and does not constitute financial advice. Crypto assets are volatile and carry risk."
        />
      </body>
    </html>
  );
}
