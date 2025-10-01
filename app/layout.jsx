import "../styles/globals.css";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

export const metadata = {
  title: "Humaan Clone",
  description: "Next.js + Tailwind floating navbar example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f4f4ed] text-black"> 
        {/* Navbar always on top */}
        <Navbar />

        {/* Mobile Bottom Navbar */}
        <MobileNavbar />
        
        {/* Page Content */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
