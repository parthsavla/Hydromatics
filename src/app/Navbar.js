"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./index.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobileView(screenWidth <= 880);
      if (!isMobileView) setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav-cont">
      <div className="logo">
        <img
          src="/images/favicon.ico"
          alt="Logo of Hydromatics Limited Kenya"
        />
        <a href="/">HYDROMATICS LIMITED</a>
      </div>
      {isMobileView && !showMenu && (
        <IoMenu className="menu" onClick={toggleMenu} />
      )}
      {isMobileView && showMenu && (
        <IoIosCloseCircleOutline className="close" onClick={toggleMenu} />
      )}
      {(isMobileView && showMenu) || !isMobileView ? (
        <nav className="sidebar">
          <Link
            href="/"
            onClick={handleCloseMenu}
            className={isActive("/") ? "active" : ""}
          >
            Home
          </Link>

          <Link
            href="/#about"
            className={isActive("/about") ? "active" : ""}
            onClick={handleCloseMenu}
          >
            About
          </Link>

          <Link
            href="/#contacts"
            className={isActive("/contact") ? "active" : ""}
            onClick={handleCloseMenu}
          >
            Contacts
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
