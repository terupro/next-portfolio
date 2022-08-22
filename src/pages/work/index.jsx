import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Work as WorkComponent } from "../../components/Work";
import styles from "/src/styles/Home.module.scss";

const Work = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WorkComponent />
      <Footer />
    </div>
  );
};

export default Work;
