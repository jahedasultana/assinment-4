import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/books"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive
              ? "text-lime-300 relative pb-1"
              : "text-white hover:text-lime-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-lime-300 after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full after:-translate-x-1/2"
          }
        >
          All Books
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/create-book"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive
              ? "text-lime-300 relative pb-1"
              : "text-white hover:text-lime-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-lime-300 after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full after:-translate-x-1/2"
          }
        >
          Add Book
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/borrow-summary"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive
              ? "text-lime-300 relative pb-1"
              : "text-white hover:text-lime-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-lime-300 after:transition-all after:duration-300 after:ease-out after:w-0 hover:after:w-full after:-translate-x-1/2"
          }
        >
          Borrow Summary
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="py-2 bg-gradient-to-r from-fuchsia-600 to-violet-800 text-white">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div>
          <Link to="/" className="flex items-center space-x-2 gap-2">
            <div className="mx-auto bg-white rounded-full flex items-center justify-center w-12 h-12">
              <BookOpen className="w-8 h-8 text-fuchsia-700 p-1" />
            </div>
            <h1 className="hidden lg:flex text-lg font-bold">Library Management</h1>
          </Link>
        </div>

        {/* desktop navLink */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-10 list-none text-white text-lg">
            {navLinks}
          </ul>
        </div>

        {/* mobile navLink */}
        <div className="lg:hidden flex justify-between w-full">
          <p className="font-semibold text-lg mt-1 text-white">Library Management</p>
          <Menu
            className="w-8 h-8 text-lime-300 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-zinc-100 transition-transform duration-500 z-50 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X
            className="w-8 h-8 text-lime-300 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col items-center space-y-4 p-4">
          <ul className="list-none space-y-4 text-center text-gray-900">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
