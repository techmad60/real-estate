import type { Metadata } from "next";
import {  Poppins, Montserrat } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const montsy = Montserrat ({
  variable: "--font-montsy",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});




export const metadata: Metadata = {
  title: "Parkview Real Estate",
  description: "Where desire meets expectations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montsy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
