import React from "react";
import styles from "./upcoming_card.module.css";

const UpcomingCard = ({ bgColor }) => {
  return <div className={styles.upcoming_card_wrapper} style={{ backgroundColor: bgColor }}></div>;
};

export default UpcomingCard;
