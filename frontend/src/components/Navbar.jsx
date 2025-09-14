import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [circleMenuOpen, setCircleMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://api.bzoot.com/api/auth/me", {
          method: "GET",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("https://api.bzoot.com/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      alert("Logged out!");
    } catch {}
  };

  // Circle Menu Positioning
  const getCirclePosition = (index, total, radius) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
  };

  // Menu Items
  const menuItems = [
    { label: "home", href: "/" },
    { label: "about", href: "#about-us" },
    { label: "services", href: "/services" },
    { label: "collaboration", href: "/collaboration" },
    { label: "join", href: "/join" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-black/80 backdrop-blur-2xl border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="cursor-pointer -ml-[13vw] md:-ml-[5vw]">
          <img
            src="https://res.cloudinary.com/dlk5kntmy/image/upload/v1755105693/logo-03_yyespg.png"
            alt="Digital GenZ"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="capitalize px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              {item.label}
            </Link>
          ))}

          {/* Admin Panel (visible only to admin users) */}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="capitalize px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              admin panel
            </Link>
          )}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center space-x-3">
          {/* Profile/Login */}
          <div className="hidden md:flex items-center">
            <Link
              to={user ? "/profile" : "/login"}
              className="flex items-center space-x-2 px-3 py-2 rounded-full font-medium text-white border border-purple-500 hover:bg-purple-600 transition"
            >
              {user ? (
                <>
                  <User size={16} />
                  <span>{user.name || "Profile"}</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </Link>
          </div>

          {/* Mobile Circle Menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setCircleMenuOpen(!circleMenuOpen)}
              className="p-2 rounded-full text-white hover:bg-purple-700 transition"
            >
              <MoreVertical size={22} />
            </button>

            <AnimatePresence>
              {circleMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-0 top-12 w-48 h-48"
                >
                  {[
                    ...menuItems,
                    user?.role === "admin" && {
                      label: "Admin Panel",
                      icon: "🛠️",
                      link: "/admin",
                    },
                    {
                      label: user ? "Logout" : "Login",
                      icon: user ? "🚪" : "👤",
                      link: user ? null : "/login",
                      action: user ? handleLogout : null,
                    },
                  ]
                    .filter(Boolean)
                    .map((item, i, arr) => {
                      const pos = getCirclePosition(i, arr.length, 70);
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                          animate={{ x: pos.x, y: pos.y, opacity: 1, scale: 1 }}
                          exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                          {item.link ? (
                            <Link
                              to={item.href || item.link}
                              target={item.external ? "_blank" : "_self"}
                              rel={item.external ? "noopener noreferrer" : ""}
                              className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-700 transition"
                              onClick={() => setCircleMenuOpen(false)}
                            >
                              {item.icon || item.label[0].toUpperCase()}
                            </Link>
                          ) : (
                            <button
                              onClick={() => {
                                item.action?.();
                                setCircleMenuOpen(false);
                              }}
                              className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition"
                            >
                              {item.icon}
                            </button>
                          )}
                        </motion.div>
                      );
                    })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
