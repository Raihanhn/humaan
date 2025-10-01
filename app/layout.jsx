import "../styles/globals.css";
import Navbar from "../components/Navbar";

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
        
        {/* Page Content */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
