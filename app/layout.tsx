import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-main">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
