import React from "react";
import { Heading } from "../Heading";
import styles from "./Contact.module.scss";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

export const Contact = () => {
  return (
    <div>
      <Heading label="Contact" />
      <div className={styles.container}>
        <div className={styles.messageWrapper}>
          <div className={styles.messageText}>
            <h2>
              Do you think something interesting? <br /> Shoot me a message.
            </h2>
            <p>気軽にメッセージしてください。</p>
          </div>
          <div className={styles.messageButton}>
            <a href="mailto:terupro911@gmail.com" target="_blank">
              Let's Talk
            </a>
          </div>
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.socialItems}>
            <h2>Social</h2>
            {NAV_ICONS.map((item, index) => (
              <a key={index} href={item.href} target="_blank">
                <span>
                  <item.icon />
                </span>
                {item.label}
              </a>
            ))}
          </div>
          <div className={styles.socialItems}>
            <h2>Gmail</h2>
            <p>
              <a href="mailto:terupro911@gmail.com" target="_blank">
                terupro911@gmail.com
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NAV_ICONS = [
  { icon: AiFillGithub, href: "https://github.com/terupro", label: "GitHub" },

  {
    icon: AiFillTwitterCircle,
    href: "https://twitter.com/terupro911",
    label: "Twitter",
  },
  {
    icon: AiFillFacebook,
    href: "https://www.facebook.com/profile.php?id=100062605875623",
    label: "FaceBook",
  },
];
