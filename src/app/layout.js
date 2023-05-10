import "./globals.css";
import { Inter } from "next/font/google";
import favicon from "/public/favicon_io/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Meme-Generator",
  description: "A web app to generate memes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
