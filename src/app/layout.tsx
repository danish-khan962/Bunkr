import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ClientRenderingWrapper from "@/components/ClientRenderingWrapper";
import Modal from "@/components/Modals/Modal";
import RegisterModal from "@/components/Modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Rubik({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bunkr - Find perfect places to stay",
  description: "Bunkr is a brand new place rental plaform with AI capabilities to help you with.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <ClientRenderingWrapper>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientRenderingWrapper>
        {children}
      </body>
    </html>
  );
}
