import React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Contact as ContactComponent } from "../../components/Contact";
import styles from "/src/styles/Home.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Contact;
