import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vickio Labs | Innovative App Development",
  description: "Vickio Labs creates innovative applications that solve real-world problems. We specialize in building high-quality, user-friendly apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <span className="text-xl font-extrabold text-gray-900">Vickio Labs</span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                <a href="#apps" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Our Apps</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="ml-4 bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md">Contact</a>
              </div>
              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button type="button" className="text-gray-700 hover:text-blue-600 p-2">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Vickio Labs. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
