import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/logo.png"; // pastikan logo kamu ada di path ini

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const kategori_list = ["Skincare", "Makeup", "Body Care", "Hair Care"]; // bisa dari props/API

  return (
    <header className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/dashboard" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8" />
              <span className="ml-2 font-bold text-pink-600">BeautyCare</span>
            </a>
          </div>

          {/* Toggle Button (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className={`flex-col lg:flex-row lg:flex items-center gap-6 ${isMenuOpen ? "flex" : "hidden"} lg:flex`}>
            <a href="/dashboard" className="text-gray-700 hover:text-pink-500 font-medium">Home</a>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-pink-500 font-medium">
                Produk <MdKeyboardArrowDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                  {kategori_list.map((kategori) => (
                    <li key={kategori}>
                      <a
                        href={`/produk?kategori=${encodeURIComponent(kategori)}`}
                        className="block px-4 py-2 text-sm hover:bg-pink-100"
                      >
                        {kategori}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a href="/pesanan" className="text-gray-700 hover:text-pink-500 font-medium">Pesanan Saya</a>
          </nav>

          {/* Icon Menu (Right) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/keranjang" className="text-gray-700 hover:text-pink-500 text-xl">
              <FaShoppingCart />
            </a>
            <a href="/profile" className="text-gray-700 hover:text-pink-500 text-xl">
              <FaUser />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
