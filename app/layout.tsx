"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { ThemeProvider } from "next-themes";
import AppProviders from "@/providers/AppProviders";
import { useEffect } from "react";
import ContactModel from "@/components/contactModel/ContactModel";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${inter.className} flex flex-col bg-bg-primary-light dark:bg-bg-primary-dark relative`}
      >
        <AppProviders>
          <Header />
          <ContactModel />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
