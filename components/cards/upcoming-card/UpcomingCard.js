import React from "react"
import styles from "./upcoming_card.module.css"
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils"
import Link from "next/link"

const UpcomingCard = ({ bgColor, bgUrl }) => {
  const darkenedLabelBg = LightenDarkenColor(bgColor, -20)

  return (
    <div className={styles.upcoming_card_wrapper} style={{ backgroundColor: "#f2f2f2" }}>
      <div className={styles.text_content} style={{ backgroundColor: bgColor }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
            {" "}
            Seminar{" "}
          </div>
          <div className={styles.date}>18 jan 2021</div>
          <div className={styles.title}>Mental health awareness seminar</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr et dolore magna aliquyam erat sadipscing elitr
          </div>
          <Link href="/events/register/example">
            <button className={styles.register}>Register</button>
          </Link>
        </div>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${bgUrl})` }}></div>
    </div>
  )
}

export default UpcomingCard
