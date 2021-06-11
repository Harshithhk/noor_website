import React from "react";
import styles from "./upcoming_card.module.css";
import {LightenDarkenColor} from "../../../utils/design-utils/css-utils"

const UpcomingCard = ({ bgColor }) => {

  const darkenedLabelBg = LightenDarkenColor(bgColor,-30)

  return <div className={styles.upcoming_card_wrapper} style={{ backgroundColor: "#f2f2f2" }}>
    <div className={styles.text_content} style={{ backgroundColor: bgColor }}>
      <div  className={styles.label} style={{backgroundColor: darkenedLabelBg}}> Seminar </div>
    </div>
  </div>;
};

export default UpcomingCard;
