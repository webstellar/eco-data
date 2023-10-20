import "../globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "@/components/header/Header";
import { ReCaptchaProvider } from "next-recaptcha-v3";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/newsletter/Newsletter";

import { Analytics } from "@vercel/analytics/react";

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eco Dataplace",
    template: "%s | Eco Dataplace",
  },
  description: "Your data hub for all economic data analysis",
  keywords: [
    "Data Analysis",
    "Data Experts",
    "Data analysis of Economics, Lagos",
  ],
  creator: "Endurance Kwamu",
  publisher: "Peter Onyegbule",
  authors: [{ name: "Peter Onyegbule", url: "https://peteronyegbule.ng" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
      <html lang="en">
        <body className={jost.className}>
          <Header />
          {children}
          <Newsletter />
          <Footer />
          <Analytics />
          <ToastContainer />
        </body>
      </html>
    </ReCaptchaProvider>
  );
}
