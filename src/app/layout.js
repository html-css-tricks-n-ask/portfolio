import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import RegisterSW from "./RegisterSW";
// import ReduxProvider from "./providers/ReduxProvider";

import ReduxProvider from "./store/provider";
import ThemeWrapper from "./ThemeWrapper";  


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "My Next.js PWA",
  description: "Next.js Progressive Web App",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />{" "}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeWrapper>
            <RegisterSW />
            <Navbar />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <Footer />
          </ThemeWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
