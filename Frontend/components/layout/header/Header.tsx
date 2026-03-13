"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavbarData from "@/public/data/navbar-data";
import MobileMenu from "./MobileMenu";
import OffcanvasInfo from "./OffcanvasInfo";
import Search from "./Search";
import SidebarCart from "./SidebarCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isHeroBannerActive, setIsHeroBannerActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const lastScrollYRef = useRef(0);

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
      const currentScrollY = window.scrollY;
      const hasPassedThreshold = currentScrollY > 50;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;

      setScrolled(hasPassedThreshold);
      setIsStickyVisible(hasPassedThreshold && isScrollingUp);
      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================
     Header height measurement (SAFE)
     ========================================= */
  useEffect(() => {
    const setHeaderHeight = () => {
      const navbar = document.querySelector(".primary-navbar .navbar") as HTMLElement;
      if (!navbar) return;

      requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--header-height",
          `${navbar.offsetHeight}px`
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
    const navbar = document.querySelector(".primary-navbar .navbar") as HTMLElement;
    if (!navbar) return;

    requestAnimationFrame(() => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${navbar.offsetHeight}px`
      );
    });
  }, [scrolled, isStickyVisible]);

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

  useEffect(() => {
    const updateHeroBannerState = () => {
      if (pathname !== "/") {
        setIsHeroBannerActive(false);
        return;
      }

      const heroBanner = document.querySelector(".home-banner-wrapper");
      if (!heroBanner) {
        setIsHeroBannerActive(false);
        return;
      }

      const heroBottom = heroBanner.getBoundingClientRect().bottom;
      const headerHeight =
        document.querySelector(".primary-navbar .navbar")?.clientHeight ?? 0;

      setIsHeroBannerActive(heroBottom > headerHeight + 20);
    };

    updateHeroBannerState();
    window.addEventListener("scroll", updateHeroBannerState, { passive: true });
    window.addEventListener("resize", updateHeroBannerState);

    return () => {
      window.removeEventListener("scroll", updateHeroBannerState);
      window.removeEventListener("resize", updateHeroBannerState);
    };
  }, [pathname]);


  return (
    <>
      <header className="header">
        <div
          className={`primary-navbar ${scrolled ? "navbar-scrolled" : ""} ${
            isStickyVisible ? "navbar-active" : "navbar-hidden"
          } ${isHeroBannerActive ? "navbar-hero-glass" : ""}`}
        >
          <div className="container">
            <nav className="navbar">
              {/* Logo */}
              <div className="navbar__logo">
                <Link href="/" aria-label="Home">
                  <Image
                    src={logoSrc}
                    alt="Logo"
                    width={270}
                    height={68}
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </Link>
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
                  className="d-none d-xl-flex"
                  onClick={() => setIsOpen(true)}
                  aria-label="Open sidebar"
                >
                  <i className="material-symbols-outlined">widgets</i>
                </button>
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
              <Link
                href={sub.path}
                className={pathname === sub.path ? "active-sub" : ""}
              >
                {sub.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </li>
  ) : (
    <li className="navbar__item">
      <Link
        href={item.path}
        className={pathname === item.path ? "active-it" : ""}
      >
        {item.title}
      </Link>
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
            <Link
              href={child.path}
              className={pathname === child.path ? "active-sub" : ""}
            >
              {child.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
