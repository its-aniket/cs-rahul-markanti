import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

export const metadata: Metadata = {
  title: {
    default: "Rahul Markanti & Associates | Company Secretaries",
    template: "%s | Rahul Markanti & Associates",
  },
  description:
    "Professional firm of Company Secretaries providing comprehensive legal, secretarial, and compliance advisory services. GST, MCA, Income Tax, Labour Law, Trademark and more.",
  keywords: [
    "Company Secretary",
    "CS firm Pune",
    "GST registration",
    "MCA compliance",
    "Income Tax",
    "business registration Pune",
    "ICSI",
    "Rahul Markanti",
  ],
  openGraph: {
    title: "Rahul Markanti & Associates | Company Secretaries",
    description:
      "Professional firm of Company Secretaries providing comprehensive legal, secretarial, and compliance advisory services.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
