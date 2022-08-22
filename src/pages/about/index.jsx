import React from "react";
import { About as AboutComponent } from "../../components/About";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "/src/styles/Home.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default About;
