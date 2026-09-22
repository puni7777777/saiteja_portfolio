import { Libre_Baskerville, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "S. Venkata Sai Teja | MBA Finance & Accounting Professional",
  description:
    "Official portfolio of S. Venkata Sai Teja - Junior Accountant at Mahasai Aluminium Profiles Pvt Ltd. Specializing in Financial Accounting, GST Compliance (GSTR-1, GSTR-3B), Bank Reconciliation (BRS), and Financial Reporting.",
  keywords: [
    "S. Venkata Sai Teja",
    "Sai Teja",
    "Finance Professional Hyderabad",
    "Junior Accountant",
    "Mahasai Aluminium Profiles",
    "GST Compliance",
    "GSTR-1",
    "GSTR-3B",
    "Bank Reconciliation BRS",
    "Tally Prime",
    "MBA Finance",
    "Accounting Analyst",
    "Financial Operations",
  ],
  authors: [{ name: "S. Venkata Sai Teja" }],
  openGraph: {
    title: "S. Venkata Sai Teja | MBA Finance & Accounting Professional",
    description:
      "Finance professional with hands-on experience in financial accounting, GST compliance, bank reconciliation, and ERP systems. Pursuing MBA in Finance.",
    type: "profile",
    locale: "en_IN",
    siteName: "S. Venkata Sai Teja Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#f1f5f9]">
        {children}
      </body>
    </html>
  );
}
