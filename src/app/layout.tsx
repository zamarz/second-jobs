import type { Metadata } from "next";
import {
  Frank_Ruhl_Libre,
  Inter,
  Jomolhari,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const jomolhari = Jomolhari({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MP Second Jobs",
  description: "Track the extra money MPs are making",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jomolhari.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
