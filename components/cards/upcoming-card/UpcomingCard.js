import React from "react"
import styles from "./upcoming_card.module.css"
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils"
import Link from "next/link"

const UpcomingCard = ({ bgColor, bgUrl, title, label, shortDesc, largeDesc, date }) => {
  const darkenedLabelBg = LightenDarkenColor(bgColor, -20)
  let buttonText = label == "Upcoming" ? "Register" : "Explore More"
  let cardLabel = label == "Upcoming" ? "Upcoming" : "Past"
  let linkUrl = label == "Upcoming" ? "/events/register/example " : "/events/eventdetails/example"
  return (
    <div className={styles.upcoming_card_wrapper} style={{ backgroundColor: "#f2f2f2" }}>
      <div className={styles.text_content} style={{ backgroundColor: bgColor }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
            {cardLabel}
          </div>
          <div className={styles.date}>{date}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{shortDesc}</div>
          {/* <Link href="/events/register/example"> */}
          <Link href={linkUrl}>
            <button className={styles.register}>{buttonText}</button>
            {/* </Link> */}
          </Link>
        </div>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${bgUrl})` }}></div>
    </div>
  )
}

export default UpcomingCard
