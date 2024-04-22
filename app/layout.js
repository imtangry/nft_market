import { Providers } from "@/components/Providers";
import { SessionProvider } from "next-auth/react"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NFT Market",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={[inter.className, 'text-sm'].join(' ')}>
        <SessionProvider>
          <Providers>
            {children}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
