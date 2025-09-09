import { Urbanist } from "next/font/google";
import "./globals.css";
import LayoutLoading from "./loading";
import Script from "next/script";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neu Eu Medical",
  description:
    "Prescribed Medication Assisted Weight Loss Program That Gets Results",
};
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neu Eu Medical",
  url: "https://www.neueu.co/",
  logo: "https://www.neueu.co/images/logo.svg",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61566649072474&mibextid=wwXIfr&rdid=OVrmXSbYKrpxHm5A&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BTkikvoWx%2F%3Fmibextid%3DwwXIfr",
    "https://www.instagram.com/neueumedical",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="gtm-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
        }}
      />
      <body className={`${urbanist.className} antialiased `}>
        <LayoutLoading />
        {children}
      </body>
    </html>
  );
}
