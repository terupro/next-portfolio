import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>TeruProduction</a>
        </Link>
      </div>
      <div className={styles.navList}>
        {NAV_ITEMS.map((item, index) => (
          <Link key={index} href={item.href}>
            <a>{item.label}</a>
          </Link>
        ))}
      </div>
    </header>
  );
};
