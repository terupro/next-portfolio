import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const NAV_ICONS = [
  { label: AiFillGithub, href: "https://github.com/terupro" },

  { label: AiFillTwitterCircle, href: "https://twitter.com/terupro911" },
  {
    label: AiFillFacebook,
    href: "https://www.facebook.com/profile.php?id=100062605875623",
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>TeruProduction</a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        {NAV_LINKS.map((link, index) => (
          <div className={styles.navLink}>
            <Link key={index} href={link.href}>
              <a>{link.label}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.navIcons}>
        {NAV_ICONS.map((icon) => (
          <div className={styles.navIcon} href={icon.href}>
            <icon.label></icon.label>
          </div>
        ))}
      </div>
    </header>
  );
};
