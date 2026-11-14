import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PlanProvider from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fitlog",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f1115]">
        <PlanProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <ToastContainer />
        </PlanProvider>
      </body>
    </html>
  );
}
