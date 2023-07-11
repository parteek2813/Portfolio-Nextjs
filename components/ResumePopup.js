import React from "react";
import Image from "next/image";
import styles from "../styles/ResumePopup.module.css";

const ResumePopup = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={styles.overlay} style={{ zIndex: 1 }}>
      <div className={styles.popup}>
        <div className={styles.resumeContainer}>
          <Image src="/resume.png" width={800} height={1000} alt="Resume" />
        </div>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ResumePopup;
