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
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className={styles.logo}
      >
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav className={styles.nav}>
        <a
          data-aos="fade-down"
          data-aos-duration="1100"
          href="/"
          className={`${styles.btn}`}
        >
          Maison
        </a>
        <a
          href="/products"
          className={`${
            activeNavBtn === "products" ? styles.btn__active : styles.btn
          }`}
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Produits
        </a>
        <a
          href="/about"
          className={`${
            activeNavBtn === "about" ? styles.btn__active : styles.btn
          }`}
          data-aos="fade-down"
          data-aos-duration="1300"
        >
          Histoire{" "}
        </a>
        <a
          className={`${styles.btn}`}
          data-aos="fade-down"
          data-aos-duration="1400"
        >
          Boutique
        </a>
        <a
          href="/upcoming"
          className={`${
            activeNavBtn === "upcoming" ? styles.btn__active : styles.btn
          }`}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Prochainement
        </a>
      </nav>
      <div
        className="w-full flex justify-end md:hidden z-30"
        onClick={toggleMobileNav}
        data-aos="fade-down"
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
