// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg"; // Adjust the path as necessary
import name from "../../public/name.png"; // Adjust the path as necessary
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-sm transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Letaskono Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src={name}
              alt="Letaskono Name"
              width={200}
              height={80}
              className="hidden md:block"
            />
            {/* <span className="text-2xl font-bold text-gray-900">لستكنوا</span> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-[#4b164c] transition-colors"
            >
              المميزات
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-[#4b164c] transition-colors"
            >
              فكرة التطبيق
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-[#4b164c] transition-colors"
            >
              تقييمات
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.letaskono.zwaj.letaskono_flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4b164c] text-white px-6 py-2 rounded-full hover:bg-[#dd88cf] transition-all transform hover:scale-105"
            >
              تحميل
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-40">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block text-gray-700 hover:text-[#4b164c] transition-colors"
              >
                المميزات
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block text-gray-700 hover:text-[#4b164c] transition-colors"
              >
                فكرة التطبيق
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-gray-700 hover:text-[#4b164c] transition-colors"
              >
                تقييمات
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.letaskono.zwaj.letaskono_flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4b164c] text-white px-6 py-2 rounded-full hover:bg-[#dd88cf] transition-all transform hover:scale-105"
              >
                تحميل
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
