import Header from "@/components/Header/page";
import "./globals.css"
import Footer from "@/components/Footer/page";
import localFont from "next/font/local";
const estedad = localFont({
  src: [
    { path: "./fonts/Estedad-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/Estedad-Thin.ttf", weight: "100", style: "normal" },

    { path: "./fonts/Estedad-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/Estedad-ExtraLight.ttf", weight: "200", style: "normal" },

    { path: "./fonts/Estedad-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Estedad-Light.ttf", weight: "300", style: "normal" },

    { path: "./fonts/Estedad-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Estedad-Regular.ttf", weight: "400", style: "normal" },

    { path: "./fonts/Estedad-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Estedad-Medium.ttf", weight: "500", style: "normal" },

    { path: "./fonts/Estedad-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Estedad-SemiBold.ttf", weight: "600", style: "normal" },

    { path: "./fonts/Estedad-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Estedad-Bold.ttf", weight: "700", style: "normal" },

    { path: "./fonts/Estedad-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Estedad-ExtraBold.ttf", weight: "800", style: "normal" },

    { path: "./fonts/Estedad-Black.woff2", weight: "900", style: "normal" },
    { path: "./fonts/Estedad-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-estedad",
});
export const metadata = {
  title: "اتو رنت",
  description: "اتو رنت",
  icons: {
    icon: "/logom.svg",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={estedad.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
