import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ClientRenderingWrapper from "@/components/ClientRenderingWrapper";
import Modal from "@/components/Modals/Modal";
import RegisterModal from "@/components/Modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/Modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";

const font = Rubik({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bunkr - Find perfect places to stay",
  description: "Bunkr is a brand new place rental plaform with AI capabilities to help you with.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {

  const currentUser = await getCurrentUser();

  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <ClientRenderingWrapper>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientRenderingWrapper>
        {children}
      </body>
    </html>
  );
}
