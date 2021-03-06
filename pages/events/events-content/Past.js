import React, { useState } from "react"
import styles from "./events_content.module.css"
import PastCard from "../../../components/cards/past-card/PastCard"

const Past = ({ searchText, eventsData }) => {
  let i = 0.5
  const [data, setdataa] = useState(() => (eventsData ? eventsData : []))

  return (
    <section className={styles.events_cards_container}>
      {data.map((element) => {
        i = i + 0.25
        return (
          <div className={styles.Upcoming} style={{ animationDuration: `${i}s` }}>
            <PastCard key={element.id} bgColor={element.bgColor} bgUrl={element.bgUrl} />
          </div>
        )
      })}
    </section>
  )
}

export default Past
