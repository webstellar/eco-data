import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";

import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eco Dataplace",
  description: "Your data hub for all economic data analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Newsletter />
        <Footer />
        <Analytics />
        <ToastContainer />
      </body>
    </html>
  );
}
