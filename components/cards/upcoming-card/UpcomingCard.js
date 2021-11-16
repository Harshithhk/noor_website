import React, { useState } from "react"
import styles from "./upcoming_card.module.css"
import { LightenDarkenColor } from "../../../utils/design-utils/css-utils"
import Link from "next/link"
import moment from "moment"

const UpcomingCard = ({ dataa }) => {
  const [data, setData] = useState(() => dataa)
  const darkenedLabelBg = LightenDarkenColor(data.color, -20)
  let buttonText = data.event_type == "upcoming" ? "Register" : "Explore More"
  // let linkUrl = label == "upcoming" ? "/events/register/example" : "/events/eventdetails/example"
  return (
    <div className={styles.upcoming_card_wrapper} style={{ background: `linear-gradient(to right,#f2f2f2 60%, ${data.color})` }}>
      <div className={styles.text_content} style={{ backgroundColor: data.color }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.label} style={{ backgroundColor: darkenedLabelBg }}>
            {data.genre.toLowerCase()}
          </div>
          <div className={styles.date}>
            {moment(data.date)
              .format(`DD MMM YY ${data.event_type === "upcoming" ? ", h:mm a" : ""}`)
              .toLowerCase()}
          </div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.description}>{data.short_description}</div>
          <Link href={data.event_type === "upcoming" ? `/events/register/${data._id}` : `/events/eventdetails/${data._id}`}>
            <button className={styles.register}>{buttonText}</button>
          </Link>
        </div>
      </div>
      <div className={styles.image} style={{ backgroundImage: `url(${data.cover_image_url})` }}></div>
    </div>
  )
}

export default UpcomingCard
