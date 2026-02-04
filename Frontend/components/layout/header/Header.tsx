"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavbarData from "@/public/data/navbar-data";
import MobileMenu from "./MobileMenu";
import OffcanvasInfo from "./OffcanvasInfo";
import Search from "./Search";
import SidebarCart from "./SidebarCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const pathname = usePathname();

  const DEFAULT_LOGO = "/images/flumenx-logo2.webp";
  const LIGHT_LOGO = "/images/logo-three.png";

  const logoSrc =
    pathname === "/index-five" || pathname === "/index-six"
      ? LIGHT_LOGO
      : DEFAULT_LOGO;

  /* =========================================
     Scroll detection (ONLY for style toggle)
     ========================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================
     Header height measurement (SAFE)
     ========================================= */
  useEffect(() => {
    const header = document.querySelector(".primary-navbar") as HTMLElement;
    if (!header) return;

    const setHeaderHeight = () => {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--header-height",
          `${header.offsetHeight}px`
        );
      });
    };

    // Initial + resize only
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    return () => {
      window.removeEventListener("resize", setHeaderHeight);
    };
  }, []);

  /* =========================================
     Recalculate height when sticky state changes
     ========================================= */
  useEffect(() => {
    const header = document.querySelector(".primary-navbar") as HTMLElement;
    if (!header) return;

    requestAnimationFrame(() => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    });
  }, [scrolled]);

  /* =========================================
     Active parent detection
     ========================================= */
  useEffect(() => {
    document
      .querySelectorAll(".navbar__item--has-children")
      .forEach((item) => {
        if (item.querySelector(".active-sub")) {
          item.classList.add("active-parent");
        }
      });
  }, []);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);


  return (
    <>
      <header className="header">
        <div className={`primary-navbar ${scrolled ? "navbar-active" : ""}`}>
          <div className="container">
            <nav className="navbar">
              {/* Logo */}
              <div className="navbar__logo">
                <a href="/" aria-label="Home">
                  <Image
                    src={logoSrc}
                    alt="Logo"
                    width={270}
                    height={68}
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>

              {/* Desktop menu */}
              <div className="navbar__menu d-none d-xl-flex">
                <ul className="navbar__list">
                  {NavbarData.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </ul>
              </div>

              {/* Mobile menu button */}
              <div className="navbar__options">
                <button
                  className="open-mobile-menu d-flex d-xl-none"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Open mobile menu"
                >
                  <i className="material-symbols-outlined">menu_open</i>
                </button>
              </div>
            </nav>
          </div>

          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </header>

      <SidebarCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <OffcanvasInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;

/* =========================================
   Menu Components
   ========================================= */

const MenuItem = ({ item }: any) => {
  const pathname = usePathname();

  return item.submenu ? (
    <li className="navbar__item navbar__item--has-children">
      <button className="navbar__dropdown-label">{item.title}</button>
      <ul className="navbar__sub-menu">
        {item.submenu.map((sub: any, i: number) =>
          sub.subInSub ? (
            <SubDropdown key={i} subItem={sub} />
          ) : (
            <li key={i}>
              <a
                href={sub.path}
                className={pathname === sub.path ? "active-sub" : ""}
              >
                {sub.title}
              </a>
            </li>
          )
        )}
      </ul>
    </li>
  ) : (
    <li className="navbar__item">
      <a
        href={item.path}
        className={pathname === item.path ? "active-it" : ""}
      >
        {item.title}
      </a>
    </li>
  );
};

const SubDropdown = ({ subItem }: any) => {
  const pathname = usePathname();

  return (
    <li className="navbar__item navbar__item--has-children">
      <button className="navbar__dropdown-label navbar__dropdown-label-sub">
        {subItem.title}
      </button>
      <ul className="navbar__sub-menu navbar__sub-menu__nested">
        {subItem.subInSub.map((child: any, i: number) => (
          <li key={i}>
            <a
              href={child.path}
              className={pathname === child.path ? "active-sub" : ""}
            >
              {child.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
