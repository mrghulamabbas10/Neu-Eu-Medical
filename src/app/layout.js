import { Urbanist } from "next/font/google";
import "./globals.css";
import LayoutLoading from "./loading";

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
        <LayoutLoading/>
        { children }
      </body>
    </html>
  );
}
