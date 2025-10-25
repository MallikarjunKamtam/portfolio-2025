import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GiBoomerangSun } from "react-icons/gi";

const menuItems = [
  { name: "Home", path: "/" },
  // { name: "Games", path: "/games" },
  { name: "About Me", path: "/about-me" },
  { name: "Contact", path: "/contact" },
];

export const Menu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const activePath = location.pathname;

  // Toggle menu + rotation on click
  const onMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setRotated(!rotated);
  };

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setRotated(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Rotate slowly when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const rotation = window.scrollY * 0.2; // Adjust speed here (smaller = slower)
      setScrollRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed top-6 right-6 z-50 flex flex-col items-center"
    >
      <div
        className={`absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-6 px-6 py-3 rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all duration-200 ease-in-out origin-right ${
          isMenuOpen
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-75 translate-x-10 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => {
          const isActive = item.path === activePath;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setIsMenuOpen(false);
                setRotated(false);
              }}
              className={`flex flex-col items-center text-xs transition-transform duration-300 hover:scale-110 ${
                isActive ? "text-yellow-400" : "text-white"
              } min-w-max`}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Main rotating icon */}
      <GiBoomerangSun
        onClick={onMenuIconClick}
        className={`transition-transform duration-700 ease-in-out cursor-pointer ${
          rotated ? "rotate-[360deg]" : "rotate-0"
        }`}
        size={40}
        color="white"
        style={{
          transform: `rotate(${scrollRotation}deg)`, // rotation based on scroll
        }}
      />
    </div>
  );
};

export default Menu;
