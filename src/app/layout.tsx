import "../styles/index.scss";
import { Inter } from "next/font/google";
import Header from "@/components/comon/Header";
import Navigation from "@/components/comon/Navigation";
import Footer from "@/components/comon/Footer";
import ThemeProviders from "./ThemeProviders";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProviders>
          <Header />
          <Navigation />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
