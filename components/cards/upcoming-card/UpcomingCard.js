import React, { useState } from "react"
import styles from "./upcoming_card.module.css"
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils"
import Link from "next/link"

const UpcomingCard = ({ dataa }) => {
  const [data, setData] = useState(() => dataa)
  const darkenedLabelBg = LightenDarkenColor(data.bgColor, -20)
  let buttonText = data.label == "Upcoming" ? "Register" : "Explore More"
  let cardLabel = data.label == "Upcoming" ? "Upcoming" : "Past"
  // let linkUrl = label == "Upcoming" ? "/events/register/example" : "/events/eventdetails/example"
  return (
    <div style={{ background: `linear-gradient(to right,#f2f2f2 60%, ${data.bgColor});` }} className={styles.upcoming_card_wrapper}>
      <div className={styles.text_content} style={{ backgroundColor: data.bgColor }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
            {cardLabel}
          </div>
          <div className={styles.date}>{data.date}</div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.description}>{data.shortDescription}</div>
          {/* <Link href="/events/register/example"> */}
          <Link href={data.link}>
            <button className={styles.register}>{buttonText}</button>
            {/* </Link> */}
          </Link>
        </div>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${data.bgUrl})` }}></div>
    </div>
  )
}

export default UpcomingCard
