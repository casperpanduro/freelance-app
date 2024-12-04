import type { Metadata } from "next";
import { Cabin, Inter, Kanit, Titillium_Web } from "next/font/google";
import "./globals.css";
import siteConfig from "@/site.config";
import StoreProvider from "@/providers/StoreProvider";

//const inter = Inter({ subsets: ["latin"] });
const kanit = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased dark
      `}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
