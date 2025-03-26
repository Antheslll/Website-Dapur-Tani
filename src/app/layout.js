import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CatalogNavProvider from "./GlobalComponent/Hooks/catalogHooks";
import { SideOpenProvider } from "./GlobalComponent/Hooks/sideOpen";
import { SideDashboardProvider } from "./GlobalComponent/Hooks/dashboardSideContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dapur Tani",
  description: "E-Commerce by Dapur Tani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; 
           img-src 'self' data:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com;
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
           font-src 'self' https://fonts.gstatic.com;"
        />
        <link rel="icon" href="/logo/dapur-tani-leaves.png" size="any" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideDashboardProvider>
          <SideOpenProvider>
            <CatalogNavProvider>{children}</CatalogNavProvider>
          </SideOpenProvider>
        </SideDashboardProvider>
      </body>
    </html>
  );
}
