import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", url: "/", path: "/" },
  { name: "About", url: "/about", path: "/about" },
  { name: "Services", url: "/services", path: "/services" },
  { name: "Blog", url: "/blog", path: "/blog" },
  { name: "Contact", url: "/contact", path: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center p-5 bg-gray-200 mx-10">
        <div className="flex items-center gap-4">
          {/* Toggle button with icon cross-fade + rotate */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className={`relative md:hidden grid place-items-center w-8 h-8
              transition-transform duration-300 hover:scale-110 active:scale-95
              ${isOpen ? "rotate-90" : "rotate-0"}`}
          >
            <Menu
              className={`absolute w-6 h-6 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <X
              className={`absolute w-6 h-6 transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>

          {/* Mobile panel (animate container + ul only) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="md:hidden absolute left-10 right-10 top-16 bg-gray-200 rounded-xl shadow overflow-hidden"
              >
                <motion.ul
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col p-4"
                >
                  {/* IMPORTANT: render Link directly (it returns <li>) */}
                  {navigation.map((route) => (
                    <Link key={route.name} route={route} />
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

          <h1>Navbar</h1>
        </div>

        <ul className="md:flex hidden gap-4">
          {navigation.map((route) => (
            <Link key={route.name} route={route} />
          ))}
        </ul>

        <h1>Sign in</h1>
      </nav>
    </div>
  );
};

export default NavBar;
