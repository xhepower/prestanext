import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./Components/shared/Header";
import { Footer } from "./Components/shared/Footer";
import "./Global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export const metadata: Metadata = {
  title: "PrestaNext",
  description: "Programa de prestamos",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="styles.body">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
