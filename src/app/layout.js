import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Años Dorados",
  description: "Residencia para Mayores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
      <Footer/>
    </html>
  );
}
