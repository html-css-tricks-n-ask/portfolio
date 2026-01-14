"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // react-icons
import { toggleTheme } from "../feature/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Contact Me", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);


const dispatch = useDispatch();
const mode = useSelector((state) => state.theme.mode);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  console.log("Current mode:", mode);

  return (
 <nav
  className={`w-full fixed top-0 z-50 backdrop-blur-md shadow-sm border-b
  ${
    mode === "dark"
      ? "bg-black text-white border-gray-800"
      : "bg-white text-black border-gray-300"
  }`}
>

    
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="./profile.png" // replace with your actual logo path
            alt="Logo"
            className="h-10 w-10 object-contain object-contain rounded-full"
          />
                <span className={`text-xl font-bold ${mode === "dark" ? "text-white" : "text-gray-900"}`}>Bharat Kumar</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            
className={`relative transition duration-200
  ${
    mode === "dark"
      ? "text-white hover:text-gray-300"
      : "text-gray-700 hover:text-black"
  }
  ${pathname === link.href ? "font-semibold" : ""}
`}
            >
              {link.name}
              <span
               className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300
  ${mode === "dark" ? "bg-white" : "bg-black"}
  ${
    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
  }`}
              />
            </Link>
          ))}
        </div>

        <button onClick={() => dispatch(toggleTheme())}>
          {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <FiX size={24} className="text-orange-500" />
          ) : (
            <FiMenu size={24} className="text-orange-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden  px-6 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
       className={`block transition duration-200
  ${
    mode === "dark"
      ? "text-white hover:text-gray-300"
      : "text-gray-700 hover:text-black"
  }
  ${pathname === link.href ? "font-semibold" : ""}
`}>


              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
