import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehiqle",
  description: "Find your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

         <footer className="bg-gray-100 text-gray-700 mt-12">
            <div className="container mx-auto px-4 py-12">
              <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
                
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800">AI Car Hub</h2>
                  <p className="mt-2 text-gray-600 text-sm">
                    Drive Smarter. Find Your Dream Car with AI.
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-8 text-gray-600">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-800">Company</h3>
                    <Link href="/" className="hover:text-gray-900 transition">Home</Link>
                    <Link href="/about" className="hover:text-gray-900 transition">About Us</Link>
                    <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-gray-800">Cars</h3>
                    <Link href="/cars" className="hover:text-gray-900 transition">Browse Cars</Link>
                    <Link href="/featured" className="hover:text-gray-900 transition">Featured Cars</Link>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start gap-4">
                  <h3 className="font-semibold text-gray-800">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-900 transition"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-gray-900 transition"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-gray-900 transition"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="hover:text-gray-900 transition"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>

              {/* Bottom copyright */}
              <div className="mt-12 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} AI Car Hub. All rights reserved.
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
