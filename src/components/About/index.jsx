import Image from "next/image";
import React from "react";
import { Heading } from "../Heading";
import styles from "./About.module.scss";

const PROGRAMMING = [
  "#HTML",
  "#CSS",
  "#JavaScript",
  "#TypeScript",
  "#React",
  "#React",
  "#Next.js",
  "#Node.js",
  "#Swift",
  "#Flutter",
];

const TOOLS = [
  "#GitHub",
  "#Vercel",
  "#Firebase",
  "#WorkPress",
  "#Canva",
  "#Postman",
  "#Analytics",
  "#SearchConsole",
];

export const About = () => {
  return (
    <div>
      <Heading label={"About"} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.profileWrapper}>
            <Image
              src="/images/profile.jpeg"
              width={150}
              height={150}
              className={styles.profileImg}
            />
            <div className={styles.profileList}>
              <h3>Hello, I'm Teru!</h3>
              <span>Web Developer/</span>
              <span>Blogger/</span>
              <span>UniversityStudent</span>
            </div>
          </div>
          <div className={styles.skillsWrapper}>
            <div className={styles.skills}>
              <h3>Programming</h3>
              <div className={styles.box}>
                {PROGRAMMING.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
              <div className={styles.skills}>
                <h3>Tools</h3>
                <div className={styles.box}>
                  {TOOLS.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
