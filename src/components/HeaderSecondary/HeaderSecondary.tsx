"use client";
import React, { useState } from "react";

import { MobileNav } from "./MobileNav";

import styles from "./HeaderSecondary.module.css";
import Logo from "@/icons/logo.svg";

import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

type HeaderSecondaryProps = {
  activeNavBtn?: "about" | "products" | "upcoming";
};

export const HeaderSecondary: React.FC<HeaderSecondaryProps> = ({
  activeNavBtn,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = isMobileNavOpen ? "unset" : "hidden";
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <a href="/" className={`${styles.btn}`}>
          Home
        </a>
        <a
          href="/products"
          className={`${
            activeNavBtn === "products" ? styles.btn__active : styles.btn
          }`}
        >
          Products
        </a>
        <a
          href="/about"
          className={`${
            activeNavBtn === "about" ? styles.btn__active : styles.btn
          }`}
        >
          Our Story
        </a>
        <a className={`${styles.btn}`}>Shop</a>
        <a
          href="/upcoming"
          className={`${
            activeNavBtn === "upcoming" ? styles.btn__active : styles.btn
          }`}
        >
          Upcoming
        </a>
      </nav>
      <div
        className="w-full flex justify-end md:hidden z-30"
        onClick={toggleMobileNav}
      >
        {isMobileNavOpen ? (
          <IoMdClose
            className="text-[45px] text-beige rounded-md z-30"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          />
        ) : (
          <BiMenu
            className="text-[45px] text-beige rounded-md z-30"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          />
        )}
      </div>
      {isMobileNavOpen && <MobileNav />}
    </header>
  );
};
