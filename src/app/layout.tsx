import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './../../public/style.css';
import Nav from "@/components/mainCom/Nav";
import ScrollAni from "@/components/mainCom/ScrollAni";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Askar",
  description: "Askar",
  icons:{
    icon:'/image/scroll/m4.png',
    apple:'/image/scroll/m4.png',
    shortcut:'/image/scroll/m4.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    

 
  
  return (
    <html lang="ar" dir="rtl" >
      <body  className="">
        <div  className="bg-gray-950 dark:bg-gray-300">
          <Nav />
          {children}
          <ScrollAni/>
        </div>
          </body>
    </html>
  );
}
