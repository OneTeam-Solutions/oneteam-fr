"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);  // State to track if we're on the Hero section

  const handleStickyNavbar = () => {
    const heroHeight = document.getElementById("home")?.offsetHeight || 0;
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    setIsOnHero(window.scrollY < heroHeight);  // Check if scroll is within the hero height
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  });

  const handleScroll = (path: string) => {
    const targetId = path.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 70; // Hauteur approximative de la navbar, ajuste ce nombre en fonction de la hauteur réelle
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };


  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
          ? "fixed z-[9999] shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#hero");
                }}
                href="#hero"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/logo-ot.png"
                  alt="logo"
                  width={90}
                  height={40}
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/logo-ot.png"
                  alt="logo"
                  width={90}
                  height={40}
                  className="hidden dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  {/* Toggler icon visibility and styles */}
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <a
                          href={menuItem.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleScroll(menuItem.path);
                          }}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${isOnHero ? "text-white" : "text-dark hover:text-[#F29D35] dark:text-white/70 dark:hover:text-[#F29D35]"
                            }`}
                        >
                          {menuItem.title}{" "}
                          {menuItem.newTab && (
                            <span className="ml-1 text-primary dark:text-white/70">
                              New
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* Optional right elements */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
