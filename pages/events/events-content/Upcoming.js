import React, { useState } from "react"
import styles from "./events_content.module.css"
import UpcomingCard from "../../../components/cards/upcoming-card/UpcomingCard"

const Upcoming = ({ searchText, eventsData }) => {
  let i = 0.5
  const [data, setdataa] = useState(() => (eventsData ? eventsData : []))

  return (
    <div className={styles.events_cards_container}>
      {data.map((element) => {
        i = i + 0.25
        return (
          <div className={styles.Upcoming} style={{ animationDuration: `${i}s` }}>
            <UpcomingCard key={element.id} bgColor={element.bgColor ? element.bgColor : "#ECDAF8"} bgUrl={element.bgUrl} title={element.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Upcoming
