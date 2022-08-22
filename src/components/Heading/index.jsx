import React from "react";
import styles from "./Heading.module.scss";

export const Heading = ({ label }) => {
  return (
    <div className={styles.container}>
      <h2>{label}</h2>
    </div>
  );
};
