
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     SCROLL DETECTION
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      /* Navbar background */

      setScrolled(scrollPosition > 20);

      /*
       * Find the section currently closest
       * to the navbar.
       */

      let currentSection = "home";

      navItems.forEach((item) => {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        /*
         * 120px accounts for the fixed navbar.
         */

        if (
          scrollPosition >=
          sectionTop - 120
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    /*
     * Run once when page loads.
     */

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     SMOOTH NAVIGATION
  ========================================================== */

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 80;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    setOpen(false);

    /*
     * Update URL hash without jumping.
     */

    window.history.replaceState(
      null,
      "",
      href
    );
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          transition-all
          duration-300
          ${scrolled
            ? "bg-black/85 backdrop-blur-2xl shadow-lg shadow-black/20"
            : "bg-black/50 backdrop-blur-xl"
          }
          border-b
          border-white/10
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            h-20
            px-6
            flex
            items-center
            justify-between
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="#home"
            onClick={(event) =>
              handleNavClick(
                event,
                "#home"
              )
            }
            className="
              text-2xl
              font-bold
              gradient-text
              whitespace-nowrap
            "
          >
            Tharun
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-7
            "
          >
            {navItems.map((item) => {
              const sectionId =
                item.href.substring(1);

              const isActive =
                activeSection === sectionId;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href
                    )
                  }
                  className="
                    relative
                    py-2
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {/* TEXT */}

                  <span
                    className={
                      isActive
                        ? "text-indigo-400"
                        : ""
                    }
                  >
                    {item.name}
                  </span>

                  {/* =================================================
                      EXACT ACTIVE LINE
                  ================================================== */}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="
                        absolute
                        left-0
                        right-0
                        -bottom-1
                        h-0.5
                        rounded-full
                        bg-gradient-to-r
                        from-indigo-400
                        via-purple-400
                        to-pink-400
                      "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={open}
            className="
              md:hidden
              p-2
              rounded-lg
              text-gray-200
              hover:text-white
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            <AnimatePresence
              mode="wait"
            >
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                >
                  <X size={27} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                >
                  <Menu size={27} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setOpen(false)
              }
              className="
                fixed
                inset-0
                z-40
                bg-black/70
                backdrop-blur-sm
                md:hidden
              "
            />

            {/* MENU */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                top-20
                left-0
                right-0
                z-50
                px-5
                md:hidden
              "
            >
              <div
                className="
                  rounded-2xl
                  bg-black/95
                  backdrop-blur-2xl
                  border
                  border-white/10
                  p-3
                  shadow-2xl
                "
              >
                {navItems.map(
                  (item) => {
                    const sectionId =
                      item.href.substring(
                        1
                      );

                    const isActive =
                      activeSection ===
                      sectionId;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(event) =>
                          handleNavClick(
                            event,
                            item.href
                          )
                        }
                        className={`
                          relative
                          flex
                          items-center
                          justify-between
                          px-4
                          py-4
                          rounded-xl
                          border-b
                          border-white/5
                          last:border-b-0
                          transition-all
                          duration-300
                          ${isActive
                            ? "text-indigo-400 bg-indigo-500/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        <span>
                          {item.name}
                        </span>

                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="
                              w-2
                              h-2
                              rounded-full
                              bg-indigo-400
                            "
                          />
                        )}
                      </Link>
                    );
                  }
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

