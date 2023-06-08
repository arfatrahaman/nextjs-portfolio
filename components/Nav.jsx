"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaStream } from "react-icons/fa";
import {
  FcHome,
  FcBusinessman,
  FcServices,
  FcFile,
  FcBusinessContact,
} from "react-icons/fc";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    if (!navOpen) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };

  const handleNavClick = () => {
    console.log("hi");
  };
  return (
    <aside id="navbar">
      <div className="my-portfolio-left-side">
        <div className="left-side-content">
          <nav id="navigation">
            <div className="navigation-wrapper">
              <div className="my-logo">
                <Link href="/" onClick={handleNavClick}>
                  <h2 className="logo">ARH</h2>
                </Link>
                <FaStream className="toggle-btn" onClick={toggleNav} />
              </div>
              <div className="my-image">
                <Image
                  src="/images/my.png"
                  width="400"
                  height="400"
                  priority={true}
                  alt="arfat rahaman hridoy"
                  className="profile-image"
                />
              </div>
              <div className="my-nav-lists">
                <ul className={navOpen ? "show-nav" : "nav-links"}>
                  <Link href="/" className="nav-link">
                    <FcHome className="nav-icon" /> Home
                  </Link>
                  <Link href="/about" className="nav-link">
                    <FcBusinessman className="nav-icon" /> About
                  </Link>
                  <Link href="/project" className="nav-link">
                    <FcFile className="nav-icon" /> Project
                  </Link>
                  <Link href="/service" className="nav-link">
                    <FcServices className="nav-icon" /> Service
                  </Link>
                  <Link href="/contact" className="nav-link">
                    <FcBusinessContact className="nav-icon" /> Contact Me
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
