import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog about exploring beautiful places in Pakistan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider 
        attribute="class" 
        defaultTheme="system"
         enableSystem>
           <Navbar/>
          <main className="max-w-6xl mx-auto px-4 dark:text-gray-200 text-black">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
