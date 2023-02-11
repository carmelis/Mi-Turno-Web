"use client";
import styles from "../../styles/components/TopBanner.module.css";
import { CgClose } from "react-icons/cg";

const TopBanner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>Mensaje promocional</p>
      <CgClose className={styles.close} />
    </div>
  );
};

export default TopBanner;
