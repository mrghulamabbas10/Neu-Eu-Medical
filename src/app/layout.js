import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "NEU Eu Madical",
  description: "Prescribed Medication Assisted Weight Loss Program That Gets Results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ `${urbanist.className} antialiased ` }
      >
        <Navbar />
        { children }
        <Footer />
      </body>
    </html>
  );
}
