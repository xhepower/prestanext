import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./Components/shared/Header";
import { Footer } from "./Components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });
import "./Global.css";
export const metadata: Metadata = {
  title: "PrestaNext",
  description: "Programa de prestamos",
};

export default function RootLayout({
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
