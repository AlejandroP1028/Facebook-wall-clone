import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional: adjust based on your needs
});

export const metadata: Metadata = {
  title: "Alejandro's Wall",
  description: "Facebook Wall Test by Alejandro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins}  antialiased`}>{children}</body>
    </html>
  );
}
