import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Navbar from "./components/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Trip",
  description: "Travel everywhere with us",
  icons: [
    {
      url: "/images/favico.png",
      href: "/images/favico.png",
    },
  ],
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />

        <SearchModal />

        <RegisterModal />

        <LoginModal />

        <RentModal />

        <Navbar currentUser={currentUser} />

        <div className="pt-24 pb-28">{children}</div>
      </body>
    </html>
  );
}
