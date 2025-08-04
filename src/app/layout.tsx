import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import ReactPlugin from "@stagewise-plugins/react";
import { StagewiseToolbarClient } from "@/components/StagewiseToolbarClient";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AztecAcquisition | Automate Your Clinic's Growth",
  description: "Get 20–50 extra consultations every month with AztecAcquisition. Automate bookings, reminders, and follow-ups for your clinic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>AztecAcquisition | Automate Your Clinic's Growth</title>
        <meta name="description" content="Get 20–50 extra consultations every month with AztecAcquisition. Automate bookings, reminders, and follow-ups for your clinic." />
        <link rel="canonical" href="https://aztechacquisition.com/" />
        <meta property="og:title" content="AztecAcquisition | Automate Your Clinic's Growth" />
        <meta property="og:description" content="Get 20–50 extra consultations every month with AztecAcquisition. Automate bookings, reminders, and follow-ups for your clinic." />
        <meta property="og:url" content="https://aztechacquisition.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AztecAcquisition" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AztecAcquisition | Automate Your Clinic's Growth" />
        <meta name="twitter:description" content="Get 20–50 extra consultations every month with AztecAcquisition. Automate bookings, reminders, and follow-ups for your clinic." />
        <meta name="twitter:url" content="https://aztechacquisition.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AztecAcquisition",
          "url": "https://aztechacquisition.com/",
          "logo": "https://aztechacquisition.com/logo.svg"
        }) }} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Stagewise Toolbar (only in dev mode) */}
        <StagewiseToolbarClient />
        {children}
      </body>
    </html>
  );
}
